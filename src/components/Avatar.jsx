import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

    useEffect(() => {
        if (avatarRef.current) {
            console.log("RightArm:", avatarRef.current.getObjectByName("RightArm"));
            console.log("RightForeArm:", avatarRef.current.getObjectByName("RightForeArm"));
            console.log("RightHand:", avatarRef.current.getObjectByName("RightHand"));
            console.log(avatarRef.current)
        }
    }, []);

    useFrame(({ clock }) => {
        if (avatarRef.current) {
            const time = clock.getElapsedTime();
            const waveFactor = Math.sin(time * 4) * 0.8; // Oscilación del saludo
            const raiseFactor = (Math.sin(time * 2 - Math.PI/2)+1)/2; // Movimiento arriba-abajo
    
            // Obtener los huesos
            const rightShoulder = avatarRef.current.getObjectByName("RightShoulder");
            const rightArm = avatarRef.current.getObjectByName("RightArm");
            const rightForeArm = avatarRef.current.getObjectByName("RightForeArm");
            const rightHand = avatarRef.current.getObjectByName("RightHand");
            const spine = avatarRef.current.getObjectByName("Spine1");
    
            // Ahora movemos el RightArm con respecto al RightShoulder
            if (rightArm) {
                rightArm.rotation.set(0, Math.PI/3, 0); // Posición base para el brazo
            }
    
            // Mover el RightForeArm en relación con el RightArm
            if (rightForeArm) {
                const forearmRotation = Math.PI/2  + waveFactor * 0.5; // Flexión dinámica del codo
                rightForeArm.rotation.set(forearmRotation, Math.PI/2, waveFactor);
            }
    
            // Mover la mano para que esté alineada hacia adelante
            if (rightHand) {
                const handRotation = waveFactor * 5 ; // Flexión dinámica del codo
                rightForeArm.rotation.set(0,  Math.PI/3, handRotation);
            }
    
            // Ahora animamos el brazo de abajo hacia arriba
            if (rightArm && rightShoulder) {
                const armRaiseAngle = Math.PI/6 * raiseFactor; // Ángulo de levantamiento
                const forearmRotation = Math.PI/3  ;
                // Mover el brazo hacia arriba desde el codo
                rightShoulder.rotation.y = -Math.PI/16
                rightArm.rotation.x = armRaiseAngle;
                rightArm.rotation.z = waveFactor * 0.3;
                rightForeArm.rotation.z = Math.PI/12 * raiseFactor - forearmRotation;
                rightHand.rotation.y =  forearmRotation/2 - Math.PI/2 * raiseFactor;
                rightHand.rotation.x = waveFactor*0.5;
            }
    
            // Ligero balanceo del torso para hacer más natural el saludo
            if (spine) {
                spine.rotation.z = waveFactor * 0.05; // Balanceo del torso
            }
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
    
useGLTF.preload("https://models.readyplayer.me/67ced1861c9aaeb7e6896a8e.glb?quality=medium")

const AvatarViewer = () => {
    return (
        <div className="relative w-[400px] h-[400px] overflow-hidden hover:cursor-grab">
            <Canvas className="w-full h-full">
                <ambientLight intensity={5} />
                <directionalLight position={[2, 5, 3]} intensity={2} />
                <OrbitControls enableZoom={false} />
                
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 1, 3]}/>
                    <AvatarModel />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default AvatarViewer;
    