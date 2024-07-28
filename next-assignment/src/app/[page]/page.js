

// src/app/[page]/page.js
'use client'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { usePostData,useGetData } from '@/hooks/apiCall';
import HomeNavbar from '@/components/Navbars/HomeNavbar';
import Widget from '@/components/Widget';
import CheckIcon from '@mui/icons-material/Check';
import HelpWidget from '@/components/HelpWidget'

const Page = () => {
  const { page } = useParams();
  const [newPage, setNewPage] = useState(null);
  const [widget,setWidget] = useState()
  const [widgetData,setWidgetData] = useState()
  const [heading,setHeading] = useState()
  const [paragraph,setParagraph] = useState()
  const [listItems, setListItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const { data:res,error:err,isLoading:loading,isFetching:fetching,refetch:reget } = useGetData(`page/get-page/`);
  const { data, error, isLoading, isFetching, refetch } = usePostData(`page/get-single-page/`,{name:page});
  const { data:widgetRes, error:widgetErr, isLoading:widgetLoad, isFetching:widgetFetch, refetch:widgetRefetch } = usePostData(`widget/get-single-widget/${widget}`,{id:widget});

  useEffect(()=>{
    const names = res?.data?.map(item => item.name);
    setMenuItems(names);
  },[res])

 
  useEffect(()=>{
    if(widgetRes)
    {
      setWidgetData(widgetRes.data)
    }
  },[widgetRes])
  
  useEffect(() => {
    if (data) {
      let res = data.data
      console.log("res===",data)
      setWidget(res.widgets[0].id);
      setHeading(res.title);
      setParagraph(res.description);
      if (res.description) {
        const items = res.description.split('.').map(item => item.trim()).filter(item => item);
        setListItems(items);
      }
    }
  }, [data]);
  
  useEffect(() => {
    setNewPage(page);
  }, [page]);

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    
    <>
            <HomeNavbar menuItems = {menuItems}/>
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
                    <h2 className="font-semibold text-4xl text-blueGray-600 heading">
                      {heading}

                    </h2>
                    <ul className="home_list">
                      {listItems.map((item, index) => (
                      <li key={index}><CheckIcon/>{item}</li>
                    ))}
                    </ul>
                    
                </div>
                </div>
                {widgetData && page==='help' ?<Widget widgetData={widgetData}/>:<Widget widgetData={widgetData}/>}
               
            </div>
            </div>
            <HelpWidget widgetData={widgetData}/>
        </div>  
            {/* <section className="pb-20 relative block ">
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
            </section> */}
            
        </>
  );
};

export default Page;



