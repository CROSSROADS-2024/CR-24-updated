'use client'
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import {MerchWhite} from "../components/MerchWhite"

const Viewer = () => {
  const ref = useRef()
  return (
    <div className="h-[100vh] w-[100vw]">
<Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
        false
          <MerchWhite />
        false
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
    </div>
  )
}

export default Viewer
