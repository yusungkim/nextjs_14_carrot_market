"use server"

import { z } from "zod"
import validator from "validator"
import { redirect } from "next/navigation"

const phoneNumberSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ja-JP"),
    "Wrong phone format"
  )

const verificationCodeSchema = z.coerce.number().min(100000).max(999999)

interface ActionState {
  code_sent: boolean
}

export const smsLogin = async (prevStatus: ActionState, formData: FormData) => {
  const phone_number = formData.get("phone_number")
  const result = phoneNumberSchema.safeParse(phone_number)

  if (!prevStatus.code_sent) {
    if (!result.success) {
      return { code_sent: false, errors: result.error.flatten() }
    } else {
      console.log("SMS sent")

      return { code_sent: true, errors: null }
    }
  } else {
    const verification_code = formData.get("verification_code")
    const result = verificationCodeSchema.safeParse(verification_code)
    if (!result.success) {
      console.log("SMS login failed")

      return { code_sent: false, errors: result.error.flatten() }
    } else {
      console.log("SMS login successful")

      redirect("/dashboard")
    }
  }
}
