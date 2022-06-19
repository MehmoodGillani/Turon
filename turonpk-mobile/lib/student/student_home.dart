import 'package:flutter/material.dart';
import 'package:turonpk/student/student_home_page.dart';
import 'package:turonpk/student/student_profile_page.dart';
import 'package:turonpk/student/student_requests_page.dart';
import 'package:turonpk/student/student_tutor_page.dart';
import 'package:turonpk/utils/colors.dart';

class StudentHome extends StatefulWidget {
  const StudentHome({Key? key}) : super(key: key);

  @override
  State<StudentHome> createState() => _StudentHomeState();
}

class _StudentHomeState extends State<StudentHome> {
  late List<Map<String,Object>> _pages = [];
  int _selectedPageIndex = 0;

  void _selectPage(int index){
    setState(() {
      _selectedPageIndex = index;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _pages = [
      {'page': StudentHomePage(), 'title': 'Home'},
      {'page': StudentRequestPage(), 'title': 'Requests'},
      {'page': StudentTutorPage(), 'title': 'Tutors'},
      {'page': StudentProfilePage(), 'title': 'Profile'}
    ];
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: primary,
        centerTitle:true,
        title: Text(_pages[_selectedPageIndex]['title'] as String),
        actions: [
          IconButton(
            onPressed: (){},
            icon:Icon(Icons.exit_to_app)
          )
        ],
      ),
      drawer: Drawer(
        child: Column(
          children: [
            new UserAccountsDrawerHeader(
              accountName: Text("Username",style: TextStyle(color: ascent),),
              accountEmail: Text("User Email",style: TextStyle(color: ascent),),
              currentAccountPicture: GestureDetector(
                onTap: (){
                  //Navigator.push(context, MaterialPageRoute(builder: (context) => new Profile()));
                },
                child: new CircleAvatar(
                  radius: 50,
                  child: ClipOval(
                    child: Image.network(
                        "https://www.w3schools.com/howto/img_avatar.png",
                        width: 100,
                        height: 100,
                        fit: BoxFit.cover
                    ),
                  ),
                ),
              ),
            ),
            SizedBox(height: 20,),
            ListTile(
              onTap: (){
                setState(() {
                  _selectedPageIndex = 0;
                });
                Navigator.of(context).pop();
              },
              leading: Icon(Icons.home,
                size: 26,),
              title: Text("Home",style: TextStyle(fontSize: 18),),
            ),
            ListTile(
              onTap: (){
                setState(() {
                  _selectedPageIndex = 1;
                });
                Navigator.of(context).pop();
              },
              leading: Icon(Icons.request_page,
                size: 26,),
              title: Text("Requests",style: TextStyle(fontSize: 18),),
            ),
            ListTile(
              onTap: (){
                //Navigator.of(context).pushNamed(FilterScreen.routeName);
                setState(() {
                  _selectedPageIndex = 2;
                });
                Navigator.of(context).pop();
              },
              leading: Icon(Icons.accessibility_rounded,
                size: 26,),
              title: Text("Tutors",style: TextStyle(fontSize: 18),),
            ),
            ListTile(
              onTap: (){
                //Navigator.of(context).pushNamed(FilterScreen.routeName);
                setState(() {
                  _selectedPageIndex = 3;
                });
                Navigator.of(context).pop();
              },
              leading: Icon(Icons.person,
                size: 26,),
              title: Text("Profile",style: TextStyle(fontSize: 18),),
            ),
            ListTile(
              onTap: (){
                Navigator.of(context).pop();
              },
              leading: Icon(Icons.exit_to_app,
                size: 26,),
              title: Text("Logout",style: TextStyle(fontSize: 18),),
            )
          ],
        ),
      ),
      body: _pages[_selectedPageIndex]['page'] as Widget,
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        unselectedItemColor: Colors.white,
        selectedItemColor: ascent,
        backgroundColor: primary,
        currentIndex: _selectedPageIndex,
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text('Home'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.request_page),
            title: Text('Requests'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.accessibility_rounded),
            title: Text('Tutor'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            title: Text('Profile'),
          )
        ],
      ),
    );
  }
}
