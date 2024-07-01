import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const VideoStory = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={50}

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <iframe height={250}  src="https://www.youtube.com/embed/ALlm5Wl8mfs" title="বাংলাদেশের সম্ভাবনাময় ৭টি আইটি ফার্ম | Future of IT Firms in Bangladesh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe height={250}   src="https://www.youtube.com/embed/ALlm5Wl8mfs" title="বাংলাদেশের সম্ভাবনাময় ৭টি আইটি ফার্ম | Future of IT Firms in Bangladesh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide>
                    <iframe height={250}   src="https://www.youtube.com/embed/ALlm5Wl8mfs" title="বাংলাদেশের সম্ভাবনাময় ৭টি আইটি ফার্ম | Future of IT Firms in Bangladesh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
               
            </Swiper>
        </>
    );
};

export default VideoStory;