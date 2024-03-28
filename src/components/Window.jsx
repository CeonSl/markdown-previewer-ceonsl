import propTypes from "prop-types";
import Expand from "./icons/Expand";
function Window({ children, windowType, className = "", handleClickExpand }) {
  return (
    <div className={`container-window ${className}`}>
      <div className="container-tab">
        <div className="tab">
          <h2>{windowType}</h2>
          <button
            onClick={() => {
              handleClickExpand(windowType);
            }}
          >
            <Expand />
          </button>
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
  handleClickExpand: propTypes.func,
};
