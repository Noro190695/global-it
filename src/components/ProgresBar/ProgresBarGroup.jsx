import React from 'react';
import  './ProgresBarGroup.scss'
import ProgressBar from "./ProgressBar";

export default function ProgresBarGroup(props){
    return(
        <div className="progres_bar_group">
            <div className="progres_bar_group_name">
                <h2>Մեր մասին</h2>
            </div>
            <div className="progres_bar_group_content">
                <div className="group">
                    <ProgressBar
                        procent={50}
                        number={200}
                        declaration="200 հաջող մեկնարկված պռոեկտներ"
                        dark={props.dark}
                    />
                </div>
                <div className="group">
                    <ProgressBar
                        procent={100}
                        number={1500}
                        year="թ"
                        declaration="Մենք շուկայում ենք 2017թ -ից"
                        dark={props.dark}
                    />
                </div>
                <div className="group">
                    <ProgressBar
                        procent={30}
                        number={250}
                        declaration="Ավելի քան 250գոհ հաճախորդ"
                        dark={props.dark}
                    />
                </div>
                <div className="group">
                    <ProgressBar
                        procent={60}
                        number={124}
                        declaration="Մենաք ունենք 124 ավարտած աշակերներ "
                        dark={props.dark}
                    />
                </div>
            </div>


        </div>
    )
}