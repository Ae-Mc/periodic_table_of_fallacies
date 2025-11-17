import 'package:freezed_annotation/freezed_annotation.dart';

part 'fallacy.freezed.dart';

@freezed
abstract class Fallacy with _$Fallacy {
  const factory Fallacy({required String name, required String abbreviation}) =
      _Fallacy;
}
