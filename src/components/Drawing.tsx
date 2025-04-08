import { Stage, Layer, Line } from "react-konva";
import { FC } from "react";

const Drawing: FC<{ className?: string }> = ({ className }) => {
  return (
    <Stage
      width={200}
      height={600}
      containerClassName={className}
      draggable
      rotationDeg={30}
    >
      <Layer>
        {/* Líneas del asterisco */}
        <Line
          points={[100, 50, 100, 150]} // Línea vertical
          stroke="#20201f"
          strokeWidth={10}
          lineCap="round"
        />
        <Line
          points={[50, 100, 150, 100]} // Línea horizontal
          stroke="#20201f"
          strokeWidth={10}
          lineCap="round"
        />
        <Line
          points={[60, 60, 140, 140]} // Diagonal descendente
          stroke="#20201f"
          strokeWidth={10}
          lineCap="round"
        />
        <Line
          points={[140, 60, 60, 140]} // Diagonal ascendente
          stroke="#20201f"
          strokeWidth={10}
          lineCap="round"
        />
      </Layer>
    </Stage>
  );
};

export default Drawing;
