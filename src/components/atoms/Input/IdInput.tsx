import { StytledLoginInput } from '@/styles/components/Login/LoginForm';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  register?: UseFormRegisterReturn;
  label: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  id: 'name' | 'email' | 'id';
  type: 'text' | 'email';
};

export default function FindInput({ register, label, error, id, type }: InputProps) {
  return (
    <>
      <StytledLoginInput>
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          type={type}
          name={id}
          id={id}
          placeholder={label}
          {...register}
          aria-invalid={error ? 'true' : 'false'}
        />
        <span className="error"> {error && renderErrorMessage(error as string | FieldError)}</span>
      </StytledLoginInput>
    </>
  );
}

function renderErrorMessage(error: string | FieldError) {
  if (typeof error === 'string') {
    return <p>{error}</p>;
  } else if (error && error.message) {
    return <p>{error.message}</p>;
  } else {
    return null;
  }
}
