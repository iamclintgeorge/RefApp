import 'package:flutter/material.dart';
import 'content.dart';

class CreedScreen extends StatelessWidget {
  final String itemName;

  const CreedScreen({super.key, required this.itemName});

  @override
  Widget build(BuildContext context) {
    final content = creedContent[itemName]!; // Assert non-null
    return Scaffold(
      appBar: AppBar(
        title: Text(
          (content["Metadata"] as Map<String, dynamic>?)?["Title"] ?? "Creed",
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Text(
          (content["Data"] as Map<String, dynamic>?)?["Content"] ??
              "Content not found",
          style: const TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
