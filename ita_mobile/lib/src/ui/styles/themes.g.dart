import 'package:flutter/material.dart';

ColorScheme get colorScheme => _colorScheme;

const _colorScheme = ColorScheme(
  brightness: Brightness.light,
  primary: Color.fromARGB(255, 255, 120, 10),
  onPrimary: Colors.white,
  secondary: Color.fromARGB(255, 255, 184, 23),
  onSecondary: Colors.white,
  tertiary: Color.fromARGB(255, 36, 255, 165),
  onTertiary: Colors.white,
  error: Color.fromARGB(255, 255, 60, 23),
  onError: Colors.white,
  background: Color.fromARGB(255, 33, 41, 61),
  onBackground: Colors.white,
  surface: Color.fromARGB(255, 33, 41, 61),
  onSurface: Colors.white,
);
