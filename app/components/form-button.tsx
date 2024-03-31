"use client"

import { useFormStatus } from "react-dom"

interface FormButtonProps {
  text: string
  pendingText?: string
}

export function FormButton({
  text,
  pendingText = "Loading...",
}: Readonly<FormButtonProps>) {
  // useFormStatus should be used inside a form as child of the form.
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className="primary-btn w-full disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-white"
      type="submit"
    >
      {pending ? pendingText : text}
    </button>
  )
}
