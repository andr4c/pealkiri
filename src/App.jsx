import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
  return (
    <Router>
      <Canvas shadows camera={{ position: [2, 2, 8], fov: 50 }}>
        <color attach="background" args={["#0a1a2a"]} />
        <fog attach="fog" args={["#0a1a2a", 8, 25]} />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Experience />} />
          </Routes>
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI />
    </Router>
  );
}

export default App;
