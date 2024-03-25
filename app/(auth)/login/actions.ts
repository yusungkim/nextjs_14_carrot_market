"use server"

import { z } from "zod"
import {PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE} from "@/lib/constants";
const formSchema = z.object({
  email: z.string().toLowerCase().email(),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH)
    .max(PASSWORD_MAX_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE),
})

export const login = async (prevState: any, formData: FormData) => {
  // const data = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // }
  const data = Object.fromEntries(formData.entries())
  const validationResult = formSchema.safeParse(data)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  if (validationResult.success) {
    return { data: validationResult.data, errors: null }
  } else {
    return { data: null, errors: validationResult.error.flatten() }
  }
}