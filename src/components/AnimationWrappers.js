import React from 'react'
import { Spring } from "react-spring/renderprops-universal";

export const FadeIn = ({ delay, duration, children, style, className}) => {
    return (
        <div style={style} className={className}>
            <Spring
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                config={{ delay: delay, duration: duration}}>
                { springProps => (
                    <div style={springProps}>
                        { children }
                    </div>
                )}
            </Spring>
        </div>
    )
};