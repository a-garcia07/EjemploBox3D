import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Experinece = () => {

  const boxRef = useRef(null);
  
  useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <OrbitControls makeDefault />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  );
}

export default Experinece;