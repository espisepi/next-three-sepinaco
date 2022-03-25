import { Canvas } from '@react-three/fiber';
import { Box } from "@react-three/drei";



export default function CVCanvas({style}) {
    return (
        <div className="CVCanvas-component" style={{  width: '40%', height: '100%', ...style}}>
            <Canvas style={{backgroundColor: 'black'}}>
                <Box />
            </Canvas>
        </div>
    )
}