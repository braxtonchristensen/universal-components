var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Button=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _jsxFileName="/Users/braxtonchristensen/Development/learning/universal-components/src/Button/Button.native.tsx";var Button=function Button(_ref){var onPress=_ref.onPress,children=_ref.children;return _react.default.createElement(_reactNative.TouchableHighlight,{onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:6}},children);};exports.Button=Button;Button.defaultProps={children:null,onPress:function onPress(){}};Button.propTypes={children:_propTypes.default.node,onPress:_propTypes.default.func};var _default=Button;exports.default=_default;