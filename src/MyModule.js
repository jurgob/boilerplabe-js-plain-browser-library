class MyModule {
  constructor() {
    this.myProperty = false
  }

  myMethod() {
    this.myProperty = true
    return this.myProperty
  }
}

export default MyModule
