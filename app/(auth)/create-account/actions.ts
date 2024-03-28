"use server"

import { z } from "zod"
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE, USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_REGEX,
  USERNAME_REGEX_MESSAGE
} from "@/lib/constants";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";
import { hashedPassword } from "@/lib/hash";

const checkUsername = (username: string) => !username.trim().includes("potato")
const checkPasswords = ({password, confirm_password}: {password: string, confirm_password: string}) => password === confirm_password
const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    }
  })
  return !user
}
const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    }
  })
  return !user
}

const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Username must be a string",
      required_error: "Username is required",
    })
    .min(USERNAME_MIN_LENGTH, "Too short")
    .max(USERNAME_MAX_LENGTH, "Too long")
    .toLowerCase()
    .trim()
    .regex(USERNAME_REGEX, USERNAME_REGEX_MESSAGE)
    // .transform((val) => `🚀-${val.replace(/\s+/g, " ")}`)
    .refine(checkUsername, "Username cannot contain potato")
    .refine(checkUniqueUsername, "Username is already taken"),
  email: z
    .string()
    .toLowerCase()
    .email()
    .refine(checkUniqueEmail, "Email is already taken"),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH)
    .max(PASSWORD_MAX_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE),
  confirm_password: z.string().min(PASSWORD_MIN_LENGTH).max(PASSWORD_MAX_LENGTH),
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
  const result = await formSchema.safeParseAsync(data)

  if (!result.success) {
    const errors = result.error.flatten()
    console.log("Validation errors:", errors)
    return { data: null, errors }
  } else {
    const user = await createUser(result.data)
    const cookie = await getSession()
    cookie.id = user.id
    await cookie.save()
    redirect("/profile")
  }
}

const createUser = async (data: {
  password: string;
  username: string;
  email: string;
}) => {
  return await db.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: await hashedPassword(data.password),
    },
    select: {
      id: true,
    }
  })
}