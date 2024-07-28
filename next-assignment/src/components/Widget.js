'use client';

import React,{useState,useEffect} from "react";

const Widget = (props) => {

     const [widget,setWidget] = useState(props)

     useEffect(()=>{
        let data = props.widgetData
        data && setWidget(data)
     },[props])
      
   
     return(
        <>
        {
        
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 mainWidget">
            <div className="pt-32 sm:pt-0">
                <div className="banner_right">
                    <p className="title">{widget.title}</p>
                    <ul className="banner_list">
                        <li>{widget && widget.content}<span className="icon"> </span></li>
                    </ul>
                    <div className="sep"><span>or</span></div>
                    <div className="call_now"><a className="info-box-link" href="tel:00493023931002"> <span className="info-box-media-container"> </span> <span className="textcontent"> <span className="info-box-title">Call us at <span className="info-box-text">{widget && widget.contactNumber}</span> </span></span></a></div>
                    <ul>
                        <li>
                            {widget && widget.time}
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
        
        }
        </>
    )
}

export default  React.memo(Widget)