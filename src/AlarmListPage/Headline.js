import React from "react";
import styled from 'styled-components';
import { useAlarmState } from '../AlarmContext';

const HeadlineBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .item {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #000000;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
    text-align: right;
  }
`;

function Headline() {
  const alarms = useAlarmState();
  const doneTasks = alarms.filter(alarm => alarm.done);
  console.log(alarms)
  // 배열 띄우기
  return (
    <HeadlineBlock>
      <h1>3일뒤,</h1>
      <div className="item">나이키 조던 1 유니버시티 블루가 발매됩니다.</div>
      <div className="tasks-left">알림 설정 {doneTasks.length}개 완료</div>
    </HeadlineBlock>
  );
}

export default Headline;