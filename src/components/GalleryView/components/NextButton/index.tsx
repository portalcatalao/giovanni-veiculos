import { FiChevronRight } from "react-icons/fi";
import { useSwiper } from "swiper/react";
import { Button } from "./styles";

interface Props {
    disabled: boolean;
}

export function NextButton({disabled}: Props) {
    const swiper = useSwiper();
    
    return (
        <Button disabled={disabled} onClick={() => swiper.slideNext()}>
            <FiChevronRight />
        </Button>
    );
}