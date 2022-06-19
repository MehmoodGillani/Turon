import 'package:flutter/material.dart';
import 'package:turonpk/screens/login.dart';
import 'package:turonpk/utils/colors.dart';

class SelectScreen extends StatefulWidget {
  const SelectScreen({Key? key}) : super(key: key);

  @override
  State<SelectScreen> createState() => _SelectScreenState();
}

class _SelectScreenState extends State<SelectScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text("Please select your Role",style: TextStyle(color: primary,fontSize: 18),),
              )
            ],
          ),
          SizedBox(height: 20,),
          RaisedButton(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.all(Radius.circular(10))
            ),
            color: primary,
            child: Text("Student",style:TextStyle(color:ascent)),
            onPressed:(){
              Navigator.push(context, MaterialPageRoute(builder: (context) => Login(
                type: "student",
              )));
            }
          ),
          RaisedButton(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              color: primary,
              child: Text("Tutor",style:TextStyle(color:ascent)),
              onPressed:(){
                Navigator.push(context, MaterialPageRoute(builder: (context) => Login(
                  type: "tutor",
                )));
              }
          )
        ],
      )
    );
  }
}
