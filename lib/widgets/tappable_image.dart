import 'package:assorted_layout_widgets/assorted_layout_widgets.dart';
import 'package:flutter/material.dart';

class TappableImage extends StatelessWidget {
  final String assetPath;
  final void Function() onTap;
  final void Function(bool value)? onHover;

  const TappableImage({
    super.key,
    required this.assetPath,
    required this.onTap,
    this.onHover,
  });

  @override
  Widget build(BuildContext context) {
    return Ink(
      decoration: BoxDecoration(
        image: DecorationImage(image: AssetImage(assetPath), fit: BoxFit.cover),
        borderRadius: BorderRadius.circular(8),
        border: BoxBorder.all(width: 0, style: BorderStyle.none),
      ),
      padding: Pad.zero,
      child: InkWell(
        customBorder: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
          side: BorderSide(width: 0, style: BorderStyle.none),
        ),
        onHover: (value) => onHover?.call(value),
        onTap: onTap,
      ),
    );
  }
}
