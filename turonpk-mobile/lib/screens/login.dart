import 'package:flutter/material.dart';
import 'package:turonpk/screens/signup.dart';
import 'package:turonpk/student/student_home.dart';
import 'package:turonpk/tutor/tutor_home.dart';
import 'package:turonpk/utils/colors.dart';

class Login extends StatefulWidget {
  final String? type;
  const Login({Key? key, this.type}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  String email = "", password = "";
  String selected = "";
  bool progress = false;
  double latitude = 0.0;
  double longitude = 0.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(height: MediaQuery.of(context).size.height * 0.2,),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Turonpk.com®",style: TextStyle(
                      color: primary,
                      fontSize: 30
                  ),),
                ],
              ),
              SizedBox(height: 10.0,),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Best Tutors provider", style: TextStyle(
                    color: primary,
                  ),),
                ],
              ),
              SizedBox(height: MediaQuery.of(context).size.height * 0.1,),
              Padding(
                padding: const EdgeInsets.only(left:25.0,right:25.0),
                child: TextFormField(
                  onChanged: (value){
                    email = value;
                  },
                  cursorColor: primary,
                  style: TextStyle(color: primary),
                  decoration: InputDecoration(
                    hintText: "Enter Email",
                    labelText: 'Email',
                    labelStyle: TextStyle(color:primary),
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color:primary, width: 2.0),
                    ),
                    focusedBorder:OutlineInputBorder(
                      borderSide: BorderSide(color:primary, width: 2.0),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top:8.0,bottom:8.0,left:25.0,right:25.0),
                child: TextFormField(
                  onChanged: (value){
                    password = value;
                  },
                  style: TextStyle(color:primary),
                  cursorColor: primary,
                  obscureText: true,
                  decoration: InputDecoration(
                    hintText: "Enter Password",
                    labelText: 'Password',
                    labelStyle: TextStyle(color:primary),
                    border: OutlineInputBorder(
                      borderSide: BorderSide(color:primary, width: 2.0),
                    ),
                    focusedBorder:OutlineInputBorder(
                      borderSide: BorderSide(color:primary, width: 2.0),
                    ),
                  ),
                ),
              ),
              SizedBox(height: 30,),
              progress == true ? CircularProgressIndicator() :Container(
                width: MediaQuery.of(context).size.width * 0.6,
                child: RaisedButton(
                    elevation: 5,
                    color: primary,
                    onPressed: (){
                       if(widget.type == "student"){
                         Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => StudentHome()));
                       }
                       else if(widget.type == "tutor"){
                         Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => TutorHome()));
                       }
                    },
                    child: Text("Login",style: TextStyle(color:Colors.white,fontSize: 16),)
                ),
              ),
              const SizedBox(height:20),
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("OR",style: TextStyle(color:primary,fontSize:16),)
                ],
              ),
              const SizedBox(height:20),
              GestureDetector(
                  onTap: (){
                    Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => SignUp()));
                  },
                  child: Text("Don't have an account ? Register",style: TextStyle(color: primary,fontSize:16),)),
              SizedBox(height: 20,),
            ]
        ),
      ),
    );
  }
}