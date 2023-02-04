// swiper imports 
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

// end of swiper 
import 'swiper/css';
import Image from './Assets/canvas.jpeg';
import Image2 from './Assets/canvas1.png';
import Image3 from './Assets/canvas2.jpeg';
import Image4 from './Assets/canvas3.jpeg';
import Image5 from './Assets/canvas4.jpeg'; 
import './WishList.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function WishList() {

  return (
    <>
		<div className="generalSection">
			<div className="grid-template" id="firstHalf">
				<div className="context">
					<h1>
						WISHLIST!
					</h1>
				</div>
				<div className="contextContent">
					<p>
						These are the products you have in your wishlist.
					</p>
				</div>
				<div className="redirectButton">
					<button>
						SEE MORE
					</button>
				</div>
			</div>
		
			<div className="grid-template" id="column-temp-2">
				
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				// centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
				<img src={ Image5} alt="image5"/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={ Image5} alt="image5"/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={ Image4} alt="image4"/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={ Image3} alt="image3"/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={ Image2} alt="image2"/>
				</SwiperSlide>
				<SwiperSlide>
				<img src={Image} alt="image1" />
				</SwiperSlide>
			</Swiper>
			<div className="directLeft">
				<span>
				<svg className="checkLeft" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12A10 10 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10m-2 0a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8m-6-5l-5 5l5 5V7Z"/></svg>
				</span>
			</div>
			<div className="directRight">
				<span>
				<svg className="checkRight" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12m2 0a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8m6 5l5-5l-5-5v10Z"/></svg>
				</span>
			</div>
			</div>
		</div>


    </>
  );
}


export default WishList;
