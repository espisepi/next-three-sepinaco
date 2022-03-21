import { Canvas } from '@react-three/fiber'
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
            <OrbitControls />
        </Canvas>
        </>
    )
}