import { Stack } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

const dashboard = () => {
    const { user, logout } = useAuth();
    
    let pfpImage;

        if (user?.pfp === 'pfp1') {
        pfpImage = require('../assets/images/square_pfp.png');
        } else if (user?.pfp === 'pfp2') {
        pfpImage = require('../assets/images/star_pfp.png');
        } else if (user?.pfp === 'pfp3') {
        pfpImage = require('../assets/images/triangle_pfp.png');
        } else {
        pfpImage = require('../assets/images/circle_pfp.png');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F6FD' }}>
            <Stack.Screen options={{ headerShown: false, animation: 'slide_from_right' }} />
            
            <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 40}}>
                <Image
                    source={pfpImage}
                    style={{ width: 50, height: 50, alignSelf: 'center', display: 'flex' }}
                />
                <View style={{ marginLeft: 10}}>
                    {/* the ? means if user exists and is not null. */}
                    <Text style={{ color: '#303040', fontSize: 30, fontWeight: 'bold' }} >Hello, {user?.firstName}!</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ color: '#303040', fontSize: 20 }}>{user?.role} / </Text>
                        <Text style={{ color: '#9194EF', fontSize: 20, fontWeight: 'bold' }}>200</Text>
                        <Text style={{ color: '#303040', fontSize: 20 }}> Points</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default dashboard;