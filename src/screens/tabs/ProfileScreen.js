/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card, Title, Button, Avatar, Divider} from 'react-native-paper';

const {width} = Dimensions.get('screen');

const ProfileScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const customerSection = [
    {
      iconName: 'account-details',
      title: 'Personal Details',
      onPress: () => navigation.push('EditProfile'),
    },
    {
      iconName: 'map-marker-radius',
      title: 'Delivery Address',
      onPress: () => navigation.push('Delivery'),
    },
    {iconName: 'gift', title: 'Order History', onPress: () => {}},
    {iconName: 'ear-hearing', title: 'Help and Support', onPress: () => {}},
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'rgba(253, 169, 221, 0.3)',
          height: 150,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
          }}
        />
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          colors={['rgb(209, 9, 132)', ' rgb(123, 2, 134)']}
          style={styles.linearGradient}>
          <View style={styles.topHeader}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: 20,
                }}>
                Adememi Jones
              </Text>
              <Text
                style={{
                  color: '#fff',
                }}>
                email@email.com
              </Text>
            </View>
            <Avatar.Image
              size={40}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
            {/* <Icon name="shoppingcart" size={30} color="#fff" /> */}
          </View>

          <Card
            style={{
              height: 110,
              width: '90%',
              marginBottom: 14,
              paddingBottom: 8,
              marginTop: 8,
            }}>
            <Card.Content>
              <Text>Wallet</Text>
              <Divider />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  //    padding: 10,
                }}>
                <View>
                  <Text>2034323432</Text>
                  <Text>Providus Bank</Text>
                </View>
                <Button
                  icon="clipboard"
                  style={{
                    maxHeight: '90%',
                  }}
                  uppercase={false}
                  mode="outlined"
                  compact={true}
                  onPress={() => console.log('Pressed')}>
                  Tap to Copy
                </Button>
              </View>
            </Card.Content>
          </Card>
        </LinearGradient>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 120,
        }}>
        <Text>Enable Fingerprint</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>

      <View>
        {customerSection.map(item => (
          <Card key={item.iconName} style={{margin: 10}} onPress={item.onPress}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 13,
              }}>
              <Icon name={item.iconName} size={30} color="red" />
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
    height: 200,
    width: width - 17,
  },
  topHeader: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    //  borderWidth: 6,
    // borderColor: 'red',
  },
});
