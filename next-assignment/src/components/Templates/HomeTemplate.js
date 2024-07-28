import React,{useState} from "react";
import Widget from "@/components/Widget"
//import useData from "@/hooks/useData";
import { usePostData } from "@/hooks/apiCall";

// components
export default function HomeTemplate(props) {
    
    let page = props.page
    const { data, error, isLoading, isFetching, refetch } = usePostData(`page/get-single-page/`,{name:page});
   
    let  pageData = data && data.data.data.data
    let  widgetData = data && data.data.widget


    return (
        <>
        <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
                backgroundImage:
                "url('/templateImg')",
            }}
            >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-white"
            ></span>
            </div>
            <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="pt-32 sm:pt-0">
                    <h2>{pageData}</h2>
                    <h2 className="font-semibold text-4xl text-blueGray-600">
                    That's Aflex - We get the job done.
                    </h2>
                    <ul className="home_list">
                    <li>High-quality equipment operated by professional staff</li>
                    <li>Fast appointment availability throughout Germany</li>
                    <li>Transparent cost breakdown with no hidden fees</li>
                    <li>Tailor-made solutions for individual requirements</li>
                    </ul>
                    
                </div>
                </div>
                <Widget widgetData = {widgetData}/>
                {/* <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="pt-32 sm:pt-0">
                    <div className="banner_right">
                    <p className="title">Our most popular services at a glance</p>
                    <ul className="banner_list">
                        <li>Plan your move<span className="icon"><img width="16" height="16" className=" lazyloaded" src="/img/external-link.png" /> </span></li>
                        <li>Plan painting work<span className="icon"><img width="16" height="16" className=" lazyloaded" src="/img/external-link.png" /> </span></li>
                        <li>Plan clearance<span className="icon"><img width="16" height="16" className=" lazyloaded" src="/img/external-link.png" /> </span></li>
                    </ul>
                    <div className="sep"><span>or</span></div>
                    <div className="call_now"><a className="info-box-link" href="tel:00493023931002"> <span className="info-box-media-container"> <img width="64" height="64" className=" lazyloaded" src="/img/telephone.png" /> </span> <span className="textcontent"> <span className="info-box-title">Call us at<span className="info-box-text">123123123123</span> </span></span></a></div>
                    </div>
                </div>
                </div> */}
            </div>
            </div>

        </div>  
        </>
    );
}
