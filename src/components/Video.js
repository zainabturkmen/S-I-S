import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Video1 from "../assets/video/Video1.mp4";
import Video2 from "../assets/video/Video2.mp4";

const Video = () => {
  return (
    <Wrapper>
      <h1>Amazing Case Study</h1>

      <div className="video-grid">
        <div className="video-card">
          <h2>Inspiring Speech</h2>
          <div className="player-wrapper">
            <ReactPlayer url={Video1} controls width="100%" height="350px" />
          </div>
        </div>

        <div className="video-card">
          <h2>Personal Brand</h2>
          <div className="player-wrapper">
            <ReactPlayer url={Video2} controls width="100%" height="350px" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-width: 330px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1100px;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: .5rem;
    text-align: center;
    width: 100%;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }

  .video-grid {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .video-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      width: 300px;

      @media (min-width: 768px) {
        width: 700px;
      }

      h2 {
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 0.5rem;

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .player-wrapper {
        width: 100%;
        aspect-ratio: 16 / 9;
      }
    }
  }
`;
export default Video;
