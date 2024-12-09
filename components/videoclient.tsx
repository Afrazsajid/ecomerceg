"use client"
import React from 'react'
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const VideoPlayer = dynamic(() => import('@/components/videoPlayer'), {
    ssr: false, // Disable server-side rendering to ensure the video is loaded on the client-side
    loading: () =><Skeleton className="product-card_skeleton" />, // Fallback loading message while the component is loading
  });

 
  
  const Videoclient = () => {
    return (
        <div className="w-full sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-2/5 mx-auto relative aspect-w-16 aspect-h-9">
        <VideoPlayer videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </div>
      
      
    )
  }
  
  export default Videoclient