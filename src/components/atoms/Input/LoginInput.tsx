import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import { StytledLoginInput } from '@/styles/components/Login/LoginForm';
import HideIcon from '/hide.svg';
import NothideIcon from '/nothide.svg';

export type InputProps = {
  label?: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  register?: UseFormRegisterReturn;
};

function LoginInput({ label, id, type, placeholder, error, register }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setShowPasswordIcon((prevShowPasswordIcon) => !prevShowPasswordIcon);
  };

  return (
    <StytledLoginInput>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="input-container">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          id={id}
          placeholder={placeholder}
          {...register}
          aria-invalid={error ? 'true' : 'false'}
        />
        {type === 'password' && (
          <button type="button" className="HideIcon" onClick={togglePasswordVisibility}>
            <img src={showPasswordIcon ? NothideIcon : HideIcon} alt="비밀번호 숨기기 보이기 아이콘" />
          </button>
        )}
      </div>
      <span className="error"> {error && renderErrorMessage(error as string | FieldError)}</span>
    </StytledLoginInput>
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

export default LoginInput;
