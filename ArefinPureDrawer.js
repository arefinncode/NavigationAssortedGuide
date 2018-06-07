import React from "react";
import {createBottomTabNavigator,DrawerNavigator,createDrawerNavigator,createStackNavigator,DrawerItems, SafeAreaView} from "react-navigation";
import {StyleSheet,Button,Image,Dimensions,ScrollView} from "react-native";
import {
    Text,Icon,
    Left,
    Body,
    Right,
    Title,
    Card,
    CardItem,
    Thumbnail,
    Content,
    Container,
} from 'native-base';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => <Icon style={[styles.icon]} name="menu" />,


        // style={[styles.icon, {tintColor: tintColor}]}

        // drawerIcon: ({ tintColor }) => (
        //
        //     <Image
        //         source={require('./icon-push-notifications.png')}
        //         style={[styles.icon, {tintColor: tintColor}]}
        //     />
        // ),
    };

    render() {
        console.log("at MyHomeScreen");
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}



class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            ({ tintColor }) => <Icon style={[styles.icon]} name="menu" />
            /*<Image
                source={require('./notif.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />*/
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const RootStack= createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
        contentComponent:CustomDrawerContentComponent,

    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});


export default class ArefinPureDrawer extends React.Component {

    componentWillmount(){

    }
    componentDidMount() {
        console.log("111");
        console.disableYellowBox = true;
    }

    componentWillUnmount() {
        console.log("2");

        // console.disableYellowBox = true;
    }


    render() {
        return <RootStack/>;
    }


}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 14,
        height: 14,
    }
});


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     icon:{
//         width: 140,
//         height:140,
//     },
// });
