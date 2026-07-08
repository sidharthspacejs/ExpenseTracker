const Background = () => {
  return (
    <>
      <div className="absolute  inset-0 bg-white z-0"></div>
      <div
        className="absolute inset-0 z-0 opacity-80 "
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      ></div>
      {/* Purple Glow */}
      <div
        className="
          absolute
          top-[-50px]
          w-[550px]
          h-[600px]
          rounded-full
          bg-violet-300/80
          left-[-100px]
          blur-[140px]
          z-0
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          left-50
          bottom-[-220px]
          w-[600px]
          h-[650px]
          rounded-full
          bg-cyan-300/70
          blur-[120px]
        "
      />

      {/*White Glow */}
      <div
        className="
      absolute
      top-[300px]
      left-[-260px]
      w-[600px]
      h-[650px]
      rounded-full
      bg-white
      opacity-80
      blur-[120px]
      "
      />
    </>
  );
};

export default Background;
