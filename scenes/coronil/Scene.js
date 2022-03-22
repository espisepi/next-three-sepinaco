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

    const wallsCastle = useMemo(()=>{
        return scene.children.filter(child => child.name.includes("WallMid"))
    },[scene])

    const towersCastle = useMemo(()=>{
        return scene.children.filter(child => child.name.includes("Tower"))
    },[scene])

    const townsCenterCastle = useMemo(()=>{
        return scene.children.filter(child => child.name.includes("TownCenter"))
    },[scene])

    const medievilModel = useMemo(()=>{
        return scene.children[0]
    },[scene])

    return (
        <>
            {/* <Box /> */}
            <Tumbas models={tumbas} color='red' />
            <group name="castle">
                <WallsCastle models={wallsCastle} color='red' />
                <TowersCastle models={towersCastle} />
                <TownsCenterCastle models={townsCenterCastle} color='red' />
            </group>
            <MedievilModel object={medievilModel} />
        </>
    )
}

export function Tumbas({models, color}) {
    const [texture1,texture2,texture3] = useLoader(THREE.TextureLoader,["/Standard_D.jpg","/Standard_N.jpg","/Standard_S.jpg"])
    return (
        <InstancesModel objects={models}
                        color={color}
                        material={new THREE.MeshBasicMaterial({
                            map: texture1,
                            normalMap: texture2
                        })} />
    )
}

export function WallsCastle({models, color}) {
    // const [texture1,texture2,texture3] = useLoader(THREE.TextureLoader,["/T_WallMid_diffuse.png","/T_WallMid_normal.png","/T_WallMid_roughness.png"])
    return (
        <InstancesModel objects={models} color={color} material={new THREE.MeshStandardMaterial({
            // map: texture1,
            // normalMap: texture2,
            // roughnessMap: texture3
        })} />
    )
}

export function TowersCastle({models, color}) {
    const [texture1,texture2,texture3] = useLoader(THREE.TextureLoader,["/T_WatchTower_diffuse.png","/T_WatchTower_normal.png","/T_WatchTower_roughness.png"])

    return (
        <InstancesModel objects={models} color={color} material={new THREE.MeshStandardMaterial({
            map: texture1,
            normalMap: texture2,
            roughnessMap: texture3
        })} />
    )
}

export function TownsCenterCastle({models, color}) {
    return (
        <InstancesModel objects={models} color={color} material={new THREE.MeshStandardMaterial()} />
    )
}

export function MedievilModel({object}) {
    return (
        <primitive object={object} />
    )
}



export function InstancesModel({objects, color, ...props }) {
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
                    color={color ? color : null}
                    position={[object.position.x, object.position.y, object.position.z]}
                    rotation={[object.rotation.x, object.rotation.y, object.rotation.z]}
                    scale={[object.scale.x,object.scale.y,object.scale.z]}
                />
            )) }
        </Instances>
    )
}
















/** OLD CODE 
// export function Tumba({model}) {
//     return (<primitive object={model} />)
// }

export function WallsCastleOld({models}) {
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


*/