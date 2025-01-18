import Images from '@/assets/images/Images';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, View,Text } from 'react-native';


export default function HomeScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {navigation.navigate("index2") }, 1500)
  }, [])


  return (
    <View style={styles.stepContainer}>
      <ImageBackground style={styles.background} source={Images.background}>
        <ActivityIndicator color={'#fff'} size={'large'} />
        
      </ImageBackground>
      
      {/* <View style={styles.top}>
      </View> */}
    </View>

  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

  },
  stepContainer: {
    // gap: 8,
    // marginBottom: 8,
    // backgroundColor: 'white',
    flex: 1
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 200,

  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  top: {
    flex: 0.1
  }


});


