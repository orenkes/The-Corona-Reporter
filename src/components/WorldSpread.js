import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const WorldSpread = () => {
  const ref = useRef();
  const [onScreen, setOnScreen] = useState(false);
  const [currentCountriesData, setCurrentCountriesData] = useState([]);
  const [countriesNames, setCountriesNames] = useState([]);
  const [countryToDisplay, setCountryToDisplay] = useState("");

  const getData = async () => {
    try {
      const apiData = await fetch(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      const jsonData = await apiData.json();
      const dataArray = [jsonData];
      setCurrentCountriesData([jsonData]);
      const countriesName = dataArray[0].map(item => item.country);
      countriesName.sort();
      const countriesInputItems = countriesName.map(item => (
        <CountryNameItem value={item}>{item}</CountryNameItem>
      ));
      //   console.log(countriesName);
      setCountriesNames(countriesInputItems);
    } catch (err) {}
  };

  const selectCountryToDisplay = e => {
    if (e.target.value !== "Select Country") {
      const country = currentCountriesData[0].filter(
        item => item.country === e.target.value
      );
      // console.log(country);
      setCountryToDisplay(country);
    }
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
    // console.log(1);
  }, []);

  return (
    <WorldSpreadWrapper id="worldSpread" ref={ref} onScreen={onScreen}>
      <CronaImg onScreen={onScreen} />
      <AllCountrysDataContainer>
        <DataHeader>Current Status By Countries</DataHeader>
        <AllCountrysInputWrapeer>
          <CountryNameInput onChange={e => selectCountryToDisplay(e)}>
            <option default>Select Country</option>
            {countriesNames}
          </CountryNameInput>
        </AllCountrysInputWrapeer>
        <CountrysData>
          {countryToDisplay !== "" ? (
            <>
              <CountryName>{countryToDisplay[0].country}</CountryName>
              <DataList>
                <DataItem>
                  <span>Total Cases:</span>
                  {countryToDisplay[0].cases}
                </DataItem>
                <DataItem>
                  <span>Cases Today:</span>
                  {countryToDisplay[0].todayCases}
                </DataItem>
                <DataItem>
                  <span>Deaths:</span>
                  {countryToDisplay[0].deaths}
                </DataItem>
                <DataItem>
                  <span>Deaths Today:</span>
                  {countryToDisplay[0].todayDeaths}
                </DataItem>
                <DataItem>
                  <span>Recovered:</span>
                  {countryToDisplay[0].recovered}
                </DataItem>
                <DataItem>
                  <span>Still Active:</span>
                  {countryToDisplay[0].active}
                </DataItem>
              </DataList>
            </>
          ) : null}
        </CountrysData>
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
  font-size: 1.4rem;
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
const DataHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 5px;
  font-family: "Anton", sans-serif;
  border-radius: 5%;
  /* width: 60%; */
  font-size: 5rem;
  color: #3b4a6b;
  text-align: center;

  /* border: 1px solid black; */

  @media (max-width: 1300px) {
    font-size: 3.5rem;
    width: 100%;
  }
  @media (max-width: 900px) {
    font-size: 2.5rem;
    width: 100%;
  }
`;
const AllCountrysInputWrapeer = styled.div`
  /* border: 1px solid black; */
  height: 10%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 1;
  /* border: 1px solid red; */
  @media (max-width: 1300px) {
    width: 80%;
  }
`;
const CountryNameInput = styled.select`
  width: 40%;
  font-size: 1.2rem;
  background-color: white;
  outline: none;
  border-radius: 5px;
  background-color: whitesmoke;
  border: 1px solid #aaa;
  @media (max-width: 1300px) {
    font-size: 1rem;
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`;
const CountryNameItem = styled.option`
  font-size: 1.2rem;
`;

const CountrysData = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
  /* border: 1px solid green; */
  @media (max-width: 900px) {
    width: 95%;
  }
`;

const CountryName = styled.div`
  width: 80%;
  height: 12%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  font-family: "Anton", sans-serif;
  color: black;
  background-color: rgba(69, 146, 175, 0.3);
  padding: 5px;
  border-radius: 10px;
  letter-spacing: 1px;
  -webkit-text-stroke: 1px black;
  @media (max-width: 1600px) {
    font-size: 2.5rem;
  }
  @media (max-width: 900px) {
    font-size: 1.8rem;
    padding: 2px;
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
    padding: 2px;
    width: 100%;
  }
`;

const DataList = styled.div`
  /* border: 1px solid yellow; */
  height: 80%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;
const DataItem = styled.div`
  /* border: 1px solid black; */
  width: 40%;
  height: 30%;
  margin: 5px;
  display: flex;
  background-color: rgba(201, 201, 201, 0.4);
  /* -webkit-text-stroke: 1px black; */
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  flex-wrap: wrap;
  font-size: 2.4rem;
  border-radius: 10px;
  font-family: "Mukta Mahee", sans-serif;
  /* font-weight: bold; */
  /* font-family: "Staatliches", cursive; */
  /* font-family: "Ramabhadra", sans-serif; */
  font-weight: bold;

  span {
    width: 100%;
    font-weight: normal;
    /* padding-top: 20px; */
    text-align: center;
    /* border: 1px solid black; */
  }

  &:nth-child(1),
  &:nth-child(2) {
    /* -webkit-text-stroke: 1px black; */

    color: rgba(69, 146, 175, 0.8);
    color: rgba(67, 78, 82, 0.8);
  }
  &:nth-child(5),
  &:nth-child(6) {
    color: rgba(43, 179, 93, 0.8);
    color: rgba(91, 140, 133, 0.9);
  }
  &:nth-child(3),
  &:nth-child(4) {
    color: rgba(245, 77, 69, 0.8);
    color: rgba(132, 20, 45, 0.9);
  }

  @media (max-width: 1600px) {
    margin: 3px;
    font-size: 1.8rem;
  }

  @media (max-width: 900px) {
    font-size: 1.3rem;
    font-weight: bold;
    width: 47%;
    /* padding: 5px; */
    background-color: rgba(201, 201, 201, 0.5);
    font-weight: bold;
  }
  @media (max-width: 400px) {
    /* font-size: 1.4rem; */
  }
`;

const CronaImg = styled.div`

  background-image: url("./earthImg.jpg");
  background-size: cover;
  background-size: 135%, 135%;
  background-repeat: no-repeat;
  background-position: center;
  /* border: 1px solid black; */
  width: 45%;
  position: absolute;
  height: 80%;
  left: -20%;
  top: 55%;
  transform: translateY(-55%);
  /* opacity: 0.5; */
  animation: bounce infinite alternate 2s linear;
  transition: 0.5s linear;
  opacity: 0.2;
  /* opacity: ${({ onScreen }) => (onScreen ? "0.5" : "0")}; */

  @keyframes bounce {
    from {
      transform: translateY(-50%);
    }
    to {
      transform: translateY(-55%);
    }
  }

  @media (max-width: 900px) {
    width: 120%;
    height: 100%;
    left: -70%;
  opacity: 0.1;
    /* background-size: 180%, 200%; */
  }
`;
