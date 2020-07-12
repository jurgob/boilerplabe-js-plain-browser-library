const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

const _index = _interopRequireDefault(require("./index"))

const _MyModule = _interopRequireDefault(require("./MyModule"))

test("Main Module initialization works correctly", function () {
  const myModuleInstance = new _index.default()
  expect(myModuleInstance).toBeInstanceOf(_MyModule.default)
})
