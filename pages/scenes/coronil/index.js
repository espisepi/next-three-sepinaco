import { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

import  Scene  from '../../../scenes/coronil/Scene'

// Cargamos la escena blender
// Hacemos instancedmesh de todas las tumbas y lo mostramos en escena
// Vamos cogiendo los demas elementos y los vamos mostrando en escena (los repetidos hacerle instancedmesh)
// creamos un control de joystick de museo y con touchpad mueve camara

// TODO: Seguir por aqui (InstancedMesh de Tumbas) https://codesandbox.io/s/h8o2d !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//TODO HECHO: Play/Pause con teclado y ocultar musica 
//TODO: Crear distintas camaras que se muevan diferentes y en diferentes sitios y se cambia la vista con el teclado
//TODO: Las camaras que se muevan con Curve al pulsar teclado

//TODO Opcional: Probar a hacer efecto optico con la imagen de dos camaras mirandose repitiendose infinitamente


export default function Coronil() {

    const videoRef = useRef()
    useEffect(()=>{
        if(videoRef.current) {
            document.addEventListener('keydown', function(event){
                console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
                if(event.key == "ArrowUp") {
                    // play/stop music
                    videoRef.current.play();
                }
                if(event.key == "ArrowDown") {
                    // play/stop music
                    videoRef.current.pause();
                }
            })

            document.addEventListener('keyup', function(event){
                console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
            })

        }
    },[videoRef])

    return (
        <>
        <h1>holimundi</h1>
        <Canvas style={{backgroundColor: 'black', position: 'absolute', top: 0, width: '100vw', height: '100vh'}}>
            <Scene />
            {/* <OrbitControls /> */}
            <CameraAnimationControl />
        </Canvas>
        <video ref={videoRef} id="video" width="320" height="50" controls style={{display:'none', position:'absolute', top:5, zIndex:5, opacity:0.8}}>
            <source src="/coronil-medievil.mp3" type="audio/mp3"/>
            Your browser does not support the video tag.
        </video>
        </>
    )
}


export function AllCameras() {
    return (
        null
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

            if(event.key == "w") {
                setState( state => ({...state, velocityZ: -1}) )
            }

            if(event.key == "s") {
                setState( state => ({...state, velocityZ: 1}) )
            }

            if(event.key == "a") {
                setState( state => ({...state, velocityX: -1}) )
            }

            if(event.key == "d") {
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

            if(event.key == "w") {
                setState( state => ({...state, velocityZ: 0}) )
            }

            if(event.key == "s") {
                setState( state => ({...state, velocityZ: 0}) )
            }

            if(event.key == "a") {
                setState( state => ({...state, velocityX: 0}) )
            }

            if(event.key == "d") {
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