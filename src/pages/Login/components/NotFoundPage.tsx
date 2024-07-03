import Button from '@/components/atoms/Login/Button';
import DangerCircle from '/danger-circle.svg';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleLoginBUtton = () => {
    navigate('/login');
  };
  return (
    <>
      <img src={DangerCircle} alt="" width={'70px'} />
      <div className="pGroup">
        <p>비밀번호 조회 결과, 입력하신 정보와 일치하는 데이터를 찾지 못했습니다.</p>
        <p>다른 검색항목으로 다시 시도해보세요.</p>
      </div>
      <Button styledType="login" type="button" onClick={handleLoginBUtton}>
        {'로그인'}
      </Button>
      <Button styledType="find" type="button" />
    </>
  );
}
