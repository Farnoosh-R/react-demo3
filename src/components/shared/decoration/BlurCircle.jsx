const BlurCircle = ({ width = 50, height = 50, style }) => {
  return (
    <div
      className="absolute backdrop-blur-xs border border-white bg-white/20 rounded-full flex items-center justify-center"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
      }}
    >
      <div
        className="bg-white rounded-full"
        style={{
          width: `${width / 3}px`,
          height: `${height / 3}px`,
        }}
      />
    </div>
  );
};

export default BlurCircle;