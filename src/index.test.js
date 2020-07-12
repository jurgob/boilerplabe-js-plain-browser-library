import MyModule from "./index"
import MyModuleInstance from "./MyModule"

test("Main Module initialization works correctly", () => {
  const myModuleInstance = new MyModule()
  expect(myModuleInstance).toBeInstanceOf(MyModuleInstance)
})
