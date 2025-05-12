import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {

    const router = useRouter();

    return (
        <View style={styles.center}>
            <View style={{ paddingBottom: 30 }}>
                <Image source={require('../assets/images/Logo.png')} style={{ width: 140, height: 55 }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.blackbold}>Chores</Text>
                    <Text style={styles.blackbold}>just got</Text>
                </View>
                <View style={{ paddingLeft: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={require('../assets/images/Square.png')} style={{ width: 95, height: 95 }} />
                </View>
            </View>
            <Text style={styles.bluebold}>competitive!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.filledButton} onPress={() => router.push('/signup')}>
                    <Text style={styles.filledText}>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outlineButton} onPress={() => router.push('/login')}>
                    <Text style={styles.outlineText}>Log Back In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        backgroundColor: '#F5F6FD',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    blackbold: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#303040'
    },

    bluebold: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#9194EF'
    },

    buttonContainer: {
        gap: 15,
        alignItems: 'center',
        marginTop: 30,
    },

    filledButton: {
        backgroundColor: '#9194EF',
        width: 220,
        paddingVertical: 14,
        borderRadius: 5,
    },

    filledText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },

    outlineButton: {
        backgroundColor: '#F5F6FD',
        borderWidth: 2,
        borderColor: '#9194EF',
        width: 220,
        paddingVertical: 14,
        borderRadius: 5,
    },

    outlineText: {
        color: '#9194EF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});