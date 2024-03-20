
import { z} from "zod"
import { PHONE_NUMBER_REGEX, PHONE_NUMBER_REGEX_MESSAGE, VERIFICATION_CODE_LENGTH } from "@/lib/constants"

const formSchema = z.object({
  phone_number: z.string().regex(PHONE_NUMBER_REGEX, PHONE_NUMBER_REGEX_MESSAGE),
  verification_code: z.string().length(VERIFICATION_CODE_LENGTH)
})

export const smsLogin = async (prevStatus: any, formData: FormData) => {
  const data = {
    phone_number: formData.get("phone_number"),
    verification_code: formData.get("verification_code"),
  }

  const validationResult = formSchema.safeParse(data)

  console.log(validationResult)

  if (validationResult.success) {
    return { data: validationResult.data, errors: null }
  } else {
    return { data: null, errors: validationResult.error.flatten() }
  }
}