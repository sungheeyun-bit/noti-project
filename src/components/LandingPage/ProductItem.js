ProductItem 
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAlarmDispatch } from '../AlarmContext';
import AlarmButton from '../AlarmListPage/AlarmButton'
const ProductItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
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
function ProductItem({ id, img, done, date, productname }) {
  const dispatch = useAlarmDispatch();
  const onChange = () => dispatch({ type: 'CHANGE', id });
  console.log(onChange)
  const [isOpen, toggle] = useState(false);
  function handlOpenModal(open) {
    console.log("상세페이지 이동");
    toggle(open);
  }
//   function PageLink({ history }) {
//     const DetailPageLink = () => {
//         history.push('/');
//       };
//       useEffect(() => {
//         console.log(history);
//         const unblock = history.block('정말 떠나실건가요?');
//         return () => {
//           unblock();
//         };
//       }, [history]);
//     }
  return (
    <ProductItemBlock>
      <ItemImg>{img}</ItemImg>
      <Date done={done}>{date}</Date>
      <ProductName done={done}>{productname}</ProductName>
      <Button done={done && <AiOutlineHeart />} onClick={onChange}>{done && <AiFillHeart />}</Button>
      <AlarmButton handlClick={() => handlOpenModal(true)}>
        상세 정보
      </AlarmButton>
    </ProductItemBlock>
  );
}
export default ProductItem;