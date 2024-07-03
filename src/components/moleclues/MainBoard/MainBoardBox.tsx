import MainBoardText from '@/components/atoms/MainBoard/MainBoardText';
import MainBoxLink from '@/components/atoms/MainMenuBox/MainBoxLink';
import MainBoxTitle from '@/components/atoms/MainMenuBox/MainBoxTitle';
import { MainBoardContainer, MainBoardTextContainer, MainBoardTextWrapper, MainBoxHeader } from '@/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MainBoardBox({ title, path, isNotice }: { title: string; path: string; isNotice: boolean }) {
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let ENDPOINT;
      if (isNotice) {
        ENDPOINT = 'https://my-json-server.typicode.com/asdfqaz74/fake-api/posts?_limit=4';
      } else {
        ENDPOINT = 'https://my-json-server.typicode.com/asdfqaz74/fake-api/posts';
      }

      try {
        const response = await axios.get(ENDPOINT);
        setNoticeList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [isNotice]);

  return (
    <MainBoardContainer>
      <MainBoxHeader>
        <MainBoxTitle title={title} color="#004B87" isBox={false} />
        <MainBoxLink color="#333333" path={path} isBox={false} />
      </MainBoxHeader>
      <MainBoardTextWrapper>
        {noticeList.map((item: { id: number; title: string; date: string }) => (
          <MainBoardTextContainer key={item.id}>
            <MainBoardText text={item.title} route="/" />
            <MainBoardText text={item.date} />
          </MainBoardTextContainer>
        ))}
      </MainBoardTextWrapper>
    </MainBoardContainer>
  );
}
