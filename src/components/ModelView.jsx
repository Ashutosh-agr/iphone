import React, {Suspense} from 'react';
import {Html, OrbitControls, PerspectiveCamera, View} from "@react-three/drei";
import Lights from "./Lights.jsx";
import Iphone from "./Iphone.jsx";
import * as Three from "three";
import Loader from "./Loader.jsx";

const ModelView = ({index, groupRef, controlRef, item, size, gsapType, setRotationState}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? '-right-full' : ''}`}
        >
        {/*Ambient Light */}
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makeDefault={true} position={[0,0,4]} />

            <Lights/>

            <OrbitControls
                makeDefault={true}
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new Three.Vector3(0,0,0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1} ? small : large`} position={[0,0,0]}>
                <Suspense fallback={<Loader/>}>
                    <Iphone
                        scale={index === 1 ? [15,15,15] : [17,17,17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    );
};

export default ModelView;