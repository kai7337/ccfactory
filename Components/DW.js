import React from 'react';
import '../Styles/DW.css'; 
import pic1 from '../Assets/DW.jpg'

function DW() {
    const programs = {
        comedy: [
            { name: '폭소클럽 (KBS)' },
            { name: '쇼코미디 웃는날 좋은날 (KBS)' },
            { name: '개그스타 (KBS)' },
            { name: '기쁜우리 토요일 (SBS)' },
            { name: '웃으며 삽시다 (SBS)' },
            { name: '오 해피데이 (SBS)' },
            { name: '최양락의 코미디 쇼 (iTV)' },
            { name: '충청도 친구 (iTV)' },
            { name: '장르만 코미디 (JTBC)' }
        ],
        variety: [
            { name: '토요일 전원출발 (KBS)' },
            { name: '슈퍼 선데이 (KBS)' },
            { name: '슈퍼TV 일요일은 즐거워 (KBS)' },
            { name: '좋은 친구들 (SBS)' },
            { name: '일요일이 좋다 (SBS)' },
            { name: '퍼니퍼니 (SBS)' },
            { name: 'SNS 원정대 일단띄워 (SBS)' },
            { name: '명랑 히어로 (MBC)' },
            { name: '스타의 친구를 소개합니다 (MBC)' },
            { name: '불멸의 국가대표 (채널A)' },
            { name: '무한걸즈 (MBC 에브리원)' },
            { name: '아이돌 잔치 (TV조선)' }
        ],
        talkShow: [
            { name: '서세원쇼 (KBS)' },
            { name: '이휘재 유재석의 이유있는 밤 (KBS)' },
            { name: '이승연의 세이세이세이 (SBS)' },
            { name: '절친 노트 (SBS)' },
            { name: '김승현의 잠 못 이루는 밤 (MBC)' },
            { name: '유재석 김원희의 놀러와 (MBC)' },
            { name: '황금어장 무릎팍 도사 (MBC)' },
            { name: '라디오 스타 (MBC)' },
            { name: '비틀즈 코드 (M-net)' },
            { name: '행쇼 (JTBC)' },
            { name: '주병진의 방자전 (tvN)' },
            { name: '풍문으로 들었쇼 (채널A)' },
            { name: '악플의 밤 (JTBC)' }
        ]
    };

    const renderPrograms = (category, programsList) => {
        return (
            <div className="program-category">
                <h3>{category}</h3>
                <ul>
                    {programsList.map((program, index) => (
                        <li key={index} className="program-item">{program.name}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="profile-container">
            <img src={pic1} alt="Profile" className="profile-pic" />
            <h1>최대웅 작가</h1>
            <p>1994년 SBS 공채 3기 작가 수석</p>
            <p>서울예술대학 겸임교수, 중앙대학교 영화학과 강사</p>

            <section className="programs-section">
                {renderPrograms('코미디 프로그램', programs.comedy)}
                {renderPrograms('버라이어티 프로그램', programs.variety)}
                {renderPrograms('토크쇼 프로그램', programs.talkShow)}
            </section>
        </div>
    );
}

export default DW;