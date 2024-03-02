"use server"

import { z } from "zod"

const usernameRegex = new RegExp(/^[a-zA-Z0-9\s]+$/)
// At least one uppercase letter, one lowercase letter, one number and one special character
const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);
const checkUsername = (username: string) => !username.trim().includes("potato")
const checkPasswords = ({password, confirm_password}: {password: string, confirm_password: string}) => password === confirm_password

const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Username must be a string",
      required_error: "Username is required",
    })
    .min(3, "Too short")
    .max(20, "Too long")
    .toLowerCase()
    .trim()
    .regex(usernameRegex, "Username can only contain letters, numbers and spaces")
    .transform((val) => `🚀-${val.replace(/\s+/g, " ")}`)
    .refine(checkUsername, "Username cannot contain potato"),
  email: z.string().toLowerCase().email(),
  password: z
    .string()
    .min(8)
    .max(20)
    .regex(passwordRegex, "A password must have lowercase, UPPERCASE, number and special character"),
  confirm_password: z.string().min(8).max(20),
})
  .refine(checkPasswords, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })

export async function createAccount(prevStatus: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  }

  // validate without throwing an error
  const result = formSchema.safeParse(data)
  console.log(result)
  if (!result.success) {
    const errors = result.error.flatten()
    console.log("Validation errors:", errors)
    return errors
  } else {
    return result.data
  }
}