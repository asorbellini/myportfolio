import { useRef} from "react";
import { Canvas, render, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei"


const CanvasLoader = () => {
    const {progress} = useProgress()
    return (
        <Html 
            as='div'
            center
            style={{
                display:'flex', 
                justifyContent:'center', 
                alignItems: 'center',
                flexDirection: 'column'}}>
            <span className="canvas-loader" />
            <p style={{
                fontSize: 14, 
                color: '#F1F1F1', 
                fontWeight: 800, 
                marginTop:40,
                }}> {progress != 0 ? `${progress.toFixed(2)}%` : 'Loading...'}

            </p>

        </Html>
    )
}


const AvatarModel = () => {
    const { scene } = useGLTF("https://models.readyplayer.me/67ced1861c9aaeb7e6896a8e.glb?textureQuality=medium?emotion=smile", true, 
        (loader) => {loader.manager.onLoad = () => console.log("Modelo cargado con éxito")});
    const avatarRef = useRef();

    useFrame(({ clock }) => {
        if (avatarRef.current) {
            const time = clock.getElapsedTime();
            if (time >= 10){
                return
            }
            const waveFactor = Math.sin(time * 4) * 0.8; // Oscilación del saludo
            // Obtener los huesos
            const rightShoulder = avatarRef.current.getObjectByName("RightShoulder");
            const leftShoulder = avatarRef.current.getObjectByName("LeftShoulder");
            const rightForeArm = avatarRef.current.getObjectByName("RightForeArm");
            const rightHand = avatarRef.current.getObjectByName("RightHand");
            const spine = avatarRef.current.getObjectByName("Spine1");
            // rotaciones y movimientos 
            rightShoulder.rotation.y = -Math.PI/16
            rightShoulder.rotation.x = -Math.PI/8
            const forearmRotation = -Math.PI/2  - waveFactor * 0.5;  // Flexión dinámica del codo
            rightForeArm.rotation.set(0, -Math.PI/16, forearmRotation);
            rightHand.rotation.x = waveFactor*0.2;    
            // Balanceo del torso para hacer más natural el saludo
            if (spine) {
                spine.rotation.z = waveFactor * 0.05; // Balanceo del torso
            } 
            leftShoulder.rotation.y = -Math.PI/8
        }
    });

    return (
        <primitive 
            ref={avatarRef}
            object={scene}
            scale={1.5} 
            position={[0, -1.5, 0]}
            rotation={[0, 0, 0]} />
    );
};



useGLTF.preload("https://models.readyplayer.me/67ced1861c9aaeb7e6896a8e.glb?textureQuality=medium?emotion=smile")

const AvatarViewer = () => {
    return (
        <div className="relative w-[400px] h-[400px] overflow-hidden hover:cursor-grab">
            <Canvas className="w-full h-full">
                <ambientLight intensity={5} />
                <directionalLight position={[2, 5, 3]} intensity={2} />
                <OrbitControls enableZoom={false} />
                
                <Suspense fallback={<CanvasLoader />} >
                    <PerspectiveCamera makeDefault position={[0, 1.2, 3]}/>
                    <AvatarModel />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default AvatarViewer;
    