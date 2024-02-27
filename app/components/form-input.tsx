interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string; // The name of the input field is crucial for the form to work with the server action.
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: Readonly<FormInputProps>) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="h-10 w-full rounded-md border-none bg-transparent ring-1 ring-neutral-200 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors?.map((error, index) => (
        <span key={index} className="font-medium text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
