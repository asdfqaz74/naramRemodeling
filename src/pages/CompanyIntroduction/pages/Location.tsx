import PageLayout from '@/components/organisms/PageLayout/PageLayout';
import contactUs from '/ContactUs_main.jpg';
import LocationContent from '../components/LocationContent';

function Location() {
  return (
    <>
      <PageLayout
        alt="찾아오시는 길 페이지"
        mainImage={contactUs}
        firstTitle="CONTACT"
        firstSubTitle="US"
        secondTitle="찾아오시는 길"
        thirdTitle="주식회사 나람에 찾아오시는 길입니다 "
      >
        <LocationContent />
      </PageLayout>
    </>
  );
}

export default Location;
