import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./style/GlobalStyle";

import { FaLinkedin } from "react-icons/fa";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import CurrentStatus from "./components/CurrentStatus";
import WorldSpread from "./components/WorldSpread";
import News from "./components/News";

function App() {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <AppWrapper>
      <MainWrapper>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
            <CurrentStatus setShowMenu={setShowMenu} />
            <WorldSpread />
            <News />
            <InfoButton>
              <a
                href="https://www.linkedin.com/in/oren-kesler-934245144/"
                target="_blank"
              >
                Created by Oren Kesler
                <LinkedinIcon />
              </a>
            </InfoButton>
          </>
        )}
      </MainWrapper>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  /* height: 100vh;
  width: 100vw; */
  height: 100%;
  width: 100%;
  display: felx;
  flex-wrap: wrap;
  background-color: whitesmoke;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  position: relative;
  scroll-snap-type: y mandatory;
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const SiteWrapper = styled.div`
  scroll-snap-type: y mandatory;
  /* position: relative; */
`;

const LinkedinIcon = styled(FaLinkedin)`
  margin-left: 1px;
`;

const InfoButton = styled.div`
  position: sticky;
  bottom: 1%;
  /* left: 1%; */
  width: 100%;
  text-align: center;
  z-index: 10;
  color: lightgray;

  a {
    color: lightgray;
    text-decoration: none;
    padding-right: 5px;

    :hover {
      color: gray;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;
