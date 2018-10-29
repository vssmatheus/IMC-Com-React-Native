/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
 Image,
 ImageBackground
} from 'react-native';

//import logo from './images/logo.png'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura)
   let s = this.state
   s.resultado = imc
   if(s.resultado < 16){
     s.resultadoText ='Muito abaixo do peso'
   }
    else if (s.resultado < 17){
     s.resultadoText ='Moderadamente abaixo do peso'
    }
    else if (s.resultado < 18.5){
     s.resultadoText ='Abaixo do peso'
    }
    else if (s.resultado < 25) {
     s.resultadoText ='Saudável'
    }
    else if (s.resultado < 30) {
     s.resultadoText ='Sobrepeso'
    }
    else if (s.resultado < 35) {
     s.resultadoText ='Obesidade Grau 1°'
    }
    else if (s.resultado < 40) {
      s.resultadoText ='Obesidade Grau 2°'
    }
    else{
      s.resultadoText ='Obesidade Grau 3°'
    }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>      
        <View style={styles.calculoContent}>

          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>IMC</Text>
            <Text style={styles.logoText2}>Índice de massa corpórea</Text>
          </View>

          <View style={styles.entrada}>
            <TextInput autoCapitalize="none" placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
            <TextInput autoCapitalize="none" placeholder="Massa"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.calcular}>
            <Text style={styles.buttontext}>Calcular</Text>
          </TouchableOpacity>
          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
          <Text style={[styles.resultado,{fontSize:30}]}>{this.state.resultadoText}</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A2229',
    

  },
  calculoContent:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    marginTop: 20

  },

  entrada:{
    flexDirection:'row',
    
  },
  input:{
    height: 68,
    textAlign:"center",
    width:"45%",
    fontSize: 35,
    marginTop:34,
    margin:5,
    marginBottom: 15,
    fontWeight:'bold',
    backgroundColor: '#E6E6E6',
    borderRadius: 40
   
  },

  button:{
   backgroundColor:"#01AE66",
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 30,
   width: 330,
   height: 60,
   borderWidth: 2,
   borderColor:'#63FDBC',
   
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:35,
    fontWeight:'bold',
    color:"#0A2229",
  },
  resultado:{
    alignSelf:"center",
    color:"#A9F5E1",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
  logoContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    fontSize: 20,
    color: '#A9F5E1'   
  },
  logoText:{
    flex: 1.5,
    alignItems:'center',
    fontSize: 100,
    marginBottom: 5,
    fontFamily:'verdana',
    fontWeight:'bold',
    color: '#A9F5E1'  
  },
  logoText2:{
    flex: 1,
    alignItems:'center',
    fontSize: 15,
    fontFamily:'verdana',
    color: '#A9F5E1'
  }
});
