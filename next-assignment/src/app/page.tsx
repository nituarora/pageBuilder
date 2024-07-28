'use client';

import Layout  from "./layout"
import { useRouter } from 'next/router';
import React,{useEffect} from 'react'
import './style.css'
import { useParams } from "next/navigation";

export default function Page() {

  const router = useRouter();
  const { page } = useParams();

  // useEffect(() => {
  //   if (!page) {
  //     // Redirect to the first page or any specific page
  //     router.push('/'); // Change 'default-page' to your desired route
  //   }
  // }, [page, router]);

  return (
    <div>
        {/* <home/> */}

    </div>

  );
}

