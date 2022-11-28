import React from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Cube = () => {
  function Box(props){
        return(
            <mesh {...props}>
                <boxGeometry />
                <meshStandardMaterial color='green' />
            </mesh>
        )
    }
    return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 15]} />
        <Box/>
        <OrbitControls />
    </Canvas>
  )
}

export default Cube