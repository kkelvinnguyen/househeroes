import React from 'react';
import { Image, Text, View } from 'react-native';

const Leaderboard = () => {
  return (
    <View>
        <View style={{flex: 1, backgroundColor: '#9194EF', marginTop: 30, borderRadius: 10, width: '30%', paddingHorizontal: 10, marginBottom: 50, paddingVertical: 25}} >
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white', alignSelf: 'center', justifyContent: 'flex-start' }}>Leaderboard</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center', gap: 13, marginTop: 30, position: 'relative' }}>
            <Image
              source={require('../assets/images/circle_pfp.png')}
              style={{ width: 60, height: 60, top: 57 }}>
            </Image>
            <Image
              source={require('../assets/images/square_pfp.png')}
              style={{ width: 60, height: 60, top: 5 }}>
            </Image>
            <Image
              source={require('../assets/images/triangle_pfp.png')}
              style={{ width: 60, height: 60, top: 39 }}>
            </Image>
          </View>
          <Image
            source={require('../assets/images/leaderboard.png')}
            style={{ width: 220, height: 220, alignSelf: 'center' }}>
          </Image>
          <View style={{alignSelf: 'center', flex: 1, gap: 15, width: '80%'}}>

            <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
              <View style={{ width: 30, height: 30, backgroundColor: '#9194EF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>1</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/images/circle_pfp.png')} style={{ width: 30, height: 30 }} />
                <View style={{paddingLeft: 10}}>
                  <Text>Karen</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 10, color: '#9194EF', fontWeight: 'bold'}}>500</Text>
                    <Text style={{fontSize: 10}}> Points</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
              <View style={{ width: 30, height: 30, backgroundColor: '#9194EF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>2</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/images/circle_pfp.png')} style={{ width: 30, height: 30 }} />
                <View style={{paddingLeft: 10}}>
                  <Text>Melissa</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 10, color: '#9194EF', fontWeight: 'bold'}}>400</Text>
                    <Text style={{fontSize: 10}}> Points</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
              <View style={{ width: 30, height: 30, backgroundColor: '#9194EF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>3</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/images/circle_pfp.png')} style={{ width: 30, height: 30 }} />
                <View style={{paddingLeft: 10}}>
                  <Text>Kelvin</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 10, color: '#9194EF', fontWeight: 'bold'}}>300</Text>
                    <Text style={{fontSize: 10}}> Points</Text>
                  </View>
                </View>
              </View>
            </View>

          </View>
        </View>
    </View>
  );
};

export default Leaderboard;