import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import driverData from './dataset/drivers.json';

const image_v_1 = require('./assets/Drivers/Driver-1.jpg');
const image_v_2 = require('./assets/Drivers/Driver-2.jpg');
const image_v_3 = require('./assets/Drivers/Driver-3.jpg');
const image_v_4 = require('./assets/Drivers/Driver-1.jpg');
const InfoScreen = ({ route, navigation }) => {
  const Driver = driverData.drivers.filter(
    (element) => element.id == route.params.id
  )[0];
  const getImage = (id) => {
    if (id == 1) return image_v_1;
    if (id == 2) return image_v_2;
    if (id == 3) return image_v_3;
    if (id == 4) return image_v_4;
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 150,
            height: '100%',
          }}
        >
          <View style={styles.imageSection}>
            <Image
              source={image_v_1}
              resizeMode="contain"
              style={styles.vehicleImage}
            />
          </View>
          <View style={styles.headSection}>
            <View style={styles.topTextArea}>
              <Text style={styles.makemodelText}>
                {Driver.name} - {Driver.license}
              </Text>
              <Text style={styles.price}>
                <Text style={styles.amount}>${Driver.price_per_day}</Text> /day
              </Text>
            </View>
          </View>
          <Text style={styles.descriptionText}>{Driver.description}</Text>
          <Text style={styles.propertiesText}>Rating</Text>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>Book a Driver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconStyle: {
    width: 25,
  },
  HeaderText: {
    paddingTop: -25,
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '500',
    marginBottom: 40,
  },
  faceIconStyle: {
    width: 30,
  },

  imageSection: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicleImage: {
    width: '100%',
    height: '100%',
    marginBottom: 50,
  },

  headSection: {},
  topTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontWeight: '400',
  },
  amount: {
    fontWeight: 'bold',
  },
  typetranText: {
    marginTop: 1,
    color: '#696969',
    fontWeight: '600',
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: '#696969',
    fontWeight: '500',
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '500',
  },
  propertiesArea: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: '#696969',
  },
  valueText: {
    fontSize: 12,
    color: 'black',
  },
  rentButton: {
    marginTop: 50,
    height: 40,
    // padding: 10,
    alignSelf: 'center',
    width: 250,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});
