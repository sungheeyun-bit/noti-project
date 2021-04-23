// No need to import React from 'react' in latest version as that is handled
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Jordan from "../../../assets/Jordan.png";

import LandingCardDetail from "./LandingCardDetail";

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled(motion.div)`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #fff;
  color: #000;
  position: relative;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background: rgb(216,151,0)
  background: linear-gradient(
    45deg,
    rgba(251, 190, 1, 1) 20%,
    rgba(170, 101, 3, 1) 100%
  );
  border-radius: 50%;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 16px;
`;

const BottomContainer = styled(motion.div)`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const TitleText = styled(motion.h1)`
  color: #000;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  transform: scaleY(1.3);
  font-family: sans-serif;
  font-size: 54px;
  font-weight: 900;
  user-select: none;
`;

const ShoeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoe = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  img {
    width: auto;
    transform: rotate(-20deg);
    height: 100%;
    margin-top: 2em;
    margin-right: 2em;
  }
`;

export default function NikeCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.2}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ShoeWrapper>
            <Shoe
              animate={{
                scale: [0, 1],
                rotate: [0, 360]
              }}
              transition={{ duration: 1 }}
              style={{
                x,
                y,
                rotateX,
                rotateY,
                z: 1000
              }}
              drag
              dragElastic={0.1}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <img
                draggable="false"
                src={Jordan}
                alt="Jordan Shoe"
              />
            </Shoe>
          </ShoeWrapper>
          <TitleText
            animate={{
              scale: [0, 1]
            }}
            transition={{ duration: 1 }}
          >
            Nike Jordan
          </TitleText>
        </TopContainer>
        <BottomContainer
          animate={{
            scale: [0, 1]
          }}
          transition={{ duration: 1 }}
        >
          <LandingCardDetail />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
