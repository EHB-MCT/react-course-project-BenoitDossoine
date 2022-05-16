import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from './3D/Model';

export default function Avatar(){
    return(
        <Canvas
         camera={{ position: [0, 8, 12.25], fov: 15}}
         style={{
            backgroundColor: '#121212',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model></Model>
         </Suspense>
      </Canvas>
    )
}