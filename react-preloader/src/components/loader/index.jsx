import "./style.css";

const size = {
  Small: "small",
  Medium: "medium",
  Large: "large",
};

function Loader({ loaderSize = size.Small }) {
  console.log(loaderSize);

  let className = "loader";

  className += ` ${loaderSize}`;

  console.log(className);

  return <div className={className}></div>;
}

export default Loader;
