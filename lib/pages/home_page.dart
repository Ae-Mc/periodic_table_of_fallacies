import 'dart:math';

import 'package:assorted_layout_widgets/assorted_layout_widgets.dart';
import 'package:flutter/material.dart';
import 'package:periodic_table_of_fallacies/domain/models/fallacy.dart';
import 'package:periodic_table_of_fallacies/pages/fallacy_dialog_page.dart';
import 'package:periodic_table_of_fallacies/widgets/tappable_image.dart';

class HomePage extends StatefulWidget {
  static const fallacies = <Fallacy?>[
    Fallacy(name: "Ad Hominem", abbreviation: "Ah"),
    Fallacy(name: "Ad Verecundiam", abbreviation: "Av"),
    Fallacy(name: "Ad Populum", abbreviation: "Ap"),
    Fallacy(name: "Post Hoc", abbreviation: "Ph"),
    Fallacy(name: "Anecdotal Evidence", abbreviation: "An"),
    Fallacy(name: "No True Scotsman", abbreviation: "Sc"),
    Fallacy(name: "False Dilemma", abbreviation: "Fd"),
    Fallacy(name: "Red Herring", abbreviation: "Rh"),
    Fallacy(name: "Straw Man", abbreviation: "Sm"),
    Fallacy(name: "False Analogy", abbreviation: "Fa"),
    Fallacy(name: "Slippery Slope", abbreviation: "SI"),
    Fallacy(name: "Affirming the Consequent", abbreviation: "Ac"),
    Fallacy(name: "Denying the Antecedent", abbreviation: "Da"),
    Fallacy(name: "Begging the Question", abbreviation: "Be"),
    Fallacy(name: "Argumentum Ad Antiquitatem", abbreviation: "Aa"),
    null,
    Fallacy(name: "Ad Ignorantiam", abbreviation: "Ig"),
    Fallacy(name: "Association Fallacy", abbreviation: "As"),
    Fallacy(name: "Appeal to possibility", abbreviation: "Po"),
    Fallacy(name: "Ad Lapidem", abbreviation: "La"),
    Fallacy(name: "Middle Ground Fallacy", abbreviation: "Mg"),
    Fallacy(name: "Naturalistic Fallacy", abbreviation: "Na"),
    Fallacy(name: "Two Wrongs Make a Right", abbreviation: "Wr"),
    Fallacy(name: "Texas Sharpshooter", abbreviation: "Te"),
    Fallacy(name: "Secundum Quid", abbreviation: "Sq"),
    Fallacy(name: "Transitive Fallacy", abbreviation: "Tr"),
    Fallacy(name: "Nirvana Fallacy", abbreviation: "Ni"),
    Fallacy(name: "Counterfactual Fallacy", abbreviation: "Co"),
  ];

  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Fallacy? selectedFallacy;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Таблица логических уловок')),
      body: Padding(
        padding: const Pad(all: 16),
        child: LayoutBuilder(
          builder: (context, constraints) {
            final cardWidth = (constraints.maxWidth) / 7;
            final cardHeight = (constraints.maxHeight) / 4;
            final size = min(cardWidth, cardHeight);

            return Center(
              child: SizedBox(
                width: min(size * 7, constraints.maxWidth),
                child: Wrap(
                  children: [
                    for (final fallacy in HomePage.fallacies)
                      SizedBox.square(
                        dimension: size,
                        child: fallacy == null
                            ? null
                            : AnimatedPadding(
                                curve: Curves.easeInOut,
                                duration: Duration(milliseconds: 100),
                                padding: Pad(
                                  all: selectedFallacy == fallacy ? 2 : 8,
                                ),
                                child: TappableImage(
                                  assetPath: 'assets/${fallacy.name}/1.jpg',
                                  onTap: () {
                                    showAdaptiveDialog(
                                      context: context,
                                      builder: (context) =>
                                          FallacyDialogPage(fallacy: fallacy),
                                    );
                                  },
                                  onHover: (value) => setState(() {
                                    selectedFallacy = value ? fallacy : null;
                                  }),
                                ),
                              ),
                      ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
