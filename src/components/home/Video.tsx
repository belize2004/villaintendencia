"use client"
import React, { useState, useEffect } from 'react'
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { getVideo } from "@/sanity/lib/queries";

export default function Video() {
    const [muted, setMuted] = useState(true)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)

    function toggleMuted() {
        setMuted(prev => !prev)
    }

    useEffect(() => {
        async function fetchVideo() {
            const videos = await getVideo()
            if (videos && videos.length > 0) {
                setVideoUrl(videos[0].videoUrl)
            }
        }
        fetchVideo()
    }, [])

    return (
        <div className='relative'>
            {videoUrl && (
                <video className='w-full' src={videoUrl} autoPlay loop muted={muted}></video>
            )}
            {/* Un-Mute feature */}
            {/* <div className='absolute cursor-pointer right-5 bottom-5' onClick={toggleMuted}>
                {muted ? <HiMiniSpeakerXMark color='red' size={30} /> : <HiMiniSpeakerWave color='white' size={30} />}
            </div> */}
        </div>
    )
}
