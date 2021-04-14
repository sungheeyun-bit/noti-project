import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import styled, { css } from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAlarmDispatch } from '../AlarmContext';

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
  `;

  const Router = styled.button`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;
`;


function ProductItem({ id, img, done, date, productname }) {

  const dispatch = useAlarmDispatch();
  const onChange = () => dispatch({ type: 'CHANGE', id });
  console.log(onChange)

  const [click, setClick] = useState(false);
  const history = useHistory();
  const handleClick = () => setClick(!click);

  return (
    <ProductItemBlock>
      <ItemImg>{img}</ItemImg>
      <Date done={done}>{date}</Date>
      <ProductName done={done}>{productname}</ProductName>
      <Button done={done && <AiOutlineHeart />} onClick={onChange}>{done && <AiFillHeart />}</Button>
      {/* <Router> */}
      <Link
      exact
      to="/DetailPage"
      onClick={handleClick}>
        상세정보 확인하기
      </Link>
      {/* </Router> */}
    </ProductItemBlock>
  );
}

export default ProductItem;