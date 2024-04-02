const colorStyles = {
  color: "text-white bg-green-400 px-6 py-5 m-2 rounded-xl ",
};

function Alert({ color, icon }) {
  const colorStyle = colorStyles[color];
  const handleClick = () => {
    window.alert("This is in alert component");
  };
  return (
    <button onClick={handleClick} className={`${colorStyle}`}>
      {icon} Alert Click
    </button>
  );
}
export default Alert;
