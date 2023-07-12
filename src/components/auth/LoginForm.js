import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, ImageBackground, Image} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { userDetail, user } from '../../utils/UserDB';
import Svg from '../../utils/Svg';
import Colors from '../../utils/Colors';
import NotificationComponent from '../NotificationComponent';
import useAuth from '../../hooks/UseAuth';



export default function LoginForm() {
    const [error, setError] = useState("")
    const {login} = useAuth()
    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange:false,
        onSubmit: (formData) => {
            setError("")
            const {username, password} = formData
            if(username !== user.username && password !== user.password){
                setError('Usuario y/o contraseña incorrectos')
            }else{
                login(userDetail);
            }
            
        }
    })

    function initialValues(){
        return{
            username:'',
            password:''
        }
    }

    function validationSchema(){
        return{
            username: Yup.string().required('El username es obligatorio'),
            password: Yup.string().required('El password es obligatorio').min(6,'El password debe tener al menos 6 caracteres')
        }
    }

    

    return (
        <View style={styles.container}>

          {formik.errors.username || formik.errors.password || error ? 
          (<NotificationComponent e={error} eu={formik.errors.username} ep={formik.errors.password}/>) : null}
            <View style={styles.svgBackground}>
            <SvgXml xml={Svg.portal}/>
            </View>
          {/**<StatusBar style='auto' />**/}
          <View style={styles.inputView}>

            <TextInput
              style={styles.TextInput}
              placeholder="Username."
              placeholderTextColor="#003f5c"
              autoCapitalize='none' value={formik.values.username}
              onChangeText={text => formik.setFieldValue('username',text)}
            /> 
          </View> 
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              autoCapitalize='none' value={formik.values.password}
              onChangeText={text => formik.setFieldValue('password',text)}
            /> 
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={formik.handleSubmit}>
            <Text style={styles.loginText}>LOGIN</Text> 
          </TouchableOpacity> 
        </View> 
      );
  }
  
  

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors.negro,
          alignItems: "center",
          justifyContent: "center",
        },
        image: {
          marginBottom: 40,
        },
        inputView: {
          backgroundColor: Colors.naranja4,
          borderRadius: 30,
          width: "70%",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
        },
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 20,
        },
        forgot_button: {
          height: 30,
          marginBottom: 30,
        },
        loginBtn: {
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          backgroundColor: Colors.azul1,
        },
        svgBackground:{
            width: '100%',
            height: '100%',
            position: 'absolute',
             top: 0,
             left: 0,
             right: 16,
             bottom: 0,
        },
        errors:{
            color: Colors.morado1,
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 15,
        },
      });