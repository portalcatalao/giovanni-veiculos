import { useRef, useEffect, useState } from "react";

export function Slide({ image, alt }) {
    const ref = useRef(null);
    const [height, setHeight] = useState<string | number>('auto');
    useEffect(() => {
        const width = ref.current.offsetWidth;
        setHeight(width * 0.6);
    }, []);

    return (
        <div className="w-full max-w-7xl h-full max-h-[800px] flex justify-center overflow-hidden" ref={ref}>
            <img src={'https://api.portalautos.com.br/' + image} alt={alt} className="object-contain w-full h-full" />
        </div>
    )
}
