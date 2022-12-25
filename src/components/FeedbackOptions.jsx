import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnLabelArray = Object.keys(options);
  return (
    <>
      {btnLabelArray.map(btnLabel => (
        <button className={css.button} type="button" key={btnLabel} onClick={() => onLeaveFeedback(btnLabel)}>{btnLabel}</button>
      ))}
    </>
  )
};

FeedbackOptions.propTypes = {
 options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};