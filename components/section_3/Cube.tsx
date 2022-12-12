import * as React from 'react'
import {Canvas, extend, useLoader, useThree, useFrame} from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import { Flex, Box } from '@react-three/flex'
import * as THREE from 'three'
import {  Camera, Mesh, Plane } from "three"
import { Water } from 'three-stdlib'
import Modal from './Modal'

extend({ Water })

type Props = {
  
}
declare global {
  namespace JSX {
      interface IntrinsicElements {
          water: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    args?: any
  }
}

const Cube = () => {
  const [visible, setVisible] = React.useState(false)
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
  function Project1(props:Props){
    const optidev = useLoader(TextureLoader, '/optidev.PNG')
    optidev.encoding = THREE.sRGBEncoding
    const boxRef = React.useRef<Mesh>(null)
      return(
        <mesh ref={boxRef} {...props} onClick={optidevOnclick}  >
            <boxGeometry args={[25,25,1]} />
            <meshStandardMaterial map={optidev} attach="material"  />
        </mesh>
      )
    }
  function Project2(props:Props){
    const docker = useLoader(TextureLoader, '/docker.jpg')
    docker.encoding = THREE.sRGBEncoding
    const boxRef = React.useRef<Mesh>(null)
      return(
        <mesh ref={boxRef} {...props} onClick={optidevOnclick}  >
            <boxGeometry args={[25,25,1]} />
            <meshStandardMaterial map={docker} attach="material"  />
        </mesh>
      )
    }
  function Project3(props:Props){
    const logo = useLoader(TextureLoader, '/logo.PNG')
    logo.encoding = THREE.sRGBEncoding
    const boxRef = React.useRef<Mesh>(null)
      return(
        <mesh ref={boxRef} {...props} onClick={optidevOnclick}  >
            <boxGeometry args={[25,25,1]} />
            <meshStandardMaterial map={logo} attach="material"  />
        </mesh>
      )
    }
    return (
<<<<<<< HEAD
      <>
      <Canvas className='rounded shadow-xl' args={""} gl={{ logarithmicDepthBuffer: true, antialias: false }} camera={{ position: [0, 0, 70], }}>
=======
      <Canvas className='rounded shadow-xl' args={""} gl={{ logarithmicDepthBuffer: true, antialias: false }} camera={{ position: [0, 0, 85], }}>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.5} />
>>>>>>> 4ac6f660ce093e23d0a51345b9930cfa4c38c894
      <Ocean />
      <Flex position={[-30,15, 0]} flexDirection='row'>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      
      <ambientLight intensity={0.35} />
      <directionalLight position={[1, 500, 4]} />
        <Box margin={1} >
        <Project1/>
         </Box> 
        <Box margin={1} >
        <Project2/>
         </Box> 
        <Box margin={1} >
        <Project3/>
         </Box> 
      </Flex>     
    </Canvas>
    <Modal visible={visible} />
    <button onClick={()=>{
        setVisible(true)
      }}>open Modal</button>
      </>
  )
}

export default Cube