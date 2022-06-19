import 'package:flutter/material.dart';
import 'package:turonpk/utils/colors.dart';

class StudentProfilePage extends StatefulWidget {
  const StudentProfilePage({Key? key}) : super(key: key);

  @override
  State<StudentProfilePage> createState() => _StudentProfilePageState();
}

class _StudentProfilePageState extends State<StudentProfilePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            SizedBox(height: 20,),
            Container(
              height: 200.0,
              width: 200.0,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10.0),
              ),
              child:CircleAvatar(
                radius: 50,
                child: ClipOval(
                  child: Image.network(
                      "https://www.w3schools.com/howto/img_avatar.png",
                      width: 200,
                      height: 200,
                      fit: BoxFit.cover
                  ),
                ),
              ),
            ),
            SizedBox(height: 30.0,),
            Padding(
              padding: const EdgeInsets.only(left:25.0,right:25.0),
              child: TextFormField(
                onChanged: (value){
                  //name = value;
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
                  //email = value;
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
                  //phone = value;
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
                  //nic = value;
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
            Container(
              width: MediaQuery.of(context).size.width * 0.6,
              child: RaisedButton(
                  elevation: 5,
                  color: primary,
                  onPressed: (){

                  },
                  child: Text("Update Profile",style: TextStyle(color:Colors.white,fontSize: 16),)
              ),
            ),
          ],
        ),
      ),
    );
  }
}
