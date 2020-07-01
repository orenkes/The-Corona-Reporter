import React, { useRef } from "react";
import styled from "styled-components";

import { IoMdClose } from "react-icons/io";

const Navbar = ({ showMenu, setShowMenu }) => {
  const navbar = useRef();
  const menuNavbar = useRef();

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = "0";
    } else {
      navbar.current.style.top = "-50px";
      setShowMenu(false);
      //   menuNavbar.current.style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  };
  // console.log(("showmenu", showMenu));

  return (
    <NavbarWrapper ref={navbar}>
      <SiteName>
        {showMenu ? (
          <CloseButton
            onClick={() => setShowMenu(!showMenu)}
            showMenu={showMenu}
          />
        ) : (
          <Icon onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
        )}
        The Corona Reporter
      </SiteName>
      <ButtonsWrapper ref={menuNavbar} showMenu={showMenu}>
        <NavbarButton>
          <a onClick={() => setShowMenu(false)} href="#current">
            Current Status
          </a>
        </NavbarButton>
        <NavbarButton>
          <a onClick={() => setShowMenu(false)} href="#worldSpread">
            World Spread
          </a>
        </NavbarButton>
        <NavbarButton>
          <a onClick={() => setShowMenu(false)} href="#news">
            How To Avoid
          </a>
        </NavbarButton>
      </ButtonsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  width: 100%;
  height: 6vh;
  position: sticky;
  top: 0;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: black;
  font-family: "Roboto", sans-serif;
  /* border: 1px solid black; */
  /* background-image: linear-gradient(
    45deg,
    rgba(147, 165, 207, 0.1) 0%,
    rgba(228, 239, 2330.1) 100%
  ); */
  user-select: none;
  font-weight: bold;
  /* background-image: linear-gradient(to right, #09203f 0%, #537895 100%); */
  /* background-color: #161716; */
  transition: 0.1s ease-in;
  :hover {
    /* opacity: 0.8; */
  }

  @media (max-width: 900px) {
    /* background-color: rgba(168, 168, 168, 0.6);
    background-color: rgba(62, 74, 97, 0.7); */
    font-size: 0.6rem;
  }
`;

const SiteName = styled.div`
  flex: 1;
  /* opacity: 0.5; */
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-left: 12px;
  color: #086972;
  /* -webkit-text-stroke: 1px black; */
  color: #4b89ac;
  font-weight: bold;
  font-family: "Anton", sans-serif;
  font-family: "Bitter", serif;
  letter-spacing: 1px;
  /* z-index: 2; */
  /* font-size: 1.1rem; */
  font-size: 1.2rem;
  /* padding: 5px; */
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  /* border: 1px solid red; */
`;

const Icon = styled.div`
  background-image: url("./mask.png");
  background-position: center;
  /* background-size: 45%, 45%; */
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.8;
  margin-right: 5px;
  width: 5%;
  /* height: 60%; */
  height: 100%;
  opacity: ${({ showMenu }) => (showMenu ? 0 : 1)};
  transition: 0.2s ease-in;
  max-height: 30px;
  /* border: 1px solid black; */
  @media (max-width: 900px) {
    height: 90%;
    width: 9%;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const CloseButton = styled(IoMdClose)`
  margin-right: 5px;
  width: 5%;
  height: 100%;
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  transition: 0.2s ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    height: 90%;
    width: 9%;
  }
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  /* display: ${({ showMenu }) => (showMenu ? "flex" : "none")}; */
  left: ${({ showMenu }) => (showMenu ? "2%" : "-20%")};
  border-radius: 5px;
  bottom: -25vh;
  font-family: 'Roboto', sans-serif;
  transition: 0.4s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 1px solid #4b89ac;
  height: 25vh;
  flex-direction: column;
  width:13vw;
  background-color: rgba(62, 74, 97, 0.9);
  @media (max-width: 900px) {
    width:25vw;
  }
`;

const NavbarButton = styled.div`
  height: 99%;
  width: 100%;
  /* border-bottom: 1px solid black; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 5px; */
  :hover {
    background-color: rgba(62, 74, 97, 0.4);
  }
  a {
    color: black;
    transition: 0.1s ease-in;
    text-decoration: none;
    color: whitesmoke;
    color: #d9dad7;
    @media (max-width: 900px) {
    }
  }
`;
