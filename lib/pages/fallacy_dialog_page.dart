import 'dart:convert';
import 'dart:math';

import 'package:assorted_layout_widgets/assorted_layout_widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:periodic_table_of_fallacies/domain/models/fallacy.dart';
import 'package:periodic_table_of_fallacies/widgets/tappable_image.dart';

class FallacyDialogPage extends StatelessWidget {
  final Fallacy fallacy;

  const FallacyDialogPage({super.key, required this.fallacy});

  @override
  Widget build(BuildContext context) {
    final images = listAssets('assets/${fallacy.name}/');

    return Shortcuts(
      shortcuts: {
        LogicalKeySet(LogicalKeyboardKey.escape): const ActivateIntent(),
        LogicalKeySet(LogicalKeyboardKey.arrowRight): const ActivateIntent(),
        LogicalKeySet(LogicalKeyboardKey.arrowLeft): const ActivateIntent(),
      },
      child: FutureBuilder(
        future: images,
        builder: (context, asyncSnapshot) {
          if (asyncSnapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (asyncSnapshot.hasError) {
            return Center(child: Text('Error: ${asyncSnapshot.error}'));
          } else {
            final imagePaths = asyncSnapshot.data!;

            return _InnerFallacyDialogPage(imagePaths: imagePaths);
          }
        },
      ),
    );
  }
}

Future<List<String>> listAssets(String folder) async {
  final manifestContent = await rootBundle.loadString('AssetManifest.json');

  final Map<String, dynamic> manifestMap = json.decode(manifestContent);

  return manifestMap.keys
      .where((String key) => key.startsWith(folder))
      .toList();
}

class _InnerFallacyDialogPage extends StatefulWidget {
  final List<String> imagePaths;

  const _InnerFallacyDialogPage({required this.imagePaths});

  @override
  State<_InnerFallacyDialogPage> createState() =>
      _InnerFallacyDialogPageState();
}

class _InnerFallacyDialogPageState extends State<_InnerFallacyDialogPage> {
  int selectedImageIndex = 0;
  final FocusNode focusNode = FocusNode();

  @override
  Widget build(BuildContext context) {
    return KeyboardListener(
      autofocus: true,
      focusNode: focusNode,
      onKeyEvent: (event) {
        if (event is KeyDownEvent) {
          if (event.logicalKey == LogicalKeyboardKey.arrowRight) {
            setState(() {
              selectedImageIndex =
                  (selectedImageIndex + 1) % widget.imagePaths.length;
            });
          } else if (event.logicalKey == LogicalKeyboardKey.arrowLeft) {
            setState(() {
              selectedImageIndex =
                  (selectedImageIndex - 1 + widget.imagePaths.length) %
                  widget.imagePaths.length;
            });
          }
        }
      },
      child: Padding(
        padding: const Pad(vertical: 32, horizontal: 16),
        child: LayoutBuilder(
          builder: (context, constraints) {
            final size = min(
              constraints.maxHeight * 0.65,
              constraints.maxWidth,
            );

            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox.square(
                  dimension: size,
                  child: Image.asset(widget.imagePaths[selectedImageIndex]),
                ),
                Box.gap(16),
                Expanded(
                  child: LayoutBuilder(
                    builder: (context, constraints) {
                      final size = min(
                        constraints.maxWidth / widget.imagePaths.length,
                        constraints.maxHeight - 32,
                      );

                      return Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: widget.imagePaths.indexed.map((e) {
                          return Container(
                            width: size,
                            height: size,
                            decoration: BoxDecoration(
                              border: Border.all(
                                color: selectedImageIndex == e.$1
                                    ? Colors.blue
                                    : Colors.transparent,
                                width: 4,
                              ),
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Card(
                              elevation: 0,
                              margin: Pad.zero,
                              child: TappableImage(
                                assetPath: e.$2,
                                onTap: () => setState(() {
                                  selectedImageIndex = e.$1;
                                }),
                              ),
                            ),
                          );
                        }).toList(),
                      );
                    },
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
