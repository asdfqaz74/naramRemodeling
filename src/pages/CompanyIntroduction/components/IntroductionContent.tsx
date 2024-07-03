import { StyledDiscription, StyledDivFlex } from '@/styles/components/IntroductionPage/Introduction';
import image_01 from '/introduction_image_01.jpg';
import image_02 from '/introduction_image_02.jpg';
import { StyledContent } from '@/styles/components/PageSubTitle/PageSubTitle';

function IntroductionContent() {
  return (
    <StyledContent gap="51px">
      <StyledDivFlex>
        <div className="flexColumn">
          {/* <img src={GREETING} alt="회사소개 페이지에 GREETING 배경 이미지" /> */}
          <img src={image_01} alt="회사소개 페이지에 날씨 좋은 섬으로 이어진 다리 사진" />
        </div>
        <StyledDiscription textPosition="right">
          <p className="firstText">
            우선 애정 어린 마음으로 저희 나람사료에 보내주신 <br />
            관심과 격려에 깊은 감사를 드리며, <br />
            어려운 과정에서도 늘 함께 해 오신 <br />
            고객 여러분께 고개 숙여 감사드립니다.
            <br /> <br />
            이제 저희 나람사료는 하루가 다르게 발전하고 <br />
            변화하는 사회와 환경에서 더 이상 변화 하지 않으면 <br />
            살아남을 수 없는 시대의 흐름 속에서 전 직원이 지혜와 열정을 모아 <br />
            고객 여러분들과 함께 새로운 미래로 향하려고 합니다.
            <br /> <br /> 그 동안 나람사료가 경주해왔던 노력들과 앞으로 <br />
            펼쳐나갈 사업에 대하여 여러분들께 알리고,
            <br />
            항상 나람사료는 고객을 가족으로 여기고 사랑하며 <br />
            고객의 이익을 최선으로 추구하는 신념을 가지고 <br />
            고객여러분의 미래를 행복으로 채워 드리는 <br />
            기업으로 성장될 것입니다.
            <p className="ceoName">CEO 이 범 호</p>
          </p>
        </StyledDiscription>
      </StyledDivFlex>
      <StyledDivFlex id="year">
        <StyledDiscription>
          <div>
            <p className="mainText">2021</p>
            <p className="secondText">
              2021. 11. 26 주식회사 이브이컴퍼니 설립
              <br />
              2021. 12. 15 창업기업 확인
              <br /> 2021. 12. 30 공장 등록 (경기도 남양주시)
              <br />
              2021. 02. 24 특허 등록 (전기차 충전소용 기초블록)
            </p>
          </div>
          <div>
            <p className="mainText">2022</p>
            <p className="secondText">
              2022. 01. 14
              <br />
              품질경영시스템 (ISO9001:2015)
              <br />
              인증 환경경영시스템 (ISO14001:2015)
              <br />
              인증 2022. 03. 22 디자인 등록 (전기차 충전소 캐노피)
              <br />
              2022. 04. 23 법인 자본금 유상증자 1억 5천만원 <br />
              2022. 05. 20 지식재산공제 가입 (기술보증기금) <br />
              2022. 05. 29 기업부설연구소 인증 <br />
              2022. 06. 07 건설업 등록 (금속구조물·창호·온실공사업) <br />
              2022. 06. 09 뿌리기업 인증 <br />
              2022. 06. 13 직접생산 (마무리재료 및 제품) 증명 <br />
              2022. 06. 14 <br />
              직접생산 (근력강화용 헬스기구) 증명 <br />
              직접생산 (운동장 및 놀이터용 장비) 증명 <br />
              2022. 06. 28 직접생산 (울타리재료 및 제품) 증명 <br />
              2022. 10. 25 성과공유기업 인증 <br />
              2022. 12. 01 상표 등록 (이브이컴퍼니) <br />
              2022. 12. 07 우수기술기업 인증 ( T4 전기차 충전소 캐노피 제조 기술)
            </p>
          </div>
        </StyledDiscription>
        <div className="flexColumn02">
          {/* <img src={History} alt="회사소개 페이지에 HISROTY 배경 이미지" /> */}
          <img src={image_02} alt="회사소개 페이지에 숲속으로 이어진 사진" />
        </div>
      </StyledDivFlex>

      {/* <img src={ORGANIZATION} alt="회사소개 페이지에 ORGANIZATION 배경 이미지" /> */}
      <StyledDivFlex paddingBottom="274">{/* <img src={table} alt="회사소개 페이지에 조직도 사진" /> */}</StyledDivFlex>
    </StyledContent>
  );
}

export default IntroductionContent;
