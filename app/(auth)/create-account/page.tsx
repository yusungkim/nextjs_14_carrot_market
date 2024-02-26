import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import SocialLogin from "@/app/components/social-login";

export default function CreateAccount() {
  return (
    <main className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Create Account</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Username"
          required
          errors={["username is too short"]}
        />
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <FormInput type="password" placeholder="Confirm Password" required />
        <FormButton text="Create Account" loading={false} />
      </form>
      <div className="h-px w-full bg-neutral-400" />
      <SocialLogin />
    </main>
  );
}
