import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export default function CanvasApp() {
  return (
    <Canvas className="canvas">
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
    </Canvas>
  );
}

function Torusknot(props) {
  const ref = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y += delta / 2)
  );
  return (
    <mesh
      scale={Math.min(viewport.width, viewport.height) / 5}
      {...props}
      ref={ref}
    >
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
