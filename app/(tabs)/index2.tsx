import Images from '@/assets/images/Images'

import { Image, ImageBackground, StyleSheet, View, Text, } from 'react-native';
export default function HomeScreen() {
  return (

    <ImageBackground style={styles.stepContainer} source={Images.background}>

      <Text style={styles.Text}> </Text>



    </ImageBackground>


  );
}
const styles = StyleSheet.create({
  Text: {
    textAlign: "center",
    color: "black",
    fontSize: 140,
  },
  stepContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },



},



);


