import React, {Component} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

export default class SecondScreen extends Component {
    render(){
        return(
            <View>
                <Text>SencondScreen!</Text>
                <TouchableOpacity onPress = {() => this.goFirstScreen()}>
                    <Text>BACK!</Text>
                </TouchableOpacity>
            </View>
        )
    }
    goFirstScreen() {
        this.props.navigation.navigate('FIRST');
    }
}