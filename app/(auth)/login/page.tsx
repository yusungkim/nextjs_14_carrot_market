import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import SocialLogin from "@/app/components/social-login";

export default function Login() {
  return (
    <main className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Login</h1>
        <h2 className="text-xl">Login with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required />
        <FormInput type="password" placeholder="Password" required />
        <FormButton text="Login" loading={false} />
      </form>
      <div className="h-px w-full bg-neutral-400" />
      <SocialLogin />
    </main>
  );
}
