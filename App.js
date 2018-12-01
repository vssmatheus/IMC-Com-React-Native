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

   apagarDadosForm = () =>{
    this.setState({
      altura:0,
      massa:0,
      resultado:0,
      resultadoText: "",
    })
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

            <TextInput value={this.state.altura} autoCapitalize="none"
              placeholder="Altura" returnKeyType="go" maxLength={4} keyboardType="numeric" 
              style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>

            <TextInput value={this.state.massa} autoCapitalize="none" 
              placeholder="Massa" returnKeyType="go" maxLength={3} keyboardType="numeric" 
              style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>

          </View>

          <TouchableOpacity style={styles.button} onPress={this.calcular}>
            <Text style={styles.buttontext}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={this.apagarDadosForm}>
            <Text style={styles.buttontext2}>Limpar</Text>
          </TouchableOpacity>

          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
          <Text style={[styles.resultado,{fontSize:18}]}>{this.state.resultadoText}</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    height: 50,
    textAlign:"center",
    width:"45%",
    fontSize: 25,
    marginTop: 34,
    margin:5,
    marginBottom: 15,
    fontWeight:'bold',
    backgroundColor: '#fff',
    borderRadius: 40
   
  },

  button:{
   backgroundColor:"#01AE66",
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 30,
   width: 330,
   height: 50,
   borderWidth: 2,
   borderColor:'#63FDBC',
   
  },
  button2:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 30,
    width: 330,
    height: 50,
    borderWidth: 2,
    borderColor: '#63FDBC'
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:28,
    fontWeight:'bold',
    color:"#0A2229",
  },
  buttontext2:{
    textAlign: "center",
    padding: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#01AE66"
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
    alignItems:'center'   
  },
  logoText:{
    flex: 2.7,
    alignItems:'center',
    fontSize: 80,
    marginBottom: 5,
    fontFamily:'verdana',
    fontWeight:'bold',
    color: '#A9F5E1'  
  },
  logoText2:{
    flex: 1,
    alignItems:'center',
    fontSize: 12,
    fontFamily:'verdana',
    color: '#A9F5E1'
  }
});
