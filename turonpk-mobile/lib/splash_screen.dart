import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:turonpk/screens/select.dart';
import 'package:turonpk/utils/colors.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  void initState() {
    // TODO: implement initState
    super.initState();
    Timer(
      const Duration(seconds: 5),
          (){
           Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => SelectScreen()));
          },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:  Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          SizedBox(height: 80.0,),
          Text("Turonpk.com®",style: TextStyle(
              color: primary,
              fontSize: 30
          ),),
          SizedBox(height: 10.0,),
          Text("Best Tutors provider", style: TextStyle(
            color: primary,
          ),),
          SizedBox(height: 50.0,),
          SpinKitRipple(color: primary,),
        ],
      ),
    );
  }
}