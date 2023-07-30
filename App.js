import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	TouchableOpacity,
	Linking,
	FlatList,
	Alert,
	StyleSheet
} from 'react-native';

const DATA = [
    {
        id: 1,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 2,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 3,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 4,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 5,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 6,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 7,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 8,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 9,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 10,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 11,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 12,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 13,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 14,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 15,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 16,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 17,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 18,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 19,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 20,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 21,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 22,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 23,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 24,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 25,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 26,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 27,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    }
];

const alertButton = (button = "정의되지 않은") => (
	Alert.alert (
		`${button}`,
		`${button} 버튼입니다.`,
		[
			{
				text:"CANCEL",
				onPress: () => console.log("취소 버튼을 눌렀습니다."),
				style: "cancel"
			},
			{
				text:"OK", onPress: () => console.log("확인 버튼을 눌렀습니다.")
			}
		]
	)
);

const alertChat = (name = "정의되지 않은") => (
	Alert.alert (
		`${name}`,
		`${name}님과의 채팅방입니다.`,
		[
			{
				text:"CANCEL",
				onPress: () => console.log("취소 버튼을 눌렀습니다."),
				style: "cancel"
			},
			{
				text:"OK", onPress: () => console.log("확인 버튼을 눌렀습니다.")
			}
		]
	)
);

const Item = ({ title, description, date }) => (
	<TouchableOpacity onPress={() => alertChat(title)} style={styles.itemContainer}>
		<Image source={require("./img/chatImg/user.jpeg")} style={styles.user}/>
		<View style={{flex:1, flexDirection:'row'}}>
			<View style={{flex:1, marginHorizontal:10}}>
				<Text style={{color:'black', fontSize:15, fontWeight:'600'}}>{title}</Text>
				<Text style={{fontSize:13}}>{description}</Text>
			</View>
			<Text style={{fontSize:12, marginTop:8}}>{date}</Text>
		</View>
	</TouchableOpacity>
);

const KakaoChat = () => {
	const renderItem = ({item}) => (
		<Item title={item.title} description={item.description} date={item.date} />
	)

	return (
		<SafeAreaView style={{flex:1}}>
			<View style={styles.topContainer}>
				<Text style={{color:'black', fontSize:22, fontWeight:'600'}}>채팅</Text>
				<View style={{flexDirection:'row', alignItems:'center'}}>
					<TouchableOpacity onPress={() => alertButton('검색')}>
						<Image source={require('./img/chatImg/search.png')} style={styles.icon}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => alertButton('오픈 채팅')}>
						<Image source={require('./img/chatImg/newChat.png')} style={styles.icon}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => alertButton('설정')}>
						<Image source={require('./img/chatImg/setting.png')} style={styles.icon}/>
					</TouchableOpacity>
				</View>
			</View>
			<FlatList
				style={{backgroundColor:'white'}}
				ListHeaderComponent={
					<TouchableOpacity onPress={() => Linking.openURL('https://www.naver.com/')} style={styles.adContainer}>
						<Text style={{fontSize:20}}>광고 배너</Text>
					</TouchableOpacity>
				}
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15,
		marginVertical: 10
	},
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		padding: 15
	},
	icon: {
		width: 20,
		height: 20,
		marginLeft: 20
	},
	adContainer: {
		height: 90,
		backgroundColor: '#EFEFEF', 
		alignItems: 'center',
		justifyContent: 'center', 
		borderRadius: 10,
		marginHorizontal: 15
	},
    user: {
		height: 55, 
		width: 55,
		resizeMode: 'contain',
		borderWidth: 0.5,
		borderColor: '#DDDDDD',
		borderRadius: 20
    }
});

export default KakaoChat;