import { css } from '@emotion/react';
import styled from '@emotion/styled';

const H1 = styled.h1`
  color: dodgerblue;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const EmotionPage = () => {
  return (
    <div
      css={css`
        background-color: #f4f4f7;
        height: 100vh;
        padding-top: 2rem;
      `}
    >
      <H1>Emotion</H1>
      <p className="text-center text-lg">
        You can combine Tailwind with Emotion
      </p>
    </div>
  );
};

export default EmotionPage;
