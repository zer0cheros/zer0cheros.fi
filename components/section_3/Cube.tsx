import React from 'react'
import {Canvas, useLoader, useThree} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import { Flex, Box } from '@react-three/flex'

type Props = {

}
const Cube = () => {
  function Project(props:Props){
    const texture= useLoader(TextureLoader, '/optidev.PNG')
        return(
            <mesh {...props} >
                <boxGeometry args={[4,4,4]}/>
                <meshStandardMaterial map={texture} />
            </mesh>
        )
    }
    return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 15]} />
        <Project />
        <OrbitControls />      
    </Canvas>
  )
}

export default Cube