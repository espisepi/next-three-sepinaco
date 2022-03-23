import React, { useState, useEffect } from 'react';
import Analyser from './Analyser';


export default function useAnalyser( elementId = 'video', fftSize = 2048 ) {

    const [ analyser, setAnalyser ] = useState();
    useEffect(()=>{
        // if(elementId) {
        //     const audio = document.getElementById( elementId );
        //     const analyser = new Analyser(audio, fftSize);
        //     setAnalyser((v)=>(analyser));
        // }
        const intervalTime = 100;
        const id_interval = setInterval(()=>{
            console.log('Search video...')
            const videoEl = document.getElementById(elementId);
            if(videoEl && videoEl.width !== 0 && videoEl.height !== 0 ){

                const analyser = new Analyser(videoEl, fftSize);
                setAnalyser((v)=>(analyser));

                clearInterval(id_interval);
                console.log('Video was founded succesfully! :)')
            }
        },intervalTime);
    },[elementId, fftSize]);

    return analyser;
}