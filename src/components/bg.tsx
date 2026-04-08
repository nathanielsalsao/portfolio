import FloatingLines from "./FloatingLines";

export default function Bg() {
  return (
    <div
      style={{
        position: "absolute",  
        inset: 0,
        backgroundColor: "#020202",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[15, 15, 15]}
        lineDistance={[1.2, 1.2, 1.2]}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        linesGradient={undefined}
        topWavePosition={undefined}
        middleWavePosition={undefined}
      />
    </div>
  );
}