import { useState, useEffect } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiX } from "react-icons/fi";
import { ButtonIcon } from "../buttons/button-icon";

export function GalleryView({ close, active, show, images }) {
    const [state, setState] = useState('start');

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                close();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-black bg-opacity-70`} style={{ visibility: !show ? 'hidden' : 'visible' }}>
            <div className={'w-full max-w-7xl mx-auto py-8 overflow-hidden h-full'}>
                <div className={`absolute top-4 right-4 z-[9999]`} onClick={close}>
                    <ButtonIcon Icon={FiX} />
                </div>
                <Swiper
                    id={'swiper'}
                    className="w-full h-full"
                    pagination={{
                        type: "fraction",
                    }}
                    loop
                    keyboard
                    slidesPerView={'auto'}
                    modules={[Keyboard, Pagination, Navigation]}
                    onSlideChange={(swiper) => {
                        { swiper.isBeginning && setState('start') }
                        { swiper.isEnd && setState('end') }
                        { !swiper.isBeginning && !swiper.isEnd && setState('progress') }
                    }}
                    navigation={true}
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index} id={'swiper-slide'} style={{ width: '100% !important' }}>
                            <div className="w-full h-full flex justify-center items-center">
                                <img src={'https://api.portalautos.com.br/' + item} alt={item} className="object-contain h-full" />\
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}