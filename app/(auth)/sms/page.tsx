"use client";

import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import {useFormState} from "react-dom";
import {smsLogin} from "@/app/(auth)/sms/actions";

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, null)

  return (
    <main className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form 
        className="flex flex-col gap-3"
        action={dispatch}
      >
        <FormInput
          name="phone_number"
          type="number"
          placeholder="Phone number"
          required
          errors={state?.errors?.fieldErrors?.phone_number}
        />
        <FormInput
          name="verification_code"
          type="number"
          placeholder="Verification code"
          required
          errors={state?.errors?.fieldErrors?.verification_code}
        />
        <FormButton text="Verify" />
      </form>
    </main>
  );
}
