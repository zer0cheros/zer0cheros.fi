import * as React from 'react'
import {Canvas, extend, useLoader, useThree, useFrame} from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import { Flex, Box } from '@react-three/flex'
import * as THREE from 'three'
import {  Mesh, Plane } from "three"
import { Water } from 'three-stdlib'

extend({ Water })

type Props = {
  
}
declare global {
  namespace JSX {
      interface IntrinsicElements {
          water?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    args: any
  }
}

const Cube = () => {
  const optidevOnclick = ()=>{
    console.log('hej');
  }
  function Ocean() {
    const ref = React.useRef<THREE.PlaneGeometry | any>(null) 
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = React.useMemo(() => new THREE.PlaneGeometry(1000, 1000), [])
    const config = React.useMemo(
      () => ({
        textureWidth: 612,
        textureHeight: 612,
        waterNormals,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 4.7,
        fog: false,
      }),
      [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
    return  <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
  }
  function Project(props:Props){
    const optidev = useLoader(TextureLoader, '/optidev.PNG')
    const term = useLoader(TextureLoader, '/male.jpg')
    const term2 = useLoader(TextureLoader, '/layer_2.png')
    const term3 = useLoader(TextureLoader, '/layer_1.jpg')
    const term4 = useLoader(TextureLoader, '/nedladdning.jpg')
    const term5 = useLoader(TextureLoader, '/logo.PNG')
    optidev.encoding = THREE.sRGBEncoding
    const boxRef = React.useRef<Mesh>(null)
        return(
            <mesh ref={boxRef} {...props} onClick={optidevOnclick}  >
                <boxGeometry args={[30,30,30]} />
                <meshStandardMaterial map={optidev}  />
            </mesh>
        )
    }
    return (
    <Canvas args={""} gl={{ logarithmicDepthBuffer: true, antialias: false }} camera={{ position: [5, 5, 100], fov: 55, near: 1, far: 20000 }}>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <Ocean />
      <Flex position={[-40,20,5]} flexWrap="wrap" flexDirection='row' size={[100, 200, 220]}>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 3.2} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[100, 5, 5]} />
        <Box margin={1} >
        <Project/>
         </Box> 
        <Box margin={1} >
        <Project />
        </Box>
        <Box margin={1} >
        <Project />
        </Box>
      </Flex>     
    </Canvas>
  )
}

export default Cube