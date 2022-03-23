import { useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

import  Scene  from '../../../scenes/coronil/Scene'

// Cargamos la escena blender
// Hacemos instancedmesh de todas las tumbas y lo mostramos en escena
// Vamos cogiendo los demas elementos y los vamos mostrando en escena (los repetidos hacerle instancedmesh)
// creamos un control de joystick de museo y con touchpad mueve camara

// TODO: Seguir por aqui (InstancedMesh de Tumbas) https://codesandbox.io/s/h8o2d !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


export default function Coronil() {
    return (
        <>
        <h1>holimundi</h1>
        <Canvas style={{backgroundColor: 'black', position: 'absolute', top: 0, width: '100vw', height: '100vh'}}>
            <Scene />
            {/* <OrbitControls /> */}
            <CameraAnimationControl />
        </Canvas>
        <video id="video" width="320" height="50" controls style={{position:'absolute', top:5, zIndex:5, opacity:0.8}}>
            <source src="/coronil-medievil.mp3" type="audio/mp3"/>
            Your browser does not support the video tag.
        </video>
        </>
    )
}


export function CameraAnimationControl() {
    const { camera } = useThree()
    useEffect(()=>{ camera.position.y = 1.75 },[])
    const [state, setState] = useState({
        speed:0.5,
        velocityZ:0,
        velocityX:0,
        velocityY:0,
    })
    useEffect(()=>{
        document.addEventListener('keydown', function(event){
            console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

            if(event.key == "ArrowUp") {
                setState( state => ({...state, velocityZ: -1}) )
            }

            if(event.key == "ArrowDown") {
                setState( state => ({...state, velocityZ: 1}) )
            }

            if(event.key == "ArrowLeft") {
                setState( state => ({...state, velocityX: -1}) )
            }

            if(event.key == "ArrowRight") {
                setState( state => ({...state, velocityX: 1}) )
            }

            if(event.key == "q") {
                setState( state => ({...state, velocityY: 1}) )
            }

            if(event.key == "e") {
                setState( state => ({...state, velocityY: -1}) )
            }

        })
        document.addEventListener('keyup', function(event){
            console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);

            if(event.key == "ArrowUp") {
                setState( state => ({...state, velocityZ: 0}) )
            }

            if(event.key == "ArrowDown") {
                setState( state => ({...state, velocityZ: 0}) )
            }

            if(event.key == "ArrowLeft") {
                setState( state => ({...state, velocityX: 0}) )
            }

            if(event.key == "ArrowRight") {
                setState( state => ({...state, velocityX: 0}) )
            }

            if(event.key == "q") {
                setState( state => ({...state, velocityY: 0}) )
            }

            if(event.key == "e") {
                setState( state => ({...state, velocityY: 0}) )
            }

        })
    },[])
    useFrame(()=>{
        if(state.velocityZ != 0) {
            camera.position.z += state.velocityZ * state.speed
        }
        if(state.velocityX != 0) {
            camera.position.x += state.velocityX * state.speed
        }
        if(state.velocityY != 0) {
            camera.position.y += state.velocityY * state.speed
        }
    })
    return null;
}