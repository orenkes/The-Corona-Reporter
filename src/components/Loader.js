import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderWraper>
      <CoronaImg src={"./CoronaImg.png"} />
      <EarthImg src={"./earthImg.jpg"} />
    </LoaderWraper>
  );
};

export default Loader;

const LoaderWraper = styled.div`
  height: 100%;
  width: 100%;
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  /* height: 10%; */

  align-self: center;
`;

const CoronaImg = styled.img`
  height: 100px;
  pointer-events: none;
  border-radius: 50%;
  /* box-shadow: 1px 101px 38px rgba(0, 0, 0, 0.15); */
  animation: App-logo-spin infinite alternate 2.5s linear;
  transition: 0.5s ease-in;

  @keyframes App-logo-spin {
    from {
      /* transform: translateY(100px); */
      transform: rotate(360deg);
      opacity: 1;
    }
    to {
      /* transform: translateY(100px) rotate(360); */
      opacity: 0;
    }
  }
`;
const EarthImg = styled.img`
  height: 107px;
  pointer-events: none;
  border-radius: 50%;
  /* box-shadow: 1px 101px 38px rgba(0, 0, 0, 0.15); */
  position: absolute;
  animation: fade infinite alternate 2.5s linear;
  transition: 0.5s ease-in;
  opacity: 0;

  @keyframes fade {
    from {
      /* transform: translateY(100px); */
      transform: rotate(360deg);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
