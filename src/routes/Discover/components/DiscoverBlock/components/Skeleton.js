const Skeleton = () => {
  return (
    <div
      data-testid="skeleton-item"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="skeleton skeleton--rectangle"></div>
      <div className="skeleton skeleton--body"></div>
    </div>
  );
};

export default Skeleton;
