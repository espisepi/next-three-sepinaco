import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'


// Cargamos la escena blender
// Hacemos instancedmesh de todas las tumbas y lo mostramos en escena
// Vamos cogiendo los demas elementos y los vamos mostrando en escena (los repetidos hacerle instancedmesh)

export default function Coronil() {
    return (
        <>
        <h1>holimundi</h1>
        <Canvas style={{backgroundColor: 'black', position: 'absolute', top: 0, width: '100vw', height: '100vh'}}>
            <ambientLight />
            <Box />
            <OrbitControls />
        </Canvas>
        </>
    )
}