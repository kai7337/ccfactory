import React, { useEffect } from "react";
import "../Styles/About.css"; // CSS 연결
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 라이브러리

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-heading" data-aos="fade-down">ABOUT US</h1>

      <p className="about-text" data-aos="fade-up">
        <strong>CCF</strong>는 한국의 예능 포맷(IP) 개발 및 글로벌 수출을 전문으로 진행하는 기업이며,
        한국 예능 프로그램들의 지식재산권(IP)을 보호하고, 세계적인 방송 포맷으로 발전시키는 것을 목표로 합니다.
      </p>

      <div className="about-section" data-aos="fade-up">
        <h2 className="about-subheading">📌 사업 개요</h2>
        <p>
          - 한국 예능 포맷의 글로벌 확산 및 보호 <br />
          - IP 기반 콘텐츠 비즈니스 모델 구축 <br />
          - 포맷형 예능을 개발하여 세계적인 프로그램으로 발전 <br />
        </p>
      </div>

      <div className="about-section" data-aos="fade-up">
        <h2 className="about-subheading">🌍 글로벌 시장 전략</h2>
        <p>
          - 한국 포맷의 지식재산권 보호 (불법 표절 대응) <br />
          - 포맷형 예능 콘텐츠 개발 (리얼리티 예능에서 포맷형으로 전환) <br />
          - 해외 포맷 시장 경쟁력 확보 (Endemol, Fremantle과 같은 글로벌 기업과 경쟁) <br />
        </p>
      </div>

      <div className="about-section" data-aos="fade-up">
        <h2 className="about-subheading">💡 성공적인 포맷 사례</h2>
        <p>
          ✅ <strong>MBC "복면가왕"</strong> → 미국 FOX "The Masked Singer" (50개국 이상 판매) <br />
          ✅ <strong>SBS "런닝맨"</strong> → 중국 및 동남아에서 현지 포맷 제작 <br />
        </p>
      </div>

      <div className="about-section" data-aos="fade-in">
        <h2 className="about-subheading">🚀 우리의 비전</h2>
        <p>
          우리는 포맷 IP 보호, 글로벌 확장, 부가 비즈니스 모델 개발을 통해 한국 예능의 미래를 이끌어나갑니다.
        </p>
      </div>
    </div>
  );
};

export default About;
