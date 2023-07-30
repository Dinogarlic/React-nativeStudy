import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	View,
	TouchableOpacity,
    Text,
	Linking,
	StyleSheet
} from 'react-native';

const DATA = {
	"page": [
		{
			"name": "GOOGLE",
			"url": "https://www.google.com/",
			"mainColor": "red"
		},
		{
			"name": "NAVER",
			"url": "https://www.naver.com/",
			"mainColor": "yellowgreen"
		},
		{
			"name": "DAUM",
			"url": "https://www.daum.net/",
			"mainColor": "orange"
		},
		{
			"name": "YAHOO",
			"url": "https://www.yahoo.com/",
			"mainColor": "mediumpurple"
		},
		{
			"name": "BING",
			"url": "https://www.bing.com/",
			"mainColor": "green"
		},
		{
			"name": "ZUM",
			"url": "https://zum.com/",
			"mainColor": "skyblue"
		},
		{
			"name": "NATE",
			"url": "https://www.nate.com/",
			"mainColor": "red"
		},
	]
};

const GoToLink = ({ name, url, color }) => {
	return (
		<TouchableOpacity onPress={() => Linking.openURL(url)}
        style={{
            backgroundColor: color, 
            height: 100, 
            width: 300,
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 30, 
            marginBottom: 50
        }}>
		    <Text style={styles.txt}>Go To {name}</Text>
		</TouchableOpacity>
	)
};

const SearchEngine = () => {
	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={{alignItems:'center'}}>
				<Text style={styles.title}>검색 엔진 모음</Text>
				<View>
					<GoToLink name={DATA.page[0].name} url={DATA.page[0].url} color={DATA.page[0].mainColor}/>
					<GoToLink name={DATA.page[1].name} url={DATA.page[1].url} color={DATA.page[1].mainColor}/>
					<GoToLink name={DATA.page[2].name} url={DATA.page[2].url} color={DATA.page[2].mainColor}/>
					<GoToLink name={DATA.page[3].name} url={DATA.page[3].url} color={DATA.page[3].mainColor}/>
					<GoToLink name={DATA.page[4].name} url={DATA.page[4].url} color={DATA.page[4].mainColor}/>
					<GoToLink name={DATA.page[5].name} url={DATA.page[5].url} color={DATA.page[5].mainColor}/>
					<GoToLink name={DATA.page[6].name} url={DATA.page[6].url} color={DATA.page[6].mainColor}/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	title: {
		color: 'gray', 
		fontSize: 30, 
		fontWeight: '600',
		margin: 50
	},
	txt: {
		fontSize: 15, 
		color: 'white'
	}
});

export default SearchEngine;