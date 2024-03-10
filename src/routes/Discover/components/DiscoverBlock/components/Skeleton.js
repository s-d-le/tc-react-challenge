const Skeleton = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="skeleton skeleton--rectangle"></div>
      <div className="skeleton skeleton--body"></div>
    </div>
  );
};

export default Skeleton;
