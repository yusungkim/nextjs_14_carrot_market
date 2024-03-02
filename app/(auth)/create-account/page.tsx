"use client"

import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import SocialLogin from "@/app/components/social-login";
import {useFormState} from "react-dom";
import {createAccount} from "@/app/(auth)/create-account/actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  console.log(state)
  return (
    <main className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Create Account</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors?.username}
          minLength={3}
          maxLength={20}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email} />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={8}
          maxLength={20}
          errors={state?.fieldErrors?.password} />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          minLength={8}
          maxLength={20}
          errors={state?.fieldErrors?.confirm_password} />
        <FormButton text="Create Account" />
      </form>
      <div className="h-px w-full bg-neutral-400" />
      <SocialLogin />
    </main>
  );
}
