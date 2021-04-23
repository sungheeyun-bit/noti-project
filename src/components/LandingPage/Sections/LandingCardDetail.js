import styled from "styled-components";
import Jordan from "../../../assets/Jordan.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
  user-select: none;
`;

const MediumText = styled.span`
  font-size: 14px;
  color: #000;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 10px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #805BD5;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #000;
    border: 3px solid #805BD5;
  }
`;

export default function ShoeDetials() {
  return (
    <DetailsContainer>
      {/* <SmallText>Nike</SmallText> */}
      <SpacedHorizontalContainer>
        <MediumText>Nike Jordan Mid SE-GC</MediumText>
      </SpacedHorizontalContainer>
      <br />
      <SpacedHorizontalContainer>
        <MediumText>알림 설정 해보세요!</MediumText>
        <BuyButton>알림</BuyButton>
      </SpacedHorizontalContainer>
    </DetailsContainer>
  );
}
