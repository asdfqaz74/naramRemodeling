import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/atoms/Login/Button';
import LoginInput from '@/components/atoms/Input/LoginInput';
import Form from '@/components/atoms/Form/Form';
import { Link } from 'react-router-dom';
import { StyledLoginForm } from '@/styles/components/Login/LoginForm';
import DangerIcon from '/danger-circle.svg';
import Find_user from '/find_user.svg';
import Find_password from '/find_password.svg';

export type LoginFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  isError?: boolean;
};

function LoginForm({ onSubmit, isError }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onChange',
  });

  return (
    <StyledLoginForm>
      <div className="titleForm">
        <h2>로그인</h2>
        <p>언제나 고객님의 만족을 추구합니다.</p>
      </div>
      <div className="dangerText">
        <img src={DangerIcon} alt="경고 아이콘" />
        <p>
          가입 시 입력한 <span>이메일 </span> 정보로 회원 아이디를 조회할 수 있습니다.{' '}
        </p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          label="아이디"
          id="username"
          type="text"
          placeholder="아이디"
          error={errors.username ? errors.username.message : ''}
          register={register('username', {
            required: '아이디는 필수 입력입니다.',

            minLength: {
              value: 2,
              message: '아이디는 최소 2글자 이상이어야 합니다.',
            },
          })}
        />
        <LoginInput
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호"
          error={errors.password ? errors.password.message : ''}
          register={register('password', {
            required: '비밀번호는 필수 입력입니다.',
            pattern: {
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
            },
          })}
        />

        <div className="ButtonGap">
          {isError && <p className="text-red-500">{'아이디 또는 비밀번호를 확인해주세요.'}</p>}
          <Button styledType={'login'} type="submit">
            {'로그인'}
          </Button>
          <div className="divider"></div>
          <Link to="/Join">
            <Button styledType="signUp" type="button">
              회원가입
            </Button>
          </Link>
        </div>
      </Form>
      <div className="Find">
        <Link to={'/login/FindId'} className="link">
          <img src={Find_user} alt="아이디 찾기 아이콘" />
          아이디 찾기
        </Link>
        <Link to={'/login/FindPassword'} className="link">
          <img src={Find_password} alt="비밀번호 찾기 아이콘" />
          비밀번호 찾기
        </Link>
      </div>
    </StyledLoginForm>
  );
}

export default LoginForm;
