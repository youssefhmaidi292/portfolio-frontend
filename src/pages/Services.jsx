import '../styles/services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';   
import 'swiper/css/pagination';     


import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

function Services() {
  return (
    <div className="services">
        <h1 className="section-title">My <span>services</span></h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}       
        pagination={{ clickable: true }}  
        modules={[EffectCoverflow, Navigation, Pagination]}  
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="ser1">
            <i className="fa-solid fa-code"></i> 
            <h1>Web Development</h1>
            <p>Fast, responsive, scalable websites using React, Node.js, and MongoDB.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ser1">
            <i className="fa-solid fa-lightbulb"></i>
            <h1>Digital Marketing</h1>
            <p>SEO, ads, social media campaigns, and content management.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ser1">
            <i className="fa-solid fa-palette"></i>
            <h1>Graphic Design</h1>
            <p>Creative logos, brand kits, and social media visuals.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="ser1">
            <i className="fa-solid fa-money-bill-trend-up"></i>
            <h1>Business Analysis</h1>
            <p>Branding, marketing strategies, and data-driven improvements.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide key="webdesign">
  <div className="ser1">
    <i className="fa-solid fa-laptop-code"></i>
    <h1>Web Design</h1>
    <p>Modern and user-friendly website layouts with a focus on UX and branding.</p>
  </div>
</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Services;
