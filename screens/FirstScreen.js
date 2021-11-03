import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import styles from '../components/style';
import LoadingPage from './StartScreen';

export default class FirstScreen extends Component{
    state ={
        isLoading : true
    };
    componentDidMount = async() => {
        setTimeout(()=> {this.setState({isLoading: false})}, 3000);
    }

    render() {
        if(this.state.isLoading){
            return <LoadingPage/>
        }else{
            return (
                <View style={styles.container}>
                  <StatusBar style="auto" />
                  <View style={styles.header}>
                    <Text style={styles.headertext}>First Screen</Text>
                  </View>
                  <View style={styles.buttonspace}>
                    <TouchableOpacity style={styles.buttonstyle}>
                      <Text style={styles.buttontext}>back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonstyle} onPress= {() => this.goSecondScreen()} >
                      <Text style={styles.buttontext} >next</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.body}>
                    <ScrollView>
                      <Text style={styles.bodytext}>ScrollView area</Text>
                    </ScrollView>
                  </View>
                </View>
              );
        }
        
    }

    goSecondScreen() {
        this.props.navigation.navigate('SECOND');
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    header: {
      alignItems: 'center',
      paddingHorizontal:20,
      marginTop: 50,
      flex: 1,
    },
    headertext: {
      fontSize: 28,
    },
    buttonspace: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent:"space-around",
      marginBottom: 50,
      },
    buttonstyle :{
      backgroundColor : "gray",
      borderRadius : 20,
      paddingHorizontal : 30
      
    },
    buttontext :{
      fontSize : 25,
    },
    body: {
      paddingTop: 20,
      alignItems: "center",
      flexDirection: "column",
      flex: 8,
  
    },
    bodytext: {
      fontSize : 18,
    }
  });
