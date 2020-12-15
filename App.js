import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,ImageBackground,Image } from 'react-native';
import gradient from './assets/gradientv2.png';
import {BiLockOpenAlt,BiMobileAlt} from "react-icons/bi";
import logo from './assets/logo_skaphandrus.png';

export default function App() {
  return (

    <View style={styles.container}>
      <ImageBackground source={gradient} style={styles.image}>
        <Text style={styles.title}>
          Skaphandrus
        </Text>       

          <Image 
          style={styles.logo}
          source={logo}
          />

        <View style={styles.logContainer}>
          <View style={styles.iconContainer}>        
            <BiMobileAlt style={styles.icon}/>  
          </View>
        <TextInput  placeholder="username"  style ={styles.input}/>
        </View>  

        <View style={styles.logContainer}>
          <View style={styles.iconContainer}>        
            <BiLockOpenAlt style={styles.icon}/>  
          </View>
        <TextInput placeholder="password"  style ={styles.input}/>
        </View>            
        
          <View style={styles.btnContainer}>        
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>LogIn</Text>
            </TouchableOpacity>
            <Text>Don't have an account? SingIn</Text>
            <Text>Forgot your password?</Text>
            
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    //backgroundColor:'#1af394',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,  
    width:'100%',
    justifyContent: "center",
    alignItems: 'center',
  },
  title :{
    padding :20,   
    fontSize:50,
    color:'#fff' ,
    position:'absolute',
    top:10,
    fontFamily:'New Times Roman',
    //fontWeight:'bold',
  },
  logo:{
    //backgroundColor:'black',
    width:200,
    height:200,
    alignItems: 'top',
    justifyContent: 'top',   
  },
  logContainer:{
    width:'80%',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center',  
    margin:10, 
    minHeight:50
  },
  iconContainer:{
    color:'white',
  },
  icon:{
   
  },
  input:{
    borderBottomColor: 'white',
    borderBottomWidth: 2, 
    width:'100%',
    padding:10,
    placeholderTextColor:"#fff", 
    textShadowColor:'#fff',
  },
  btnContainer:{
    width:'80%',
    alignItems:'center',
  },
  btn:{
    backgroundColor: '', /* Green */
    borderColor: 'white',
    borderRadius:10,
    paddingVertical:5,
    paddingHorizontal:5,
    borderWidth: 3,
    width:'80%',
    minHeight:30,
    marginTop:30,
    },
  btnText:{
    color:'white',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  
  }
});
