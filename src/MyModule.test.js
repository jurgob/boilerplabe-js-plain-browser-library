import MyModule from "./MyModule"

test("myMethod() returns true", () => {
  const myModuleInstance = new MyModule()
  expect(myModuleInstance.myMethod()).toBe(true)
})
