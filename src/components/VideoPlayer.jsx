import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  margin: auto;
  overflow: hidden;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Iframe = styled.iframe`
  width: 881px;
  height: 419px;
  @media (max-width: 1024px) {
    width: 80%;
    /* height: 256px; */
  }
  @media (max-width: 470px) {
    width: 370px;
    height: 256px;
  }
`;

const VideoPlayer = () => {
  return (
    <VideoContainer>
      <Iframe
        src="https://www.youtube.com/embed/QqEFkv5mBiQ?autoplay=1&rel=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      />
    </VideoContainer>
  );
};

export default VideoPlayer;
