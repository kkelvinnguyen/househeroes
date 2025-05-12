import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F6FD' }}>
            <Stack.Screen options={{ headerShown: false, animation: 'slide_from_bottom' }} />
            <View style={{ paddingTop: 20 }}>
                <TouchableOpacity onPress={() => router.replace('/')} style={{ paddingLeft: 20 }}>
                    <Image
                        source={require('../assets/images/backButton.png')}
                        style={{ width: 40, height: 40, marginLeft: 10, marginBottom: 20 }}
                    />
                </TouchableOpacity>

                <View style={{ paddingLeft: 30 }}>
                    <Text style={{ color: '#303040', fontWeight: 'bold', fontSize: 30 }}>Welcome Back</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#303040', fontSize: 20 }}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => router.push('/signup')}>
                            <Text style={{ color: '#303040', fontSize: 20, textDecorationLine: 'underline' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ gap: 15, alignSelf: 'center', justifyContent: 'center', paddingTop: 50 }}>
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
                        secureTextEntry
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
                                color: 'white',
                                fontSize: 14,
                                fontWeight: '600',
                            }}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Image
                source={require('../assets/images/group.png')}
                style={{ width: 500, height: 550, alignSelf: 'center', marginTop: 200 }}
            />
        </SafeAreaView>
    );
};

export default Login;