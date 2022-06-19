import 'package:flutter/material.dart';
import 'package:turonpk/screens/login.dart';
import 'package:turonpk/utils/colors.dart';


class SignUp extends StatefulWidget {
  const SignUp({Key? key}) : super(key: key);

  @override
  _SignUpState createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  bool customer = true;
  bool consultant = false;
  String name = "";
  String email = "";
  String phone = "";
  String nic = "";
  String password = "";
  String password1 = "";
  String selectedValue = "Select Type";
  String selectedValue1 = "Select Speciality";
  double latitude = 0.0;
  double longitude = 0.0;
  double price = 0.0;
  String description = "";
  List<String> categories = [
    "Select Speciality",
    "Electronics",
    "Clothes",
    "Shoes",
    "Food",
    "Watches",
    "Mobile",
    "Vehicle"
  ];
  bool progress = false;



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(height: MediaQuery.of(context).size.height * 0.1,),
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
                SizedBox(height: MediaQuery.of(context).size.height * 0.08,),
                Padding(
                  padding: const EdgeInsets.only(left:25.0,right:25.0),
                  child: TextFormField(
                    onChanged: (value){
                      name = value;
                    },
                    cursorColor:primary,
                    style: TextStyle(color:primary),
                    decoration: InputDecoration(
                      hintText: "Enter Name",
                      labelText: 'Name',
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
                  padding: const EdgeInsets.only(top:8.0,left:25.0,right:25.0),
                  child: TextFormField(
                    onChanged: (value){
                      email = value;
                    },
                    cursorColor: primary,
                    style: TextStyle(color:primary),
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
                  padding: const EdgeInsets.only(top:8.0,left:25.0,right:25.0),
                  child: TextFormField(
                    keyboardType: TextInputType.number,
                    onChanged: (value){
                      phone = value;
                    },
                    cursorColor: primary,
                    style: TextStyle(color:primary),
                    decoration: InputDecoration(
                      hintText: "Enter Contact",
                      labelText: 'Contact',
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
                  padding: const EdgeInsets.only(top:8.0,left:25.0,right:25.0),
                  child: TextFormField(
                    onChanged: (value){
                      //nic = value;
                    },
                    cursorColor:primary,
                    style: TextStyle(color:primary),
                    decoration: InputDecoration(
                      hintText: "Enter Date of Birth",
                      labelText: 'Date of Birth',
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
                  padding: const EdgeInsets.only(top:8.0,left:25.0,right:25.0),
                  child: TextFormField(
                    keyboardType: TextInputType.number,
                    onChanged: (value){
                      nic = value;
                    },
                    cursorColor:primary,
                    style: TextStyle(color:primary),
                    decoration: InputDecoration(
                      hintText: "Enter Gardian Nic",
                      labelText: 'Nic',
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
                    style: TextStyle(color: primary),
                    cursorColor:primary,
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: "Enter Password",
                      labelText: 'Password',
                      labelStyle: TextStyle(color: primary),
                      border: OutlineInputBorder(
                        borderSide: BorderSide(color: primary, width: 2.0),
                      ),
                      focusedBorder:OutlineInputBorder(
                        borderSide: BorderSide(color: primary, width: 2.0),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top:8.0,bottom:8.0,left:25.0,right:25.0),
                  child: TextFormField(
                    onChanged: (value){
                      password1 = value;
                    },
                    style: TextStyle(color: primary),
                    cursorColor:primary,
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: "Confirm Password",
                      labelText: 'Confirm Password',
                      labelStyle: TextStyle(color:primary),
                      border: OutlineInputBorder(
                        borderSide: BorderSide(color: primary, width: 2.0),
                      ),
                      focusedBorder:OutlineInputBorder(
                        borderSide: BorderSide(color:primary, width: 2.0),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top:8.0,left:25.0,right:25.0),
                  child: TextFormField(
                    maxLines: 5,
                    onChanged: (value){
                      //nic = value;
                    },
                    cursorColor:primary,
                    style: TextStyle(color:primary),
                    decoration: InputDecoration(
                      hintText: "Enter Address",
                      hintStyle: TextStyle(color:primary),
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
                SizedBox(height: 10,),
                progress == true ? CircularProgressIndicator() :Container(
                  width: MediaQuery.of(context).size.width * 0.6,
                  child: RaisedButton(
                      elevation: 5,
                      color: primary,
                      onPressed: (){

                      },
                      child: Text("Register",style: TextStyle(color:Colors.white,fontSize: 16),)
                  ),
                ),
                const SizedBox(height:20),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("OR",style: TextStyle(color: primary,fontSize:16),)
                  ],
                ),
                const SizedBox(height:20),
                GestureDetector(
                    onTap: (){
                      Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => Login()));
                    },
                    child: Text("Already have an account ? Login",style: TextStyle(color:primary,fontSize:16),)),
                SizedBox(height: 20,),
              ]
          )
      ),
    );
  }
}