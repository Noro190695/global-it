import React from 'react';
import style from './ProgressBar.module.css'

export default function ProgressBar (props){
    const classNames = require('classnames')
    return(
        <div className={style.progressBarStyle}>
            <div className={style.progressBar}>
                <svg
                    className={style.svg}
                    viewBox="0 0 250 250"
                    preserveAspectRatio="xMinYMin meet"
                >
                    <circle className={style.circle1}></circle>
                    <circle
                        className={style.circle2}
                        style={{strokeDashoffset: `calc(750 - (750 * ${props.procent}) / 100)`}}
                    ></circle>
                </svg>
                <h2 className={style.number}>{props.number}{props.year}</h2>
            </div>
            <div className={style.declaration}>
                {props.declaration}
            </div>
        </div>


    )
}