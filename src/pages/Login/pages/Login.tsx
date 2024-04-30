import axios from 'axios';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

function Login() {
  // error 상태 추가
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // 로그인 요청 함수
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { username, password } = data;

      // FormData 생성
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      // 로그인 요청
      await axios.post('https://34.47.88.186:10000/login', formData);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setIsError(true);
    }
  };

  return (
    <>
      <LoginForm onSubmit={onSubmit} isError={isError} />
    </>
  );
}

export default Login;
