import { useEffect, useRef } from "react"
import Script from 'next/script'
import { Canvas, useThree } from '@react-three/fiber'
import { Box, Stars } from '@react-three/drei'
import { Physics, usePlane, useBox } from '@react-three/cannon'

import { SceneRaw } from '../../scenes/coronil/Scene'




export default function Sketchbook() {

    return (
        <>
        {/* <Script src="build/sketchbook.min.js" strategy="beforeInteractive"></Script>
	    <Script  strategy="afterInteractive">
		    const world = new Sketchbook.World('build/assets/world_v3.glb');
            window.world = world;
	    </Script>
        <div style={{position:'absolute', top: 0, zIndex: -10}}>
            <AppCanvas />
        </div> */}
        <h1>No funciona en produccion esta pagina, por lo tanto fue comentada</h1>
        </>
    )
}

export function AppCanvas() {
    return (
        <>
            <Canvas>
                <Scene />
            </Canvas>
        </>
    )
}

export function Scene() {

    const groupRef = useRef()

    const { scene } = useThree()
    useEffect(()=>{
        if(groupRef.current){
            const world = window.world
            console.log('holi')
            console.log(world)
            world.graphicsWorld.add(groupRef.current)
            // groupRef.current.add(world.graphicsWorld)
        }
    },[groupRef])

    return (
        <>
        <group ref={groupRef} name="r3f-world">
            <Stars />
            <Box />

            <SceneRaw />

            {/* <Physics>
                <BoxPhysics />
            </Physics> */}
        </group>
        </>
    )
}

// TODO: Crear una capsula physics para el player cuya posicion se actualiza cada frame por la posicion del player y que choque tambien en el mundo r3f
// export function BoxPhysics() {
//     const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
//     return (
//       <mesh ref={ref}>
//         <boxGeometry />
//       </mesh>
//     )
// }