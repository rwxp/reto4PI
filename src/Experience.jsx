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
  SpotLightHelper,
} from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

export default function Experience() {
  // const directionalLightRef = useRef();
  // const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  // const rectLightRef = useRef();
  // const spotLightRef = useRef();

  // useHelper(directionalLightRef, DirectionalLightHelper, 1);
  // useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
  useHelper(pointLightRef, PointLightHelper, 1);
  // useHelper(rectLightRef, RectAreaLightHelper, 1);
  // useHelper(spotLightRef, SpotLightHelper, 1);

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
      <pointLight
        ref={pointLightRef}
        castShadow
        position={[0, 2, -10]}
        intensity={1.5}
      />
      {/* <rectAreaLight
        ref={rectLightRef}
        castShadow
        position={[0, 3, -5]}
        intensity={2.5}
        color="red"
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
