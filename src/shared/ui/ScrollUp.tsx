import { useRef } from "react";
import autoScroll from "../hooks/autoScroll";

export default function ScrollUp() {
    const ref = useRef<HTMLDivElement>(null);
    function scrollFunction() {
        if (window.scrollY > 380) {
            if(ref.current) ref.current.className = "skroll-up_arrow"
        } else {
            if(ref.current) ref.current.className = "skroll-up_arrow hidden"
        }
    }
    window.onscroll = () => {
        scrollFunction();
    };

    return(
        <>
            <div 
                className="skroll-up_arrow hidden" 
                onClick={() => autoScroll()}
                ref={ref}
            ></div>
        </>
    )
}