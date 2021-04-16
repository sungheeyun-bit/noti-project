import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ImBell, ImBin2 } from 'react-icons/im';
import { useAlarmDispatch } from '../AlarmContext';
import Tooltip from '../LandingPage/Tooltip';
import Modal from '../AlarmListPage/Modal';
import AlarmButton from '../AlarmListPage/AlarmButton'

const Remove = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const AlarmItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
    ${Remove} {
      display: initial;
    }
  }
`;

const ItemImg = styled.div`
  width: 96px;
  height: 96px;
  border: 1px solid #ced4da;
  border-radius: 24px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Date = styled.div`
  flex: 1;
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  ${props =>
    props.done &&
    css`
      color: #000000;
    `}
`;

const ProductName = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  ${props =>
    props.done &&
    css`
      color: #000000;
    `}
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #5c3aff;
      color: #5c3aff;
    `}
  `

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #000000;
  }
`;

function AlarmItem({ id, img, done, date, productname }) {

  const dispatch = useAlarmDispatch();
  const onChange = () => dispatch({ type: 'CHANGE', id });
  console.log(onChange)
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  console.log(onRemove)

  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {
    console.log("close modal");
    toggle(open);
  }

  return (
    <AlarmItemBlock>
      <ItemImg>{img}</ItemImg>
      <Date done={done}>{date}</Date>
      <ProductName done={done}>{productname}</ProductName>
      <Button done={done} onClick={onChange}>{done && <ImBell />}</Button>
      <AlarmButton handlClick={() => handlOpenModal(true)}>
        알림 받기
      </AlarmButton>
      <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
        <ModalContent>
          <h1> 발매 하루전 카카오 알림톡을 통해 발매 정보를 다시 알려 드립니다. </h1>
        </ModalContent>
        </Modal>
      <Tooltip text="툴팁 테스트입니다.">
      <Remove onClick={onRemove}>
        <ImBin2 />
      </Remove>
      </Tooltip>
    </AlarmItemBlock>
  );
}

export default AlarmItem;