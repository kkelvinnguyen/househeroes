import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SwitchButton from '../components/switchbutton';
import { useAuth } from '../context/AuthContext';


const Family = () => {

    const router = useRouter();
    const [isCreateMode, setIsCreateMode] = useState(true);
    const [familyCode, setFamilyCode] = useState('');
    const { updateUserFamilyCodeInContext } = useAuth();

    const generateFamilyCode = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            code += letters[randomIndex];
        }
        return code;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F6FD' }}>
            <Stack.Screen options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <View style={{ paddingTop: 80, marginLeft: 100 }}>
                    <View style={{ gap: 15, alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#303040', fontWeight: 'bold', fontSize: 30, alignItems: 'center' }}>
                                Compete Against Your Family
                            </Text>
                            <Text style={{ color: '#303040', fontSize: 20 }}>Join your family using a code, or create one now! </Text>
                            <View style={{marginTop: 20, flexDirection: 'row', flex: 1, alignItems: 'center', gap: 20}}>
                                <Text style={{fontWeight: 'bold'}}>Create a Family</Text>
                                <SwitchButton value={isCreateMode} onToggle={() => setIsCreateMode(!isCreateMode)} />
                                <Text style={{fontWeight: 'bold'}}>Join a Family</Text>
                            </View>
                            {isCreateMode ? (
                                <View style={{ marginTop: 30, justifyContent: 'center', alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 18, flex: 1, textAlign: 'center', alignSelf: 'center'}}>Generate a random 4-letter code. After you press 'Create Family Code', you{"\n"}will be sent to the dashboard where you can view your code at any time.</Text>
                                    <View style={{marginTop: 20, alignSelf: 'center' }}>
                                        <TouchableOpacity
                                        onPress={async () => {
                                        const newCode = generateFamilyCode();
                                        setFamilyCode(newCode);
                                        await updateUserFamilyCodeInContext(newCode); 
                                        router.replace('/dashboard');
                                        }}
                                            
                                            style={{
                                                backgroundColor: '#9194EF',
                                                width: 200,
                                                paddingVertical: 15,
                                                paddingHorizontal: 30,
                                                borderRadius: 8,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    alignSelf: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: 14,
                                                    fontWeight: '600',
                                                }}
                                            >
                                                Create Family Code
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                ) : (
                                <View style={{ marginTop: 10, flex: 1, alignSelf: 'center' }}>
                                    <Text style={{ fontSize: 18, flex: 1, alignSelf: 'center'}}>Enter your family code:</Text>
                                    <View style={{ marginTop: 15, alignSelf: 'center'}}>
                                        <TextInput
                                            value={familyCode}
                                            maxLength={4}
                                            autoCapitalize="characters"
                                            onChangeText={setFamilyCode}
                                            style={{
                                            height: 50,
                                            width: 200,
                                            borderColor: '#9194EF',
                                            borderWidth: 2,
                                            borderRadius: 8,
                                            backgroundColor: '#F5F6FD',
                                            fontSize: 20,
                                            textAlign: 'center',
                                            color: '#9194EF',
                                            textTransform: 'uppercase'
                                            }}
                                        />
                                    </View>
                                    <View style={{marginTop: 10}}>
                                        <TouchableOpacity
                                            onPress={async () => {
                                                await updateUserFamilyCodeInContext(familyCode);
                                                router.replace('/dashboard');
                                            }}
                                                style={{
                                                    backgroundColor: '#9194EF',
                                                    width: 200,
                                                    paddingVertical: 15,
                                                    paddingHorizontal: 30,
                                                    borderRadius: 8,
                                                }}
                                        >
                                            <Text
                                                style={{
                                                    alignSelf: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white',
                                                    fontSize: 14,
                                                    fontWeight: '600',
                                                }}
                                            >
                                                Join Family
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
                <View style={{marginLeft: 150, marginBottom: 20}}>
                    <Image
                        source={require('../assets/images/groupcolumn.png')}
                        style={{ width: 200, height: 800 }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Family;
