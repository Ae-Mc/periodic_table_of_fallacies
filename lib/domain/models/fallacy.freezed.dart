// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'fallacy.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;
/// @nodoc
mixin _$Fallacy {

 String get name; String get abbreviation;
/// Create a copy of Fallacy
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$FallacyCopyWith<Fallacy> get copyWith => _$FallacyCopyWithImpl<Fallacy>(this as Fallacy, _$identity);



@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is Fallacy&&(identical(other.name, name) || other.name == name)&&(identical(other.abbreviation, abbreviation) || other.abbreviation == abbreviation));
}


@override
int get hashCode => Object.hash(runtimeType,name,abbreviation);

@override
String toString() {
  return 'Fallacy(name: $name, abbreviation: $abbreviation)';
}


}

/// @nodoc
abstract mixin class $FallacyCopyWith<$Res>  {
  factory $FallacyCopyWith(Fallacy value, $Res Function(Fallacy) _then) = _$FallacyCopyWithImpl;
@useResult
$Res call({
 String name, String abbreviation
});




}
/// @nodoc
class _$FallacyCopyWithImpl<$Res>
    implements $FallacyCopyWith<$Res> {
  _$FallacyCopyWithImpl(this._self, this._then);

  final Fallacy _self;
  final $Res Function(Fallacy) _then;

/// Create a copy of Fallacy
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? name = null,Object? abbreviation = null,}) {
  return _then(_self.copyWith(
name: null == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String,abbreviation: null == abbreviation ? _self.abbreviation : abbreviation // ignore: cast_nullable_to_non_nullable
as String,
  ));
}

}


/// Adds pattern-matching-related methods to [Fallacy].
extension FallacyPatterns on Fallacy {
/// A variant of `map` that fallback to returning `orElse`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _Fallacy value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _Fallacy() when $default != null:
return $default(_that);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// Callbacks receives the raw object, upcasted.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case final Subclass2 value:
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _Fallacy value)  $default,){
final _that = this;
switch (_that) {
case _Fallacy():
return $default(_that);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `map` that fallback to returning `null`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _Fallacy value)?  $default,){
final _that = this;
switch (_that) {
case _Fallacy() when $default != null:
return $default(_that);case _:
  return null;

}
}
/// A variant of `when` that fallback to an `orElse` callback.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( String name,  String abbreviation)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _Fallacy() when $default != null:
return $default(_that.name,_that.abbreviation);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// As opposed to `map`, this offers destructuring.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case Subclass2(:final field2):
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( String name,  String abbreviation)  $default,) {final _that = this;
switch (_that) {
case _Fallacy():
return $default(_that.name,_that.abbreviation);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `when` that fallback to returning `null`
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( String name,  String abbreviation)?  $default,) {final _that = this;
switch (_that) {
case _Fallacy() when $default != null:
return $default(_that.name,_that.abbreviation);case _:
  return null;

}
}

}

/// @nodoc


class _Fallacy implements Fallacy {
  const _Fallacy({required this.name, required this.abbreviation});
  

@override final  String name;
@override final  String abbreviation;

/// Create a copy of Fallacy
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$FallacyCopyWith<_Fallacy> get copyWith => __$FallacyCopyWithImpl<_Fallacy>(this, _$identity);



@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _Fallacy&&(identical(other.name, name) || other.name == name)&&(identical(other.abbreviation, abbreviation) || other.abbreviation == abbreviation));
}


@override
int get hashCode => Object.hash(runtimeType,name,abbreviation);

@override
String toString() {
  return 'Fallacy(name: $name, abbreviation: $abbreviation)';
}


}

/// @nodoc
abstract mixin class _$FallacyCopyWith<$Res> implements $FallacyCopyWith<$Res> {
  factory _$FallacyCopyWith(_Fallacy value, $Res Function(_Fallacy) _then) = __$FallacyCopyWithImpl;
@override @useResult
$Res call({
 String name, String abbreviation
});




}
/// @nodoc
class __$FallacyCopyWithImpl<$Res>
    implements _$FallacyCopyWith<$Res> {
  __$FallacyCopyWithImpl(this._self, this._then);

  final _Fallacy _self;
  final $Res Function(_Fallacy) _then;

/// Create a copy of Fallacy
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? name = null,Object? abbreviation = null,}) {
  return _then(_Fallacy(
name: null == name ? _self.name : name // ignore: cast_nullable_to_non_nullable
as String,abbreviation: null == abbreviation ? _self.abbreviation : abbreviation // ignore: cast_nullable_to_non_nullable
as String,
  ));
}


}

// dart format on
