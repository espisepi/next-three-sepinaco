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

    const tumbas = useMemo(()=>{
        return scene.children.filter(child => child.name.includes("Tomb"))
    },[scene])

    const wallsCastle = useMemo(()=>{
        return scene.children.filter(child => child.name.includes("WallMid"))
    },[scene])

    return (
        <>
            <Box />
            {/* <primitive object={scene} /> */}
            {/* <Tumba model={scene.children[0]} /> */}
            <Tumbas models={tumbas} />
            <group name="castle">
                <WallsCastle models={wallsCastle} />
            </group>
        </>
    )
}

export function WallsCastle({models}) {
    const [texture1,texture2,texture3] = useLoader(THREE.TextureLoader,["/Standard_D.jpg","/Standard_N.jpg","/Standard_S.jpg"])

    return (
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

export function InstancesModel({objects, ...props }) {
    return (
        <Instances
            limit={objects.length} // Optional: max amount of items (for calculating buffer size)
            range={objects.length} // Optional: draw-range
            geometry={objects[0].geometry}
            material={objects[0].material}
            {...props}
            >
            { objects.map( (object, i) => (
                <Instance
                    key={i}
                    color="red"
                    position={[object.position.x, object.position.y, object.position.z]}
                    rotation={[object.rotation.x, object.rotation.y, object.rotation.z]}
                    scale={[object.scale.x,object.scale.y,object.scale.z]}
                />
            )) }
        </Instances>
    )
}

// export function Tumba({model}) {
//     return (<primitive object={model} />)
// }