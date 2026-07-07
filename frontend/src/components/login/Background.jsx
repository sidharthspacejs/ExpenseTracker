const Background = () => {
  return (
    <>
      <div className="absolute  inset-0 bg-white z-0"></div>
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      ></div>
      <div className="absolute inset-0 z-0"></div>
    </>
  );
};

export default Background;
