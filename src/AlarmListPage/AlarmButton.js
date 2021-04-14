import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const AlarmButton = styled(motion.button)`
  font-size: 1rem;
  padding: 12px;
  border-radius: 16px;
  border: none;
  background-color: #5c3aff;
  cursor: pointer;
  color: white;
`;
const animatedOpenButton = ({ children, handlClick }) => {
  return (
    <AlarmButton
      onClick={handlClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </AlarmButton>
  );
};

export default animatedOpenButton;
