import React from 'react';
import { SafeAreaView, View } from 'react-native';

const Mondrian = () => {
	return (
		<SafeAreaView style={{flex:1}}>
			<View style={{flex:6, flexDirection:'row'}}>
				<View style={{flex:2}}>
					<View style={{flex:3, flexDirection:'row'}}>
						<View style={{flex:3}}>
							<View style={{flex:3}}></View>
							<View style={{flex:2, backgroundColor:'blue'}}></View>
						</View>
						<View style={{flex:2, backgroundColor:'black'}}></View>
					</View>
					<View style={{flex:2}}></View>
				</View>
				<View style={{flex:1}}>
					<View style={{flex:1, backgroundColor:'yellow'}}></View>
					<View style={{flex:2, backgroundColor:'blue'}}></View>
				</View>
			</View>
			<View style={{flex:1, backgroundColor:'red'}}></View>
			<View style={{flex:1, flexDirection:'row'}}>
				<View style={{flex:1, backgroundColor:'yellow'}}></View>
				<View style={{flex:2, backgroundColor:'black'}}></View>
			</View>
		</SafeAreaView>
	)
}

export default Mondrian;