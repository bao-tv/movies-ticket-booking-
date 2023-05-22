import React, { useState, useRef } from "react";
import { Animated } from "react-animated-css";
import ButtonLogin from "../Login/ButtonLogin";
import style from './Hearder.module.scss';
import {FaBars, FaTimes} from "react-icons/fa";

function Header() {
  const [isVisibleRapChieu, setIsVisibleRapChieu] = useState(false);
  const [isVisibleLichChieu, setIsVisibleLichChieu] = useState(false);
  const [isVisibleBlockChieu, setIsVisibleBlockChieu] = useState(false);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle(style.responsive_nav);
  }

  return (
    <header>
      <div className="sticky-top bg-white bg-opacity-75 py-3">
      <div className="container mx-auto d-flex justify-content-between align-items-center">
        <div className={style.logo}>
         <i className="bi bi-ticket-perforated fs-2 me-3"></i>
         <span className="fs-3">BHN</span>
        </div>
        <nav className="d-flex align-items-center ms-3 text-text-dark-color fw-semibold fs-6" ref={navRef}>
          <div
            className="mx-2 py-6 position-relative"
            onMouseLeave={() => {
              if (!window.matchMedia("(max-width: 1024px)").matches) {
                setIsVisibleRapChieu(false);
              }
            }} 
            onMouseEnter={() => {
              if (!window.matchMedia("(max-width: 1024px)").matches) {
                setIsVisibleRapChieu(true);
              }
            }}
          >
            <span className={style.textHeaderHover} onClick={() => setIsVisibleRapChieu(!isVisibleRapChieu)}>Rạp chiếu
              <i className="bi bi-chevron-down ms-2 fs-7"></i>
            </span>
            <Animated
              className="position-absolute z-10"
              animationIn="fadeInUp"
              animationOut="fadeOutUp"
              animationInDuration={300}
              animationOutDuration={200}
              isVisible={isVisibleRapChieu}
            >
              <div className={style.headeRapChieu}>
                <div className="p-2">
                  <ul className="list-unstyled mb-0">
                    <li className={`${style.headerRapChieuItem} + p-2`}>CGV</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Lotte Cinema</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>BHD Star</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Galaxy Cinema</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Beta Cinema</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Cinestar</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>DCINE</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Mega GS</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Cinemax</li>
                  </ul>
                </div>
              </div>
            </Animated>
          </div>

          <div
            className="mx-2 py-6 position-relative"
            onMouseLeave={() => {
              if (!window.matchMedia("(max-width: 1024px)").matches) {
                setIsVisibleLichChieu(false);
              }
            }}
            onMouseEnter={() => {
              if (!window.matchMedia("(max-width: 1024px)").matches) {
                setIsVisibleLichChieu(true);
              }
            }}
          ><span className={style.textHeaderHover} onClick={() => setIsVisibleLichChieu(!isVisibleLichChieu)}>Lịch chiếu<i className="bi bi-chevron-down ms-2 fs-7"></i></span>
            <Animated
              className="position-absolute z-10"
              animationIn="fadeInUp"
              animationOut="fadeOutUp"
              animationInDuration={300}
              animationOutDuration={200}
              isVisible={isVisibleLichChieu}
            >
              <div className={style.headeRapChieu}>
                <div className=" p-2">
                  <ul className="list-unstyled mb-0">
                    <li className={`${style.headerRapChieuItem} + p-2`}>
                      Phim đang chiếu
                    </li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>
                      Phim sắp chiếu
                    </li>
                  </ul>
                </div>
              </div>
            </Animated>
          </div>

          <div className={`mx-3 py-6 py-6 ${style.textHeaderHover}`}>Phim chiếu</div>
          <div className={`mx-3 py-6 py-6 ${style.textHeaderHover}`}> Review phim</div>
          <div
            className="mx-3 py-6 position-relative"
            onMouseLeave={() => {
              if (!window.matchMedia("(max-width: 1024px)").matches) {
                setIsVisibleBlockChieu(false);
              }
            }}
            onMouseEnter={() => {
              if (!window.matchMedia("(max-width: 1024px)").matches) {
                setIsVisibleBlockChieu(true);
              }
            }}
          >
          <span className={style.textHeaderHover} onClick={() => setIsVisibleBlockChieu(!isVisibleBlockChieu)}>Block phim<i className="bi bi-chevron-down ms-2 fs-7"></i></span>
          <Animated
              className="position-absolute z-10"
              animationIn="fadeInUp"
              animationOut="fadeOutUp"
              animationInDuration={300}
              animationOutDuration={200}
              isVisible={isVisibleBlockChieu}
            >
              <div className={style.headeRapChieu}>
                <div className=" p-2">
                  <ul className="list-unstyled mb-0">
                    <li className={`${style.headerRapChieuItem} + p-2`}>
                      Phim chiếu rạp
                    </li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Top phim</li>
                    <li className={`${style.headerRapChieuItem} + p-2`}>Phim netflix</li>
                  </ul>
                </div>
              </div>
            </Animated>
          </div>

          <div className={`mx-3 py-6 ${style.textHeaderHover}`}>
            Khuyến mãi
          </div>
          <button className={`${style.navBar} ${style.navClose}`} onClick={showNavbar}>
              <FaTimes/>
           </button>
        </nav>

       <div className={style.right}>
        <ButtonLogin/>
        <button className={`${style.navBar} mx-2`} onClick={showNavbar}>
          <FaBars/>
        </button>
       </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
