"use server"

import { z } from "zod"
import {PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE} from "@/lib/constants";
import db from "@/lib/db";

import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { comparePassword } from "@/lib/hash";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    }
  })
  return !!user
}

const checkPassword = async ({email, password}: {email: string, password: string}) => {
  
}

const formSchema = z.object({
  email: z
    .string()
    .toLowerCase()
    .email()
    .refine(checkEmailExists, "An account does not exist with this email"),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH)
    .max(PASSWORD_MAX_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_MESSAGE),
})

export const login = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries())
  const validationResult = await formSchema.safeParseAsync(data)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  if (!validationResult.success) {
    return { data: null, errors: validationResult.error.flatten() }
  }

  const user = await db.user.findUnique({
    where: {
      email: validationResult.data.email,
    },
    select: {
      id: true,
      password: true,
    }
  })

  const ok = await comparePassword(validationResult.data.password, user!.password ?? "")
  
  if (!ok) {
    console.log("Incorrect password")
    return {
      data: null,
      errors: {
        fieldErrors: {
          password: ["Incorrect password"],
          email: [],
        },
        formErrors: {},
      }
    }
  }

  const session = await getSession()
  session.id = user!.id
  await session.save()
  redirect("/profile")
}