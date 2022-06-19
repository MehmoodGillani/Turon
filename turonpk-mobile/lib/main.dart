import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:turonpk/splash_screen.dart';
import 'package:turonpk/utils/colors.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
      .then((_) {
    runApp(MyApp());
  });
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Turonpk',
      theme: ThemeData(
        primaryColor: primary,
      ),
      home: SplashScreen(),
    );
  }
}

