import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Color = () => {
	return (
		<SafeAreaView style={{flex:1}}>
			<View style={styles.containerPowderblue}>
				<Text>Powderblue</Text>
			</View>
			<View style={{flex:3, flexDirection:'row'}}>
				<View style={{flex: 1}}>
					<View style={styles.containerYellow}>
						<Text>Yellow</Text>
					</View>
					<View style={styles.containerLavender}>
						<Text>Lavender</Text>
					</View>
				</View>
				<View style={styles.containerPink}>
					<Text>Pink</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	containerPowderblue: {
		flex: 1,
		backgroundColor: 'powderblue',
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerPink: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerYellow: {
		flex: 1,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerLavender: {
		flex: 2,
		backgroundColor: 'lavender',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default Color