import React from "react";
import Link from "next/link";

// components
export default function HomeNavbar(props) {
 
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
            
                Logo Here
             
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              " block" 
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              {/* <li className="flex items-center px-2"> */}
          
                {props?.menuItems?.map((menu,index)=>(
                  <li className="flex items-center px-2" key={index}>
                    <Link href={`/${menu}`}>
                        {menu.toUpperCase()}
                    </Link>
                  </li>
                ))}
             


              <li className="flex items-center px-2">
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Online Request
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
