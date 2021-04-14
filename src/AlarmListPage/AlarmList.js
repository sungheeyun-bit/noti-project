import React from 'react';
import styled from 'styled-components';
import AlarmItem from "./AlarmItem";
import { useAlarmState } from '../AlarmContext';

const AlarmListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function AlarmList() {
  const alarms = useAlarmState();
  return (
  
  <AlarmListBlock> <h2>발매 알림 리스트</h2>
      {alarms.map(alarm => (
        <AlarmItem
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

export default AlarmList;