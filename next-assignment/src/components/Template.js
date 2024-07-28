'use client';
import Widget from "./Widget"
import HomeTemplate from "@/components/Templates/HomeTemplate"
import HomeNavbar from "@/components/Navbars/HomeNavbar"


const Template  = (props) => {
  
  let page = props.pageName

    return(
        <>
            <HomeNavbar />
            {/* <HomeTemplate page={page}></HomeTemplate> */}
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
            <section className="pb-20 relative block ">
              <div className="container mx-auto px-4 ">
                <div className="flex flex-wrap mt-10">
                  <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">


                    <h1 className="text-4xl font-semibold">Welcome <span className="highlight">pageData</span></h1>
                    <p>There are many situations where a clearance becomes necessary or beneficial. For example, if you: </p>
                    <ul className="home_list hm_check_list">
                      <li><strong>Need to clear out a household because a relative has passed away or is moving into a care home</strong></li>
                      <li><strong>Inherit, buy, or want to sell a property that is full of junk</strong></li>
                      <li><strong>Are planning to move or renovate and want to get rid of old furniture and household items</strong></li>
                    </ul>
                    <div className="service_btn"><button className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Planning a Clearance</button></div>

                  </div>

                  <div className="w-full md:w-5/12  mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg ">
                      <img
                        alt="..."
                        src="/img/gruendlich-ausmisten-mit-den-profis.webp"
                        className="w-full align-middle rounded-t-lg"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
     
            <section className="pb-20 pb-20 relative block bg-blueGray-200 ">
              <div className="container mx-auto px-4">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                </div>
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">
                      <div className="px-4 py-5 flex-auto ">
                        <div className="text-white p-3 text-center" >
                          <img className="py-4 lazyloaded " src="" />
                        </div>
                        <h6 className="text-xl font-semibold">Card</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          ...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center" >
                          <img className="py-4 lazyloaded " src="/img/kostenloses-angebot.webp" />
                        </div>
                        <h6 className="text-xl font-semibold">Clearance</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center" >
                          <img className="py-4 lazyloaded " src="" />
                        </div>
                        <h6 className="text-xl font-semibold">Professional</h6>
                        <p className="mt-2 mb-4 text-blueGray-500">
                          ..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Widget />
        </>
    )
}
export default Template


