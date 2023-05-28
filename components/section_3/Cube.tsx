import * as React from 'react'
import {Canvas, extend, useLoader, useThree, useFrame} from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import { Flex, Box } from '@react-three/flex'
import * as THREE from 'three'
import {  Camera, Mesh, Plane } from "three"
import { Water } from 'three-stdlib'
import dynamic from 'next/dynamic'

const Modal = dynamic(()=> import('./Modal'), {
  ssr: false
})
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
  const [id, setId] = React.useState(0)
  const [size, setSize] = React.useState(0);
  const showModal = (id:number)=>{
    setVisible(true)
    setId(id)
  }
  function Ocean() {
    const ref = React.useRef<THREE.PlaneGeometry | any>(null) 
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.webp')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    waterNormals.dispose()
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
    const optidev = useLoader(TextureLoader, '/optidev.webp')
    optidev.encoding = THREE.sRGBEncoding
    optidev.dispose()
    const boxRef = React.useRef<Mesh>(null)
      return(
        <mesh ref={boxRef} {...props} onClick={()=>{
          showModal(1)
          }}  >
            <boxGeometry args={[25,25,1]} />
            <meshStandardMaterial map={optidev} attach="material"  />
        </mesh>
      )
    }
  function Project2(props:Props){
    const termDocker = useLoader(TextureLoader, '/term.webp')
    termDocker.encoding = THREE.sRGBEncoding
    termDocker.dispose()
    const boxRef = React.useRef<Mesh>(null)
      return(
        <mesh ref={boxRef} {...props} onClick={()=>{
          showModal(2)
          }}  >
            <boxGeometry args={[25,25,1]} />
            <meshStandardMaterial map={termDocker} attach="material"  />
        </mesh>
      )
    }
  function Project3(props:Props){
    const fire = useLoader(TextureLoader, '/Firewebbapp.webp')
    fire.encoding = THREE.sRGBEncoding
    fire.dispose()
    const boxRef = React.useRef<Mesh>(null)
      return(
        <mesh ref={boxRef} {...props} onClick={()=>{
          showModal(3)
          }}  >
            <boxGeometry args={[25,25,1]} />
            <meshStandardMaterial map={fire} attach="material"  />
        </mesh>
      )
    }
    React.useEffect(() => {
      const s = () => {
        setSize(window.innerWidth); 
      }  
      s()
    }, [size]);
    return (
      <>
      {(size<600)?
      <Canvas camera={{ position: [0, 0, 110], }}>
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.5} />
      <Ocean />
      <Flex position={[-30,15, 0]} flexDirection='row'>
      <Sky  />
      <ambientLight intensity={0.35} />
      <directionalLight position={[100, 50, 4]} />
        <Box margin={1} >
        <Project1 />
         </Box> 
        <Box margin={1} >
        <Project2/>
         </Box> 
        <Box margin={1} >
        <Project3/>
         </Box> 
      </Flex>     
    </Canvas>
    :
    <Canvas camera={{ position: [0, 0, 85], }}>
    <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2.5} />
  <Ocean />
  <Flex position={[-30,15, 0]} flexDirection='row'>
  <Sky  />
  <ambientLight intensity={0.35} />
  <directionalLight position={[100, 50, 4]} />
    <Box margin={1} >
    <Project1 />
     </Box> 
    <Box margin={1} >
    <Project2/>
     </Box> 
    <Box margin={1} >
    <Project3/>
     </Box> 
  </Flex>     
</Canvas>
}
{visible && <Modal setVisible={setVisible} id={id} /> }
      </>
  )
}

export default Cube