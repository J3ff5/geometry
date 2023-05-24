import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Box from '@/components/Box'
import { Mesh } from 'three'
import { OrbitControls } from '@react-three/drei'

export default function Home() {
  return (
    <div className="flex flex-col w-auto justify-center h-screen ">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
