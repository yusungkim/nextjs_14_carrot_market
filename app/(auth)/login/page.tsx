"use client"

import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import SocialLogin from "@/app/components/social-login";
import { useFormState } from "react-dom";
import { login } from "./actions";
import {PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH} from "@/lib/constants";

export default function Login() {

  const [state, dispatch] = useFormState(login, null)

  console.log(state)

  return (
    <main className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Login</h1>
        <h2 className="text-xl">Login with email and password.</h2>
      </div>

      <form 
        action={dispatch}
        className="flex flex-col gap-3"
      >
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.errors?.fieldErrors?.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          maxLength={PASSWORD_MAX_LENGTH}
          errors={state?.errors?.fieldErrors?.password} />
        <FormButton text="Login" />
      </form>
      
      <div className="h-px w-full bg-neutral-400" />
      
      <SocialLogin />
    </main>
  );
}
