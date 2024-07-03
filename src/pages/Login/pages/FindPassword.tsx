import { FieldValues, SubmitHandler } from 'react-hook-form';
import FindPasswordPage from '../components/FindPasswordPage';
import axios from 'axios';
import { useState } from 'react';

function FindPassword() {
  const [userPassword, setUserPassword] = useState<string>('');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { name, email, id } = data;

      console.log('name', name);
      console.log('email', email);
      console.log('id', id);

      // 아이디 찾기 요청
      const response = await axios.post('https://ip:10000/user/findPw', { name, email, id });

      setUserPassword(response.data.userPassword);
    } catch (error) {
      console.error('Error finding Password:', error);
    }
  };
  return (
    <>
      <FindPasswordPage onSubmit={onSubmit} />
      {userPassword && <p>찾은 비밀번호 : {userPassword}</p>}
    </>
  );
}

export default FindPassword;
