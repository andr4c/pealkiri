/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/main_model.glb -o src/components/World.jsx -k -K -r public 

Author: Kenney (www.kenney.nl)
Source: https://opengameart.org/content/3d-nature-pack
Title: 3D Nature pack

"Stylized Ghost model" (https://skfb.ly/oBuRB) by BrightShot is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

Shiba Inu by Pat Siefring [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/1sr1MDt9db5)

*/

import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { degToRad } from "three/src/math/MathUtils.js";
import { currentPageAtom } from "./UI";
import { useAtom } from "jotai";

const OverlayItem = ({
  className = " ",
  bgColor1,
  bgColor2,
  onYesClick,
  onNoClick,
  ...props
}) => {
  const [currentPage] = useAtom(currentPageAtom);

const handleYesButtonClick = () => {
  if (onYesClick) {
    onYesClick();
  }
};

const handleNoButtonClick = () => {
  if (onNoClick) {
    onNoClick();
  }
};

  return (
    <Html
      transform
      distanceFactor={1.2}
      center
      className={`w-48 rounded-md overflow-hidden ${
        currentPage === "question" ? "" : "opacity-0"
      } transition-opacity duration-1000 ${className}`}
      {...props}
      >
      
      <button
        className={`${bgColor1} hover:bg-opacity-50 transition-colors duration-500 px-6 py-3 font-bold text-white w-full text-lg`}
        onClick={handleYesButtonClick}
        
      >
        YES
      </button>
      <button
        className={`${bgColor2} hover:bg-opacity-50 transition-colors duration-500 px-6 py-3 font-bold text-white w-full text-lg`}
        onClick={handleNoButtonClick}
      >
        NO
      </button>
    </Html>
  );
};

export function World({ html, onYesClick, onNoClick, ...props }) {
  const { nodes, materials } = useGLTF('/models/main_model.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Plate_Grass_Dirt_01" position={[-3.034, 0, 2.98]} rotation={[Math.PI / 2, 0, 0]} scale={[1.991, 1.991, 0.513]}>
          <mesh name="Plate_Grass_Dirt_01_1" geometry={nodes.Plate_Grass_Dirt_01_1.geometry} material={materials.Wood} />
          <mesh name="Plate_Grass_Dirt_01_2" geometry={nodes.Plate_Grass_Dirt_01_2.geometry} material={materials.Leafs} />
        </group>
        <group name="Oak_Green_01" position={[-3.148, 0.128, 3.276]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Oak_Green_01_1" geometry={nodes.Oak_Green_01_1.geometry} material={materials.Green_leafs} />
          <mesh name="Oak_Green_01_2" geometry={nodes.Oak_Green_01_2.geometry} material={materials['Wood.001']} />
        </group>
        <group name="Tree_02" position={[-2.809, 0.631, 1.411]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Tree_02_1" geometry={nodes.Tree_02_1.geometry} material={materials['Leafs.001']} />
          <mesh name="Tree_02_2" geometry={nodes.Tree_02_2.geometry} material={materials['Wood.002']} />
        </group>
        <group name="Oak_Dark_01" position={[-0.969, 0.164, 2.98]} rotation={[Math.PI / 2, 0, 0]} scale={0.754}>
          <mesh name="Oak_Dark_01_1" geometry={nodes.Oak_Dark_01_1.geometry} material={materials['Leafs.002']} />
          <mesh name="Oak_Dark_01_2" geometry={nodes.Oak_Dark_01_2.geometry} material={materials['Wood.003']} />
        </group>
        <group name="Large_Oak_Green_01" position={[0.222, 0.138, 2.892]} rotation={[Math.PI / 2, 0, 0]} scale={0.566}>
          <mesh name="Large_Oak_Green_01_1" geometry={nodes.Large_Oak_Green_01_1.geometry} material={materials['Wood.004']} />
          <mesh name="Large_Oak_Green_01_2" geometry={nodes.Large_Oak_Green_01_2.geometry} material={materials['Green_leafs.001']} />
        </group>
        <group name="Tree_02001" position={[-1.745, 0.501, 1.7]} rotation={[Math.PI / 2, 0, 0.405]} scale={0.728}>
          <mesh name="Tree_02001_1" geometry={nodes.Tree_02001_1.geometry} material={materials['Leafs.003']} />
          <mesh name="Tree_02001_2" geometry={nodes.Tree_02001_2.geometry} material={materials['Wood.005']} />
        </group>
        <group name="Large_Oak_Dark_01" position={[-2.312, 0.13, 0.02]} rotation={[Math.PI / 2, 0, -0.448]} scale={0.514}>
          <mesh name="Large_Oak_Dark_01_1" geometry={nodes.Large_Oak_Dark_01_1.geometry} material={materials['Wood.006']} />
          <mesh name="Large_Oak_Dark_01_2" geometry={nodes.Large_Oak_Dark_01_2.geometry} material={materials['Leafs.004']} />
        </group>
        <mesh name="Wood_Fence_01" geometry={nodes.Wood_Fence_01.geometry} material={materials['Wood.007']} position={[-1.015, 0.133, 0.78]} rotation={[Math.PI / 2, 0, 0]} scale={0.513} />
        <mesh name="Wood_Fence_01001" geometry={nodes.Wood_Fence_01001.geometry} material={materials['Wood.007']} position={[-1.015, 0.133, -0.708]} rotation={[Math.PI / 2, 0, 0]} scale={0.513} />
        <mesh name="Wood_Fence_01002" geometry={nodes.Wood_Fence_01002.geometry} material={materials['Wood.007']} position={[0.804, 0.133, 1.053]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.513} />
        <mesh name="Wood_Fence_01003" geometry={nodes.Wood_Fence_01003.geometry} material={materials['Wood.007']} position={[2.318, 0.133, 1.053]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.513} />
        <mesh name="SIEFRING_ShibaInu_LP" geometry={nodes.SIEFRING_ShibaInu_LP.geometry} material={materials['Material.001']} position={[1.113, 0.672, -0.33]} rotation={[Math.PI / 2, 0, -2.707]} scale={0.135} />

        <group position={[1.091, 1.859, -2.122]}>
          <mesh 
          name="Plane" 
          geometry={nodes.Plane.geometry} 
          material={nodes.Plane.material}  
          rotation={[-Math.PI, 0.477, -Math.PI]} 
          scale={[1.417, 0.245, 1.417]} />
          {html && (
            <OverlayItem 
              onYesClick={onYesClick}
              onNoClick={onNoClick}
              rotation-y={degToRad(150)}
              position-x={0}
              position-z={0}
              position-y={-1}
              bgColor1={"bg-green-500"}
              bgColor2={"bg-red-500"}
              className={"transition delay-1000"}
            />
          )}
        </group>
        
      </group>
    </group>
  )
}

useGLTF.preload('/models/main_model.glb')
