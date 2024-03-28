import propTypes from "prop-types";

function Window({ children, windowType, className = "" }) {
  return (
    <div className={`container-window ${className}`}>
      <div className="container-tab">
        <div className="tab">
          <h2>{windowType}</h2>
          <button>icon</button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Window;

Window.propTypes = {
  children: propTypes.node,
  windowType: propTypes.string,
  className: propTypes.string,
};
