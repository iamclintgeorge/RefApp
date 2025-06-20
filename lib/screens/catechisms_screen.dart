import 'package:flutter/material.dart';
import '../widgets/section_widget.dart';
import 'wsc_screen.dart';
import 'wlc_screen.dart';
import 'heidelberg_screen.dart';
import 'cyc_screen.dart';

class CatechismsScreen extends StatelessWidget {
  const CatechismsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SectionScreen(
      sectionTitle: 'Catechisms',
      items: [
        SectionItem(
          title: 'Westminster Shorter Catechism',
          progress: 0.70,
          destination: const WSCScreen(),
        ),
        SectionItem(
          title: 'Westminster Larger Catechism',
          progress: 0.50,
          destination: const WLCScreen(),
        ),
        SectionItem(
          title: 'Heidelberg Catechism',
          progress: 0.0,
          destination: const HeidelbergScreen(),
        ),
        SectionItem(
          title: 'Catechism for Young Children',
          progress: 0.0,
          destination: const CycScreen(),
        ),
      ],
    );
  }
}
