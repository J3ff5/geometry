import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Mesh } from 'three'
import { IProps } from './Box.structure'

export default function Box(props: IProps) {
  const ref = useRef<Mesh>(null)

  const [clicked, setClicked] = React.useState(true as boolean)

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
      scale={props.size}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}
