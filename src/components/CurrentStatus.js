import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const CurrentStatus = ({ setShowMenu }) => {
  const ref = useRef();
  const [onScreen, setOnScreen] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  const getData = async () => {
    const apiData = await fetch("https://coronavirus-19-api.herokuapp.com/all");
    const jsonData = await apiData.json();
    setCurrentData(jsonData);
  };

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

  useEffect(() => {
    getData();
    console.log(1);
  }, []);

  return (
    <CurrentStatusWrapper
      id="current"
      ref={ref}
      onScreen={onScreen}
      onClick={() => setShowMenu(false)}
    >
      <CronaImg onScreen={onScreen} />
      {currentData.deaths ? (
        <DataWrapper>
          <DataHeader>Current Status </DataHeader>
          <DataItem onScreen={onScreen}>Cases : {currentData.cases}</DataItem>
          <DataItem onScreen={onScreen}>
            Recovered : {currentData.recovered}{" "}
          </DataItem>
          <DataItem onScreen={onScreen}>
            Deaths : {currentData.deaths}{" "}
          </DataItem>
        </DataWrapper>
      ) : (
        <h1>Loading...</h1>
      )}
    </CurrentStatusWrapper>
  );
};

export default CurrentStatus;

const CurrentStatusWrapper = styled.div`
  /* scroll-snap-align: start;
  scroll-snap-stop: normal; */
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  /* border-radius: 0 0 50% 0; */
  font-size: 1.4rem;
  overflow: hidden;
  position: relative;
  transition: 0.2s ease-in;
  position: relative;
  opacity: ${({ onScreen }) => (onScreen ? "1" : "0")};
  transition: 0.5s linear;
`;
const DataWrapper = styled.div`
  height: 90%;
  width: 60%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  /* letter-spacing: 1px; */

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const DataHeader = styled.div`
  display: flex;
  align-items: flex-start;
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
  color: #3b4a6b;
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
  font-family: "Francois One", sans-serif;
  font-family: "Anton", sans-serif;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-family: "Mukta Mahee", sans-serif;
  font-weight: bold;

  height: 15%;
  margin: 15px;
  border-radius: 10px;
  width: 45%;
  opacity: 0;
  /* box-shadow: 3px 10px 5px 0px rgba(0, 0, 0, 0.07); */
  /* background-color: rgba(201, 201, 201, 0.1);
  background-image: linear-gradient(
    to top,
    rgba(207, 217, 223, 0.7),
    rgba(226, 235, 240, 0.7)
  ); */
  /* -webkit-text-stroke: 1px black; */
  /* backdrop-filter: blur(5px); */

  color: rgba(67, 78, 82, 0.5);
  /* color: #434e52; */

  font-size: 3rem;
  animation: ${({ onScreen }) =>
    onScreen ? "bigger 1.5s ease-in forwards" : null};
  &:nth-child(3) {
    color: rgba(91, 140, 133, 0.7);
    /* color: #3b6978; */
    animation: ${({ onScreen }) =>
      onScreen ? "bigger 1.5s 0.2s ease-in forwards" : null};
  }
  &:nth-child(4) {
    color: rgba(132, 20, 45, 0.5);
    animation: ${({ onScreen }) =>
      onScreen ? "bigger 1.5s 0.4s ease-in forwards" : null};
  }

  @keyframes bigger {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1300px) {
    font-size: 2.2rem;
    width: 80%;
  }

  @media (max-width: 900px) {
    font-size: 1.9rem;
    width: 100%;
    justify-content: flex-start;
    /* background-color: rgba(117, 114, 114, 0.2); */
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const CronaImg = styled.div`
  background-image: url("./CoronaImg.png");
  background-size: cover;

  width: 30%;
  position: absolute;
  height: 80%;
  right: -7%;
  top: 50%;
  opacity: 0.5;

  transform: translateY(-50%);
  animation: bounce infinite alternate 2s linear;
  transition: 0.5s linear;
  z-index: 1;
  /* opacity: ${({ onScreen }) => (onScreen ? "0.5" : "0")}; */
  /* transform: ${({ onScreen }) => (onScreen ? "translateY(-50%)" : "0")}; */

  @keyframes bounce {
    from{
      transform: translateY(-50%);
    }
    to{
      transform: translateY(-55%);
    }
  }

  @media (max-width: 900px) {
    width: 50%;
    right: -18%;
  }
`;
