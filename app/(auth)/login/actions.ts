"use server"

export const loginFormAction = async (prevState: any, data: FormData) => {
  "use server"
  console.log(prevState)
  console.log(data)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    errors: ["This is an error message", "this is another error message"],
  }
}