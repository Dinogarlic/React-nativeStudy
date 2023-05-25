import React from 'react'
import { SafeAreaView, Image, StyleSheet } from 'react-native'

import rnImg from './img/rn.png'

const Img = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={require('./img/rn.png')} style={styles.img}/>
      <Image source={rnImg} style={styles.img}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
})

export default Img