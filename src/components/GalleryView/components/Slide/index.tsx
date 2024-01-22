import { useRef, useEffect, useState } from "react";
import { Container, Image } from "./styles";
//import { getImageUrl } from "../../../../helpers/image";

export function Slide({ image, alt }) {
    const ref = useRef(null);
    const [height, setHeight] = useState<string | number>('auto');
    useEffect(() => {
        const width = ref.current.offsetWidth;
        setHeight(width * 0.6);
    }, []);

    return (
        <Container ref={ref}>
            <img src={'https://portalautos.com.br/' + image} alt={alt} className="object-cover w-full h-full" />
        </Container>
    )
}