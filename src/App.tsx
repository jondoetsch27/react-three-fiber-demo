import * as THREE from 'three'
import * as React from 'react'
import { Canvas } from '@react-three/fiber'

function App() {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffcb05)
  const perspectiveCamera = new THREE.PerspectiveCamera()

  return (
    <Canvas camera={perspectiveCamera}>
      <div />
    </Canvas>
  )
}

export default App
