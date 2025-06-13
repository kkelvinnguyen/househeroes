import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth, db } from '../FirebaseConfig';

// Create a shared space for all screens to access the user's information, think of it like a room with a records of each user.
// Remember export means that this can be accessed by other files.
export const AuthContext = createContext<AuthContextType | null>(null);

// Each user SHOULD have these fields in their record, that's why its an interface.
// Note: key: type;
// This is an export interface, this interface can be used in all files.
export interface UserData {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  pfp: string;
  familyCode: string;
}

// The AuthProvider will wrap around and look at React components (ReactNode).
interface AuthProviderProps {
  children: ReactNode;
}

// This allows every file to use the user, setUser, login and logout functions.
interface AuthContextType {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  login: (userData: UserData) => Promise<void>;
  logout: () => Promise<void>;
  updateUserFamilyCodeInContext: (code: string) => Promise<void>;
}

// This component will receive children as props.
export const AuthProvider = ({ children }: AuthProviderProps) => {

  // User holds the record of the current user, setUser is the function to change the user's info.
  // Start with that nobody is logged in.
  const [user, setUser] = useState<UserData | null>(null);

  // If the user has previously logged in, keep them logged in.
  // Note: All useEffect functions are called immediately after the file is loaded.
  useEffect(() => {
    // Check if there is a saved user in AsyncStorage
    const loadUser = async () => {
      // If there is, then get the info from userData and store it in storedUser.
      const storedUser = await AsyncStorage.getItem('userData');

      // If storedUser isn't empty, turn the storedUser data into usable JSON data.
      if (storedUser) setUser(JSON.parse(storedUser));
    };
    loadUser();
  }, []);

  // When someone logs in, store their record and update all screens to the logged in user.
  const login = async (userData: UserData) => {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    setUser(userData);
  };

  // Delete the saved user's info when they logout and update all screens to null.
  const logout = async () => {
    await AsyncStorage.removeItem('userData');
    setUser(null);
  };

  // This function updates the familyCode in Firestore, in AsyncStorage, and in context.
  const updateUserFamilyCodeInContext = async (code: string) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('No user is currently logged in.');

      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, { familyCode: code.toUpperCase() });

      // Get the updated user data from Firestore
      const updatedSnap = await getDoc(userRef);
      const updatedData = updatedSnap.data();

      if (updatedData) {
        const updatedUser: UserData = {
          uid: currentUser.uid,
          firstName: updatedData.firstName,
          lastName: updatedData.lastName,
          email: updatedData.email,
          role: updatedData.role,
          pfp: updatedData.pfp,
          familyCode: updatedData.familyCode,
        };

        // Update context
        setUser(updatedUser);

        // Update AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error("Failed to update family code in context:", error);
      alert("Could not update family code.");
    }
  };

  // Make the functions created earlier accessible to all screens.
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, updateUserFamilyCodeInContext }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the useAuth function so that the user can use the user, setUser, login, logout functions.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Error with AuthProvider');
  return context;
};
