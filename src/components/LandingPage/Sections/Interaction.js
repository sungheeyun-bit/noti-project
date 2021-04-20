import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import './Interaction.css'

function Box(props) {
  
  const mesh = useRef()
  
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [3, 3, 3] : [3, 3, 3]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function interaction() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}
