import { CameraControls, Environment, MeshReflectorMaterial, RenderTexture, Text, useFont } from "@react-three/drei";
import { World } from "./World";
import { degToRad, lerp } from "three/src/math/MathUtils.js";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { useAtom } from "jotai";
import { buttonClickedAtom, currentPageAtom } from "./UI";
import { Firework } from "./Firework";
import { useFrame } from "@react-three/fiber";
import { useFireworkAnimations } from "../contexts/FireworkAnimations";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {

const controls = useRef();
const meshFitCameraHome = useRef();
const meshFitCameraQuestion = useRef();
const textMaterial1 = useRef();
const textMaterial2 = useRef();
const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
const [buttonClicked, setButtonClicked] = useAtom(buttonClickedAtom);
const [textsVisible, setTextsVisible] = useState(true);
const { setAnimationIndex } = useFireworkAnimations();

useFrame((_, delta) => {
  if (textMaterial1.current && textMaterial2.current) {
    const targetOpacity = textsVisible && (currentPage === "home" || currentPage === "intro") ? 1 : 0;
    textMaterial1.current.opacity = lerp(textMaterial1.current.opacity, targetOpacity, delta * 1.5);
    textMaterial2.current.opacity = lerp(textMaterial2.current.opacity, targetOpacity, delta * 1.5);
  }
});

const intro = async () => {
  controls.current.dolly(-20);
  controls.current.smoothTime = 1;
  setTimeout(() => {
    setCurrentPage("home");
  }, 1200);
  fitCamera();
};

const fitCamera = async () => {
  if (currentPage === "question") {
    controls.current.fitToBox(meshFitCameraQuestion.current, true);
  } else {
    controls.current.fitToBox(meshFitCameraHome.current, true);
  }
};

useEffect(() => {
  intro();
}, []);

useEffect(() => {
  fitCamera();
  window.addEventListener("resize", fitCamera);
  return () => window.removeEventListener("resize", fitCamera);
}, [currentPage]);

const handleYesButtonClick = () => {
  setCurrentPage("home");
  setTextsVisible(false);
  setButtonClicked(true);
  setAnimationIndex(0);
  fitCamera();
};

const handleNoButtonClick = () => {
  window.location.replace('https://youtu.be/KH5oMFyiqf0?si=mO4vX2qF79TcViFU');
};

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position-x={1} position-y={2} position-z={0} visible={false}>
        <boxGeometry args={[10, 5, 7]}/>
        <meshBasicMaterial color="red" transparent opacity={0.5} />
      </mesh>

      
      <Text
      font={"fonts/TitilliumWeb-Black.ttf"}
      position-x={-2}
      position-y={3}
      position-z={-2}
      lineHeight={0.8}
      textAlign="center"
      rotation-y={degToRad(30)}
      anchorY={"bottom"}
      >
        DO YOU{"\n"}WANNA
        <meshBasicMaterial color={bloomColor} toneMapped={false} ref={textMaterial1}>
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
          </RenderTexture>
        </meshBasicMaterial>
      </Text>

      <Text
      font={"fonts/TitilliumWeb-Black.ttf"}
      position-x={4.5}
      position-y={2.2}
      position-z={-2}
      lineHeight={0.8}
      textAlign="center"
      rotation-y={degToRad(-30)}
      anchorY={"bottom"}
      >
        GO OUT{"\n"}WITH{"\n"}ME?
        <meshBasicMaterial color={bloomColor} toneMapped={false} ref={textMaterial2}>
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
          </RenderTexture>
        </meshBasicMaterial>
      </Text>

      <group rotation-y={degToRad(-150)} position-x={0.8}>
        <World scale={0.8} html onYesClick={handleYesButtonClick}
          onNoClick={handleNoButtonClick}/>
        <mesh ref={meshFitCameraQuestion} position-x={0.8} position-y={0.5} position-z={-1.5} visible={false}>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color="orange" transparent opacity={0.5} />

        </mesh>
      </group>
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
        blur={[100, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={10}
        roughness={1}
        depthScale={1}
        opacity={0.7}
        transparent
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#333"
        metalness={0.5}
        />
      </mesh>
      <group position={[0, -10, -10]}>
        <Firework />
      </group>
      <Environment preset="sunset"/>
    </>
  );
};

useFont.preload("fonts/TitilliumWeb-Black.ttf");