import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../Styles/People.css"; // CSS를 적용
import pic1 from "../Assets/temp_profile.webp";
import picDW from "../Assets/DW.jpg";
import pic2 from "../Assets/temp_profile.webp";
import pic3 from "../Assets/temp_profile.webp";

function People() {
  return (
    <div className="people-container">
      {/* CSS 기반 배경 파도 애니메이션 */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
    </div>

        <Swiper
            className="swiper"
            grabCursor={true}
            initialSlide={4}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={10}
            speed={1000}
            freeMode={false}
            slideToClickedSlide={true}
            preventClicks={false}
            mousewheel={{
                thresholdDelta: 30,
            }}
            pagination={{
                type: 'bullets',
                clickable: true,
            }}
            modules={[Pagination, Mousewheel]}

        >
            <SwiperSlide><div><img src={picDW}/></div><Link to="/DW"><p></p></Link></SwiperSlide>
            <SwiperSlide><div><img src={pic2}/></div><Link to="/about"><p></p></Link></SwiperSlide>
            <SwiperSlide><div><img src={pic3}/></div><Link to="/about"><p></p></Link></SwiperSlide>
            <SwiperSlide><div><img src={pic1}/></div><Link to="/about"><p></p></Link></SwiperSlide>
            <SwiperSlide><div><img src={pic2}/></div><Link to="/about"><p></p></Link></SwiperSlide>
        </Swiper>
        </div>
    );
};

export default People;