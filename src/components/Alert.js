import React, { useState, useEffect } from 'react';

export default function Alert(props) {
    const [animate, setAnimate] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    
    const capital = (word) => {
        if(word === "danger"){
            word = "Error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    useEffect(() => {
        if (props.alert) {
            setAnimate(true);
            setIsExploding(false);
            // Start explosion animation right before it disappears
            const explosionTimer = setTimeout(() => {
                setIsExploding(true);
            }, 1700); // Start explosion at 1.7s (before 2s hide)
            
            return () => clearTimeout(explosionTimer);
        } else {
            setAnimate(false);
            setIsExploding(false);
        }
    }, [props.alert]);

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{
              bottom: "20px",
              position: 'fixed',
              left: "20px",
              zIndex: 9999,
              padding: "10px 20px",
              minWidth: "200px",
              transform: isExploding 
                ? "scale(1.3) rotate(3deg)" 
                : animate 
                ? "translateY(0) scale(1)" 
                : "translateY(50px) scale(0.8)",
              opacity: isExploding ? 0 : (animate ? 1 : 0),
              transition: isExploding 
                ? "all 0.3s ease-out" 
                : "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              filter: isExploding ? "blur(2px)" : "none"
            }} role="alert">
            <strong>{capital(props.alert.type)}</strong>:{props.alert.msg}
        </div>
    )
}
