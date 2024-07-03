import { FindButtonContainer, StyledButton } from '@/styles/components/Login/Button';
import { Link } from 'react-router-dom';

type ButtonProps = {
  id?: string;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  ariaLabel?: string;
  styledType: string;
  type: 'submit' | 'reset' | 'button' | undefined;
};

function Button({ onClick, children, type, ariaLabel, styledType, ...restProps }: ButtonProps) {
  return (
    <StyledButton>
      {styledType === 'login' && (
        <button className="login" onClick={onClick} type={type} aria-label={ariaLabel} {...restProps}>
          {children}
        </button>
      )}{' '}
      {styledType === 'signUp' && (
        <button className="signUp" onClick={onClick} type={type} aria-label={ariaLabel} {...restProps}>
          {children}
        </button>
      )}
      {styledType === 'find' && (
        <FindButtonContainer>
          <Link to={'/login/FindId'} className="find" type={type} aria-label="아이디 찾기">
            아이디 찾기
          </Link>
          <Link to={'/login/FindPassword'} className="find" type={type} aria-label="비밀번호 찾기">
            비밀번호 찾기
          </Link>
        </FindButtonContainer>
      )}
    </StyledButton>
  );
}

export default Button;
