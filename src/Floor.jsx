export default function Floor() {
  return (
    <mesh receiveShadow position-y={-1.5} rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}
