import "./style.css";

const Button = ({ style, title, className, onClick = () =>{} }) => {
  return (
    <div onClick={onClick} className={className + " button"} style={style}>
      {" "}
      {title}{" "}
    </div>
  );
};

export default Button;
