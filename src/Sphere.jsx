import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

export default function Sphere() {
  const PATH = '/static/textures/sphere/';
  const props = useTexture({
    map: PATH + 'color.jpg',
    displacementMap: PATH + 'height.png',
    normalMap: PATH + 'normal.jpg',
    roughnessMap: PATH + 'roughness.jpg',
    aoMap: PATH + 'ao.jpg',
  });

  return (
    <mesh castShadow rotation-y={Math.PI / 12} position-y={-0.5}>
      <sphereGeometry />
      <meshStandardMaterial
        displacementScale={0.3}
        {...props}
        side={DoubleSide}
      />
    </mesh>
  );
}
