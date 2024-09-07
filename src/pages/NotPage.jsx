// src/pages/NotFound.js
import React from 'react';
import { useSelector } from 'react-redux';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

// Define keyframes for animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000B2;
`;

const ErrorMessage = styled.h1`
  font-size: 4rem;
  color: #f00f0f;
  animation: ${bounce} 2s infinite;
`;

const NotFound = () => {
    const language = useSelector((state) => state.language.language);
  return (
    <ErrorContainer>
      <ErrorMessage>404 - {language === 'KG' ? 'Барак табылган жок' : 'Страница не найдена'}</ErrorMessage>
    </ErrorContainer>
  );
};

export default NotFound;
