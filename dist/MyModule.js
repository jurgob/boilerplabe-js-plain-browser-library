const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.default = void 0

const _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
)

const _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
)

const MyModule = /* #__PURE__ */ (function () {
  function MyModule() {
    ;(0, _classCallCheck2.default)(this, MyModule)
    this.myProperty = false
  }

  ;(0, _createClass2.default)(MyModule, [
    {
      key: "myMethod",
      value: function myMethod() {
        this.myProperty = true
        return this.myProperty
      },
    },
  ])
  return MyModule
})()

const _default = MyModule
exports.default = _default
