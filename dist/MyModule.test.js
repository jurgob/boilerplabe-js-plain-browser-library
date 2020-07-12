const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

const _MyModule = _interopRequireDefault(require("./MyModule"))

test("myMethod() returns true", function () {
  const myModuleInstance = new _MyModule.default()
  expect(myModuleInstance.myMethod()).toBe(true)
})
