import { useState, useRef, useEffect } from "react";
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three";




export default function Background({  children }) {
    const [vantaEffect, setVantaEffect] = useState(0);

    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    THREE,
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    points: 4.00,
                    backgroundColor: '#D2691E',
                    spacing: 18.00,
                    showDots: false
                    
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={vantaRef}>{children}</div>
    )
}
