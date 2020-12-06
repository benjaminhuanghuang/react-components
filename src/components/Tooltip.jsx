import React, { cloneElement, useState, useRef, useEffect } from "react";

import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//
import './Tooltip.css'

const TooltipContent = ({ tooltipClass, content, position, tooltipPosition }) => {
  const tooltipEl = useRef();
  const targetEl = document.getElementById("root");

  useEffect(() => {
    const el = tooltipEl.current;
    if (el) {
      setTimeout(() => {
        if (tooltipPosition === "top") {
          el.style.top = `${position.top - el.clientHeight}px`;
          el.style.left = `${position.left}px`;
          el.style.trfansform = `translate(-50%, -15px) scale(1)`;
        }
      }, 20);
    }
  }, []);

  const output = <div className={tooltipClass} ref={tooltipEl}>{content}</div>;
  return targetEl ? ReactDOM.createPortal(output, targetEl) : output;
};

TooltipContent.prototype = {
  content: PropTypes.any.isRequired,
  tooltipClass: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  tooltipPosition: PropTypes.string.isRequired,
};

const Tooltip = ({ children, position, content }) => {
  const [elPosition, setElPosition] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false);
  let tooltipClass = "tooltip";

  const getPosition = (e) => {
    const domRect = e.currentTarget.getBoundingClientRect(); //
    if (position === "top") {
      setElPosition({ top: domRect.top, left: domRect.left + domRect.width / 2 });
    }
    setShow(true);
  };

  if (position == "top") {
    tooltipClass += " tooltip--top";
  }

  return (
    <>
      {show && (
        <TooltipContent tooltipClass={tooltipClass} position={elPosition} content={content} tooltipPosition={position} />
      )}
      {cloneElement(children, { ...children.props, onMouseOver: getPosition, onMouseLeave: () => setShow(false) })}
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  position: PropTypes.oneOfType([
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "left-top",
    "left-bottom",
    "right-top",
    "right-bottom"
  ]).isRequired,
};

export default Tooltip;
