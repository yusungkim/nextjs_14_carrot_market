interface FormButtonProps {
  text: string;
  loading: boolean;
}

export function FormButton({ text, loading }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn w-full disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-white"
      type="submit"
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
