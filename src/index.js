import { createRoot } from 'react-dom/client';
import Experiense from './Experiense';
import './styles.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const root = createRoot(document.getElementById('root'));

root.render(
  <Canvas
    camera={{ position: [4, 0, 5] }} 
  >
    <Experiense />
  </Canvas>
);

