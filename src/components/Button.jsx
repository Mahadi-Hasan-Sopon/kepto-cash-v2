/* eslint-disable react/prop-types */
function Button({ children, type, style, className }) {
  return (
    <div>
      <button
        className={className ? className : ""}
        style={style ? style : {}}
        type={type ? type : "button"}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
