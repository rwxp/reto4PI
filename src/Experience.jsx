import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import Sphere from './Sphere';
import Floor from './Floor';
import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import {
  DirectionalLightHelper,
  PointLightHelper,
  HemisphereLightHelper,
  // RectAreaLightHelper,
  SpotLightHelper,
} from 'three';

export default function Experience() {
  // const directionalLightRef = useRef();
  // const hemisphereLightRef = useRef();
  // const pointLightRef = useRef();
  // const rectAreaRef = useRef();
  const spotLightRef = useRef();

  // useHelper(directionalLightRef, DirectionalLightHelper, 1);
  // useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
  // useHelper(pointLightRef, PointLightHelper, 1);
  // useHelper(rectAreaRef, RectAreaLightHelper, 1);
  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[0, 2, -10]}
        intensity={1.5}
      /> */}
      {/* <hemisphereLight
        ref={hemisphereLightRef}
        castShadow
        position={[0, 2, -10]}
        intensity={5}
      /> */}
      {/* <pointLight
        ref={pointLightRef}
        castShadow
        position={[0, 2, -10]}
        intensity={1.5}
      /> */}
      {/* <rectAreaLight
        ref={rectAreaRef}
        castShadow
        position={[0, 2, -10]}
        intensity={1.5}
      /> */}
      {/* <spotLight
        ref={spotLightRef}
        castShadow
        position={[0, 2, -10]}
        intensity={19}
      /> */}
      <ambientLight intensity={0.5} />
      <Sphere />
      <Floor />
    </>
  );
}
