import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

export default function Box() {
  const ref = useRef<Mesh>(null)

  const [clicked, setClicked] = React.useState(false as boolean)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01 // Rotaciona no eixo x
      ref.current.rotation.y += 0.001 // Rotaciona no eixo y
      ref.current.rotation.z += 0.0001 // Rotaciona no eixo z
    }
  })

  return (
    <mesh
      ref={clicked ? ref : null}
      onClick={() => {
        setClicked(!clicked)
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
