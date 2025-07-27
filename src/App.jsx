import { useState, useEffect } from 'react'
import './styles.css'
import TerminalUI from './TerminalUI'
import IDCard from './IDCard'
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Environment } from '@react-three/drei';
import { Lightformer } from '@react-three/drei';

export default function App() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    // Add a small delay to allow for smooth animation
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="layout">
       <div className={`card-section ${loaded ? 'loaded' : ''}`}>
        <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
      <ambientLight intensity={Math.PI} />
      <Physics>
        <IDCard />
      </Physics>
      <Environment background blur={0.75}>
        <color attach="background" args={['black']} />
        <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
        <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
      </Environment>
    </Canvas>
      </div>
      <div className={`terminal-section ${loaded ? 'loaded' : ''}`}>
        <TerminalUI />
      </div>
     
    </div>
  )
}
