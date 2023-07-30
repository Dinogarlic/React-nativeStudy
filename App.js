import React from 'react';
import {
	View,
	ImageBackground,
	TouchableWithoutFeedback,
	Image,
	Text,
	Alert,
	StyleSheet
} from 'react-native';

const createAlert = ( button = "정의되지 않은" ) => {
	Alert.alert (
		`${button}`,
		`${button} 버튼입니다.`,
		[
			{
				text:"취소",
				onPress: () => console.log("취소 버튼을 눌렀습니다."),
				style: "cancel"
			},
			{
				text:"확인",
				onPress: () => console.log("확인 버튼을 눌렀습니다.")
			}
		]
	)
}

const KakaoProfile = () => {
	return (
		<View style={{flex:1}}>
			<ImageBackground source={require("./img/profileImg/backgroundImg.jpg")} 
			style={{flex:1, backgroundColor:'black'}} imageStyle={{opacity:0.8}}>
			{/* 상단 버튼 */}
				<View style={styles.topContainer}>
				{/* 왼쪽 상단 닫기 버튼 */}
					<TouchableWithoutFeedback onPress={() => createAlert("닫기")}>
						<Image source={require("./img/profileImg/close.png")} style={styles.icon}/>
					</TouchableWithoutFeedback>

				{/* 오른쪽 상단 버튼 3개 */}
					<View style={{flexDirection:'row'}}>
						<TouchableWithoutFeedback onPress={() => createAlert("선물하기")}>
							<Image source={require("./img/profileImg/gift.png")} style={styles.icon}/>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={() => createAlert("송금코드")}>
							<Image source={require("./img/profileImg/QR.png")} style={styles.icon}/>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={() => createAlert("프로필 관리")}>
							<Image source={require("./img/profileImg/setting.png")} style={styles.icon}/>
						</TouchableWithoutFeedback>
					</View>
				</View>

			{/* 프로필 사진 & 이름 */}
				<View style={styles.profileContainer}>
					<TouchableWithoutFeedback onPress={() => createAlert("프로필 사진")}>
						<Image source={require("./img/profileImg/profileImg.jpg")} style={styles.profileImage}/>
					</TouchableWithoutFeedback>
					<Text style={styles.name}>김동희</Text>
				</View>

			{/* 하단 버튼 3개 */}
				<View style={styles.bottomContainer}>
					<TouchableWithoutFeedback onPress={() => createAlert("나와의 채팅")}>
						<View style={{alignItems:'center'}}>
							<Image source={require("./img/profileImg/chat.png")} style={styles.icon}/>
							<Text style={{color:'white'}}>나와의 채팅</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => createAlert("프로필 편집")}>
						<View style={{alignItems:'center'}}>
							<Image source={require("./img/profileImg/edit.png")} style={styles.icon}/>
							<Text style={{color:'white'}}>프로필 편집</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => createAlert("카카오스토리")}>
						<View style={{alignItems:'center'}}>
							<Image source={require("./img/profileImg/story.png")} style={styles.icon}/>
							<Text style={{color:'white'}}>카카오스토리</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</ImageBackground>
		</View>
	)
};

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		padding: 12
	},
	profileContainer: {
		flex: 10,
		alignItems: 'center', 
		justifyContent: 'flex-end',
		paddingBottom: 40,
		borderBottomWidth: 0.5,
		borderBottomColor: 'white'
	},
	bottomContainer: {
		flex: 2,
		flexDirection: 'row', 
		justifyContent: 'space-evenly',
		paddingTop:20,
	},
	icon: {
		height: 20,
		width: 20,
		margin: 10
	},
	profileImage: {
		height: 100,
		width: 100,
		borderRadius: 40
	},
	name: {
		color: 'white',
		fontSize: 20,
		fontWeight: '600',
		marginTop: 10
	}
});

export default KakaoProfile;