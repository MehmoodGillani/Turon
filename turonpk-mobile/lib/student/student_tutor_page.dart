import 'package:flutter/material.dart';
import 'package:turonpk/models/requestModel.dart';
import 'package:turonpk/utils/colors.dart';

class StudentTutorPage extends StatefulWidget {
  const StudentTutorPage({Key? key}) : super(key: key);

  @override
  State<StudentTutorPage> createState() => _StudentTutorPageState();
}

class _StudentTutorPageState extends State<StudentTutorPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: GridView.builder(
          shrinkWrap: true,
          itemCount: requests.length,
          itemBuilder:(cyx,index){
            return GestureDetector(
              onTap: () {
                //Navigator.push(context, MaterialPageRoute(builder: (context) => RecommendationPage(category: categories[index].title,)));
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
                            borderRadius: BorderRadius.all(Radius.circular(30)),
                            child: Image.network(requests[index].pic!,height: 50,width:50))
                      ],
                    ),
                    SizedBox(height: 5,),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Text(requests[index].name!,style: TextStyle(color: primary),)
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
        ),
      ),
    );
  }
}
