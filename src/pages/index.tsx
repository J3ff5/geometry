import React from 'react'
import { Canvas } from 'react-three-fiber'
import Box from '@/components/Box'
import { useControls } from 'leva'
import { OrbitControls } from '@react-three/drei'

export default function Home() {
  const { color, size } = useControls({
    color: '#e03de8',
    size: {
      value: 1,
      min: 0.2,
      max: 3,
      step: 0.1
    }
  })
  return (
    <div className="flex flex-col w-auto justify-center h-screen ">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <pointLight position={[10, 10, 10]} />
        <Box color={color} size={size} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
