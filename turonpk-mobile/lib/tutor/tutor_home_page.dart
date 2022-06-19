import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:turonpk/models/studentModel.dart';
import 'package:turonpk/tutor/student_detail.dart';
import 'package:turonpk/utils/colors.dart';

class TutorHomePage extends StatefulWidget {
  const TutorHomePage({Key? key}) : super(key: key);

  @override
  State<TutorHomePage> createState() => _TutorHomePageState();
}

class _TutorHomePageState extends State<TutorHomePage> {
  List<String> imgList = [
    "https://firebasestorage.googleapis.com/v0/b/turonpk-3ff79.appspot.com/o/tutor%20home%201.jpg?alt=media&token=97ae070d-b587-4dd9-b8b4-f4705764b7ab",
    "https://firebasestorage.googleapis.com/v0/b/turonpk-3ff79.appspot.com/o/tutor%20home%202.jpg?alt=media&token=f3497281-0c44-4c68-95c6-3e6ddfc7ac3c",
    "https://firebasestorage.googleapis.com/v0/b/turonpk-3ff79.appspot.com/o/tutor%20home%204.jpg?alt=media&token=3c2088cb-5d54-440a-aae6-700b70f1dd99",
    "https://firebasestorage.googleapis.com/v0/b/turonpk-3ff79.appspot.com/o/tutor%20home%205.jpg?alt=media&token=12ae02a2-fe78-430b-bd02-d31d7e8bd83e"
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.only(left:20.0,right:20.0,top: 20),
            child: CarouselSlider(
              options: CarouselOptions(
                aspectRatio: 20/11,
                viewportFraction: 1,
                initialPage: 0,
                enableInfiniteScroll: true,
                reverse: false,
                autoPlay: true,
                autoPlayInterval: Duration(seconds: 5),
                autoPlayAnimationDuration: Duration(milliseconds: 1000),
                enlargeCenterPage: true,
                scrollDirection: Axis.horizontal,
              ),
              items: imgList
                  .map((item) => Card(
                elevation: 5,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(20))
                ),
                child: Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(20))
                  ),
                  height: 200,
                  width: MediaQuery.of(context).size.width,
                  child: Center(
                      child:
                      ClipRRect(
                          borderRadius: BorderRadius.all(Radius.circular(20)),
                          child: Image.network(item, fit: BoxFit.cover, width: MediaQuery.of(context).size.width))),
                ),
              ))
                  .toList(),
            ),
          ),
          Row(
            children: [
              SizedBox(width: 20,),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text("All Students",style: TextStyle(color: primary),),
              ),
            ],
          ),
          GridView.builder(
            shrinkWrap: true,
            physics: NeverScrollableScrollPhysics(),
            padding: const EdgeInsets.only(left: 20,right: 20),
            itemCount: students.length,
            itemBuilder:(cyx,index){
              return GestureDetector(
                onTap: () {
                  Navigator.push(context, MaterialPageRoute(builder: (context) => StudentDetail()));
                },
                child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),
                  elevation: 5,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          ClipRRect(
                              borderRadius: BorderRadius.all(Radius.circular(20)),
                              child: Image.network(students[index].pic!,height: 30,width:30))
                        ],
                      ),
                      SizedBox(height: 5,),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text(students[index].name!,style: TextStyle(color: primary),)
                        ],
                      ),
                    ],
                  ),
                ),
              );
            },
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                childAspectRatio: 30/25,
                crossAxisCount: 3,
                crossAxisSpacing: 5,
                mainAxisSpacing: 5
            ),
          )
        ],
      ),
    );
  }
}
