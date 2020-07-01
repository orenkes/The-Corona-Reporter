import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const WorldSpread = () => {
  const ref = useRef();
  const [onScreen, setOnScreen] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOnScreen(true);
        } else {
          setOnScreen(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <WorldSpreadWrapper id="news" ref={ref} onScreen={onScreen}>
      <CronaImg onScreen={onScreen} />
      <AllCountrysDataContainer>
        <DataHeader>How To Avoid</DataHeader>
        <DataWrapper>
          <DataItem onScreen={onScreen}>
            <img src={"./sneezeinelbow.png"} alt="img" />
            Sneeze and cough to your elbow or a tissue
          </DataItem>
          <DataItem onScreen={onScreen}>
            <img src={"./washhands.png"} alt="img" />
            Wash your hands frequently
          </DataItem>
          <DataItem onScreen={onScreen}>
            <img src={"./DontTouchFaceIcon.png"} alt="img" />
            Avoid touching your eyes, nose and mouth
          </DataItem>
          <DataItem onScreen={onScreen}>
            <img src={"./protectquarantine.png"} alt="img" />
            Stay home
          </DataItem>
        </DataWrapper>
      </AllCountrysDataContainer>
    </WorldSpreadWrapper>
  );
};

export default WorldSpread;

const WorldSpreadWrapper = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 0 0 50% 0; */
  /* font-size: 1.4rem; */
  /* border: 1px solid black; */
  /* background-color: #107a8b; */
  width: 100%;
  position: relative;
  transition: 0.2s ease-in;
  opacity: ${({ onScreen }) => (onScreen ? "1" : "0")};
  transition: 0.5s linear;
  overflow: hidden;
`;

const AllCountrysDataContainer = styled.div`
  height: 90%;
  width: 60%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* border: 1px solid black; */

  @media (max-width: 1300px) {
    width: 90%;
  }
`;

const DataWrapper = styled.div`
  height: 80%;
  width: 80%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
  /* letter-spacing: 1px; */
`;

const DataHeader = styled.div`
  display: flex;
  /* align-items: center; */
  color: #3b4a6b;
  justify-content: center;
  align-self: flex-start;

  font-family: "Anton", sans-serif;
  /* flex: 1; */
  height: 20%;
  /* margin: 10px; */
  border-radius: 5%;
  width: 100%;
  /* height: 20%; */
  font-size: 5rem;
  text-align: center;

  /* border: 1px solid black; */

  @media (max-width: 1300px) {
    font-size: 3.5rem;
  }
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const DataItem = styled.div`
  /* border: 1px solid black; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Anton", sans-serif;
  font-family: "Francois One", sans-serif;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-family: "Mukta Mahee", sans-serif;
  height: 15%;
  margin: 15px 0;
  border-radius: 10px;
  width: 75%;
  box-shadow: 3px 10px 5px 0px rgba(0, 0, 0, 0.07);
  font-size: 1.4rem;
  background-image: linear-gradient(
    to top,
    rgba(207, 217, 223, 0.8),
    rgba(226, 235, 240, 0.8)
  );
  /* -webkit-text-stroke: 1px black; */
  /* backdrop-filter: blur(5px); */

  color: rgba(62, 74, 97, 0.7);

  /* font-size: 3rem; */

  &:nth-child(odd) {
    left: 10%;
  }
  &:nth-child(even) {
    left: -10%;
  }

  @media (max-width: 1300px) {
    font-size: 1.2rem;
    width: 80%;
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
    width: 100%;

    /* background-color: rgba(117, 114, 114, 0.2); */
  }
  @media (max-width: 300px) {
    font-size: 0.8rem;
    width: 100%;

    /* background-color: rgba(117, 114, 114, 0.2); */
  }

  img {
    height: 90%;
    /* width: 17%; */
    /* border: 1px solid black; */
    position: absolute;
    right: -8%;
    top: -55%;
  }
  &:nth-child(even) {
    img {
      height: 90%;
      /* width: 17%; */
      /* border: 1px solid black; */
      position: absolute;
      left: -5%;
      top: -55%;
    }
  }
`;

const CronaImg = styled.div`
  background-image: url("https://assets.website-files.com/5d8aac43c851d21f558d50dc/5e41897f5b9dece0fc54feb4_MTA_CORONAVIRUS-WEBINAR_MAIN-IMAGE_20200210_VF.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  /* background-size: 80%, 80%; */
  position: absolute;
  width: 35%;
  height: 35%;

  /* border: 1px solid black; */
  /* transform: translateY(-50%); */
  transform: ${({ onScreen }) =>
    onScreen ? "translateY(0%)" : "translateY(50%)"};
  opacity: 0.4;
  transition: 0.4s linear;
  bottom: 1%;
  right: 0;
  /* filter: blur(1px); */
  @media (max-width: 1300px) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 30%;
    opacity: 0.1;
    /* left: -50%; */
    /* background-size: 180%, 200%; */
  }
`;
