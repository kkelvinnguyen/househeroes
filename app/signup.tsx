import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Signup = () => {

    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedPfp, setSelectedPfp] = useState<string | null>(null);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F6FD' }}>
            <Stack.Screen options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            <View style={{ paddingTop: 20 }}>
                <View style={{ paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => router.replace('/')}>
                        <Image
                            source={require('../assets/images/backButton.png')}
                            style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 20 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ paddingLeft: 30 }}>
                    <Text style={{ color: '#303040', fontWeight: 'bold', fontSize: 30 }}>
                        Create an Account
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#303040', fontSize: 20 }}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => router.push('/login')}>
                            <Text style={{ color: '#303040', fontSize: 20, textDecorationLine: 'underline' }}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ gap: 15, alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', paddingTop: 50, gap: 10 }}>
                        <TextInput
                            placeholder="First Name"
                            placeholderTextColor="#9194EF"
                            value={firstName}
                            onChangeText={setFirstName}
                            style={{
                                height: 50,
                                width: 170,
                                borderColor: '#9194EF',
                                borderWidth: 2,
                                paddingHorizontal: 10,
                                borderRadius: 8,
                                backgroundColor: '#F5F6FD',
                            }}
                        />

                        <TextInput
                            placeholder="Last Name"
                            placeholderTextColor="#9194EF"
                            value={lastName}
                            onChangeText={setLastName}
                            style={{
                                height: 50,
                                width: 170,
                                borderColor: '#9194EF',
                                borderWidth: 2,
                                paddingHorizontal: 10,
                                borderRadius: 8,
                                backgroundColor: '#F5F6FD',
                            }}
                        />
                    </View>

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#9194EF"
                        value={email}
                        onChangeText={setEmail}
                        style={{
                            height: 50,
                            width: 350,
                            borderColor: '#9194EF',
                            borderWidth: 2,
                            paddingHorizontal: 10,
                            borderRadius: 8,
                            backgroundColor: '#F5F6FD',
                        }}
                    />

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#9194EF"
                        value={password}
                        onChangeText={setPassword}
                        style={{
                            height: 50,
                            width: 350,
                            borderColor: '#9194EF',
                            borderWidth: 2,
                            paddingHorizontal: 10,
                            borderRadius: 8,
                            backgroundColor: '#F5F6FD',
                        }}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ color: '#9194EF', fontSize: 14 }}>Select a</Text>
                            <Text style={{ color: '#9194EF', fontSize: 14 }}>Profile Picture:</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20, marginLeft: 10 }}>
                            {['pfp1', 'pfp2', 'pfp3', 'pfp4'].map((pfp) => (
                                <TouchableOpacity key={pfp} onPress={() => setSelectedPfp(pfp)}>
                                    <Image
                                        source={
                                            pfp === 'pfp1'
                                                ? require('../assets/images/square_pfp.png')
                                                : pfp === 'pfp2'
                                                    ? require('../assets/images/star_pfp.png')
                                                    : pfp === 'pfp3'
                                                        ? require('../assets/images/triangle_pfp.png')
                                                        : require('../assets/images/circle_pfp.png')
                                        }
                                        style={{
                                            width: 45,
                                            height: 45,
                                            borderRadius: 40,
                                            borderWidth: selectedPfp === pfp ? 3 : 0,
                                            borderColor: '#9194EF',
                                        }}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#9194EF', fontSize: 14 }}>I am a:</Text>
                        <View style={{ flexDirection: 'row', gap: 15, marginLeft: 10 }}>
                            {['parent', 'child'].map((role) => (
                                <TouchableOpacity
                                    key={role}
                                    onPress={() => setSelectedRole(role)}
                                    style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 20,
                                        backgroundColor: selectedRole === role ? '#9194EF' : '#F5F6FD',
                                        borderWidth: 2,
                                        borderColor: '#9194EF',
                                        borderRadius: 8,
                                    }}
                                >
                                    <Text style={{ color: selectedRole === role ? 'white' : '#9194EF', fontWeight: 'bold' }}>
                                        {role.charAt(0).toUpperCase() + role.slice(1)}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#9194EF',
                            width: 350,
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
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require('../assets/images/group.png')}
                style={{ width: 500, height: 550, alignSelf: 'center', marginTop: 100 }}
            />
        </SafeAreaView>
    );
};

export default Signup;
