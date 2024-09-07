import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Pagination, Autoplay } from "swiper/modules";
import mentors from "../assets/img/mentors.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmployees } from "../redux/EmploySlice";

const StyledSwiperContainer = styled.div`
  padding: 0px 80px;
  background: #f8f4f1;

  @media (max-width: 1024px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0px 0 50px 0;
  }

  @media (max-width: 376px) {
    padding: 0 0 50px 0;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 409px;
  padding: 40px;

  .swiper-pagination-bullet {
    background-color: #007aff;
  }

  @media (max-width: 768px) {
    padding: 30px;
    height: 350px;
  }

  @media (max-width: 480px) {
    padding: 0px;
    height: 300px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: auto;
`;
const StyledMentors = styled.h1`
  text-align: center;
  padding: 100px 0 58px 0;
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  @media (max-width: 480px) {
    padding: 0px 0 36px 0;
    font-size: 25px;
    font-weight: 700;
    line-height: 29.25px;
  }
`;
const SlideH1 = styled.h1`
  position: absolute;
  top: 247px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 230px;
    font-size: 16.46px;
    font-weight: 600;
    line-height: 19.26px;
  }
`;
const SlideP = styled.p`
  position: absolute;
  top: 280px;
  left: 27px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;
  color: #f8f4f1;
  @media (max-width: 470px) {
    top: 260px;
    font-size: 16.46px;
    font-weight: 500;
    line-height: 19.26px;
  }
`;
export default function OurMentors() {
  const ourMentors = useSelector((state) => state.employes.gettingAllEmployees);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, [dispatch]);
  return (
    <StyledSwiperContainer id="About Us">
      <StyledMentors>
        {language === "KG" ? "Биздин насаатчыларыбыз" : "Наши менторы"}
      </StyledMentors>
      <StyledSwiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        initialSlide={2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {ourMentors?.map((element) => (
          <StyledSwiperSlide key={element?.id}>
            <SlideImage src={mentors} alt="mentors" />
            <SlideH1>{element?.fullName}</SlideH1>
            <SlideP>{element?.direction}</SlideP>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSwiperContainer>
  );
}
