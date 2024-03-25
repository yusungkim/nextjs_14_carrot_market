import { InputHTMLAttributes } from "react";

interface FormInputProps {
  name: string; // To enforce the name attribute, I will add it to the FormInputProps interface
  errors?: string[];
}

export default function FormInput({
  errors = [],
  name,
  ...rest
}: Readonly<FormInputProps & InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="no-spinner h-10 w-full rounded-md border-none bg-transparent ring-1 ring-neutral-200 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500"
        {...rest}
      />
      {errors?.map((error, index) => (
        <span key={index} className="font-medium text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
