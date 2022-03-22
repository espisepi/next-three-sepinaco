import { Suspense, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { Box, useGLTF, Instances, Instance } from '@react-three/drei'
import * as THREE from 'three'


export default function Scene() {

    return (
        <>
            <ambientLight />
            <pointLight />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </>
    );
}

export function Model() {

    const { scene } = useGLTF("/coronil-medievil.glb")
    console.log(scene)

    const tumbas = useMemo(()=>{
        return scene.children.filter(child => child.name.includes("Tomb"))
    },[scene])
    console.log(tumbas)


    return (
        <>
            <Box />
            {/* <primitive object={scene} /> */}
            {/* <Tumba model={scene.children[0]} /> */}
            <Tumbas models={tumbas} />
        </>
    )
}

export function Tumbas({models}) {
    const [texture1,texture2,texture3] = useLoader(THREE.TextureLoader,["/Standard_D.jpg","/Standard_N.jpg","/Standard_S.jpg"])

    return (
        // models.map( (m,i) => (
        //    <Tumba key={i} model={m} />
        // )) 
        <Instances
            limit={models.length} // Optional: max amount of items (for calculating buffer size)
            range={models.length} // Optional: draw-range
            geometry={models[0].geometry}
            material={new THREE.MeshPhysicalMaterial({
                map:texture1,
                normalMap: texture2
            })}
            >
            { models.map( (model, i) => (
                <Instance
                    key={i}
                    color="red"
                    position={[model.position.x, model.position.y, model.position.z]}
                    rotation={[model.rotation.x, model.rotation.y, model.rotation.z]}
                    scale={[model.scale.x,model.scale.y,model.scale.z]}
                />
            )) }
        </Instances>
    )
}

// export function Tumba({model}) {
//     return (<primitive object={model} />)
// }