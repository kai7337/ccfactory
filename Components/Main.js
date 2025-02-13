import React from 'react';
import { Router, Route, Routes } from 'react-router-dom'

import Home from '../Components/Home';
import People from '../Components/People';
import NavBar from '../Components/NavBar';
import About from "../Components/About";
import DW from '../Components/DW';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // 애니메이션 지속 시간
  once: false, // true: 한 번만 실행 / false: 스크롤할 때마다 실행
  mirror: true, // true: 스크롤을 올려도 애니메이션 실행
  anchorPlacement: "top-bottom", // 요소가 화면 하단에서 등장할 때 실행
});

const Main = () => {
  return (
    <div>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/People" element={<People/>}/>
          <Route path="/DW" element={<DW/>} />
        </Routes>
    </div>
  );
}

export default Main;