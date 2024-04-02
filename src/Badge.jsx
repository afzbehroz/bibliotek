const colorStyles = {
    color: "text-white bg-red-400 bg-opacity-80",
  };
  const sizeStyle = {
    size: "px-1 py-3 m-3 rounded-xl w-14 h-14",
  };
  
  function Badge({ color, size, icon }) {
    const badgeColor = colorStyles[color];
    const badgeSize = sizeStyle[size];
    return <div className={`${badgeColor} ${badgeSize}`}>{icon} Badge</div>;
  }
  
  export default Badge;
  