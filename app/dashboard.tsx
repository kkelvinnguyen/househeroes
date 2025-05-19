import { Stack } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import AvailableChores from '../components/avaliablechores';
import Leaderboard from '../components/leaderboard';
import CurrentChores from '../components/yourchores';
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
            <View style={{flex: 1, flexDirection: 'row'}}>

               <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 50 }}>
                        <Image
                        source={pfpImage}
                        style={{ width: 50, height: 50, marginTop: 5 }}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ color: '#303040', fontSize: 30, fontWeight: 'bold' }}>
                                Hello, {user?.firstName}!
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#303040', fontSize: 20 }}>{user?.role} / </Text>
                                <Text style={{ color: '#9194EF', fontSize: 20, fontWeight: 'bold' }}>200</Text>
                                <Text style={{ color: '#303040', fontSize: 20 }}> Points</Text>
                            </View>
                        </View>
                    </View>

                    <Leaderboard />
                    <AvailableChores />
                    <CurrentChores />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default dashboard;