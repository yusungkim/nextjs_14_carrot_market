import FormInput from "@/app/components/form-input";
import { FormButton } from "@/app/components/form-button";
import SocialLogin from "@/app/components/social-login";

export default function SMSLogin() {
  return (
    <main className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="number" placeholder="Phone number" required />
        <FormInput type="number" placeholder="Verification code" required />
        <FormButton text="Verify" loading={false} />
      </form>
    </main>
  );
}
