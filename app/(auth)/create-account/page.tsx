"use client"

import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import SocialLogin from "@/app/components/social-login";
import {useFormState} from "react-dom";
import {createAccount} from "@/app/(auth)/create-account/actions";
import {USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH} from "@/lib/constants";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  console.log(state)
  return (
    <main className="flex flex-col gap-8 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Create Account</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Create Account */}
        <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.errors?.fieldErrors?.username}
          minLength={USERNAME_MIN_LENGTH}
          maxLength={USERNAME_MAX_LENGTH}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.errors?.fieldErrors?.email} />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          maxLength={PASSWORD_MAX_LENGTH}
          errors={state?.errors?.fieldErrors?.password} />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          maxLength={PASSWORD_MAX_LENGTH}
          errors={state?.errors?.fieldErrors?.confirm_password} />
        <FormButton text="Create Account" />
        </form>

        {/* Login */}
        <div className="text-center">Already have an account? <a href="/login" className="text-primary-500">Login</a></div>
      </div>
      
      {/* Seperate bar */}
      <div className="h-px w-full bg-neutral-400" />
      
      {/* Social Logins */}
      <SocialLogin />
    </main>
  );
}
