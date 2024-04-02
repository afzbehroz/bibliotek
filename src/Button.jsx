
const colorStyles = {
  red: "bg-orange-500",
  blue: "bg-blue-400",
};

const sizeStyles = {
  medium: "px-6 py-5 m-2 rounded-xl text-white",
  large: "px-8 py-6 m-2 rounded-xl text-white",
};

function Button({ color, size, disabled, children }) {
  const colorClass = colorStyles[color];
  const sizeClass = sizeStyles[size];

  return (
    <button
      disabled={disabled}
      size={size}
      className={`${colorClass} ${sizeClass}`}
    >
      {children}
    </button>
  );

  //<button className={color}>{children}</button>;
}

export default Button;

// const props = {
//     color: "red",
//     children: "hej",
//   };
//   const { color, children } = props;
