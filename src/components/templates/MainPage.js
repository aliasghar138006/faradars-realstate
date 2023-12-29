"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "@/components/templates/Main.module.css";
import "swiper/css";

function MainPage() {
  return (
    <div className={styles.container}>
      <h1>خرید و فروش و معامله ملک</h1>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/homebyme-homepage-gallery-2-1.png"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/Home-Alone-House-Lincoln-Ave-Winnetka-Illinois.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/2bb70cc2f77993b57b37661c6e54f05b.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/homebyme-homepage-gallery-2-1.png"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/2bb70cc2f77993b57b37661c6e54f05b.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="image"
              style={{ borderRadius: "30px" }}
              src="/pictures/2bb70cc2f77993b57b37661c6e54f05b.jpg"
              width={300}
              height={200}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MainPage;
