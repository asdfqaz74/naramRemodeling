import { StyledLoginForm } from '@/styles/components/Login/LoginForm';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import DangerIcon from '/danger-circle.svg';
import FindInput from '@/components/atoms/Input/IdInput';
import Form from '@/components/atoms/Form/Form';
import Button from '@/components/atoms/Login/Button';

export default function FindIdPage({ onSubmit }: { onSubmit: SubmitHandler<FieldValues> }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onChange',
  });
  return (
    <>
      <StyledLoginForm>
        <div className="titleForm">
          <h2>아이디 찾기</h2>
          <p>언제나 고객님의 만족을 추구합니다.</p>
        </div>
        <div className="dangerText">
          <img src={DangerIcon} alt="경고 아이콘" />
          <p>
            가입 시 입력한 <span>이메일 </span> 정보로 회원 아이디를 조회할 수 있습니다.{' '}
          </p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FindInput
            label="이름"
            id="name"
            type="text"
            error={errors.name ? errors.name.message : ''}
            register={register('name', { required: '이름은 필수 입력입니다.' })}
          />
          <FindInput
            label="이메일"
            id="email"
            type="email"
            error={errors.email ? errors.email.message : ''}
            register={register('email', {
              required: '이메일은 필수 입력입니다.',
            })}
          />
          <Button styledType="login" type="submit">
            {'확인'}
          </Button>
        </Form>
      </StyledLoginForm>
    </>
  );
}
