// import React, { useState, useRef, useEffect } from 'react';
// import { useLoader } from '@react-three/fiber';
// import * as THREE from 'three';
// import { GLTFLoader } from 'THREE/examples/jsm/loaders/GLTFLoader';

// const Shirt = () => {
//   const [gltf, setGltf] = useState(null);
//   const modelRef = useRef(null);

//   useEffect(() => {
//     const loadModel = async () => {
//       try {
//         const loader = new GLTFLoader();
//         const model = await loader.loadAsync('/untitled1.glb');
//         setGltf(model);
//       } catch (error) {
//         console.error('Error loading model:', error);
//       }
//     };
//     loadModel();
//   }, []);

//   if (!gltf) return null;

//   return (
//     <mesh ref={modelRef}>
//       <primitive object={gltf.scene} />
//     </mesh>
//   );
// };

// export default Shirt;
//dummy
import React from 'react'

const Shirt = () => {
  return (
    <div>Shirt</div>
  )
}

export default Shirt