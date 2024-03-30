import bcrypt from "bcryptjs"

function peppered(password: string) {
  const PEPPER = process.env.PASSWORD_HASH_PEPPER!
  const { odds, evens } = PEPPER.split("")!.reduce(
    ({ odds, evens }, char, i) =>
      i % 2
        ? { odds: odds + char, evens: evens }
        : { odds: odds, evens: evens + char },
    { odds: "", evens: "" }
  )
  return odds + password + evens
}

export const hashedPassword = async (password: string) =>
  await bcrypt.hash(peppered(password), 13)

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => await bcrypt.compare(peppered(password), hashedPassword)
