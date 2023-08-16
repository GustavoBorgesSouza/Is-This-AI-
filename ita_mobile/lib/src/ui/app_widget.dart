import 'package:flutter/material.dart';
import 'package:ita_mobile/src/ui/styles/themes.dart';

import 'pages/home_page.dart';

class AppWidget extends StatelessWidget {
  const AppWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: theme,
      title: "Is This AI?",
      routes: {
        '/': (context) => const HomePage(),
      },
    );
  }
}
