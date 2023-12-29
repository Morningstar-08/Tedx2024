import { Text3D, OrbitControls, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Home.css";
import React, { useRef } from "react";

const Scene = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <mesh castShadow position={[0, -1, 0]}>
        <Center>
          <Text3D
            font="./Samarkan_Normal.json"
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            SAPTARANGA
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </mesh>
    </>
  );
};

export default function Home() {
  return (
    <>
      <div className="home--div">
        <img className="logo" src="./logo2.png" alt="" />
        <div className="canvas--div">
          <Canvas
            camera={{ fov: 70, position: [0, 0, 3] }}
            shadows
            dpr={[1, 2]}
          >
            <Scene />
          </Canvas>
        </div>
      </div>
    </>
  );
}
