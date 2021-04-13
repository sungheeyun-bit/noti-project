ProductList
import React from 'react';
import styled from 'styled-components';
import ProductItem from "./ProductItem";
import { useAlarmState } from '../AlarmContext';
const AlarmListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function ProductList() {
  const alarms = useAlarmState();
  return (
  <AlarmListBlock> <h2>최신 발매 정보</h2>
      {alarms.map(alarm => (
        <ProductItem
          key={alarm.id}
          id={alarm.id}
          img={alarm.img}
          date={alarm.date}
          productname={alarm.productname}
          done={alarm.done}
        />
      ))}
  </AlarmListBlock>
  );
}
export default ProductList;