class authServices {
  constructor() {}

  async signUp(body: any) {
    const { userName, email, password, phone, DateOfBirth , nationality} = body
  }
}

export default new authServices()
