import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ state, countTotalFeedback, countPercentage }) => (
  <div >
    {countTotalFeedback(state) > 0
      ? <div className={css.statWrapper}>
        <p className={css.statistics}>Good: {state.good}</p>
        <p className={css.statistics}>Neutral: {state.neutral}</p>
        <p className={css.statistics}>Bad: {state.bad}</p>
        <p className={css.statistics} >Total: {countTotalFeedback(state)}</p>
        <p className={css.statistics}>Positive feedback: {state.good > 0 ? countPercentage(state) : 0}%</p>
        </div>
      : <p className={css.statistics}>There is no feedback</p>}
  </div>  
);

Statistics.propTypes = {
 state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPercentage: PropTypes.func.isRequired,
};














// export const Statistics = ({state, countTotalFeedback, countPercentage}) => (
//   <>
//   <p>Good: {state.good}</p>
//   <p>Neutral: {state.neutral}</p>
//   <p>Bad: {state.bad}</p>
//   <p>Total: {countTotalFeedback(state)}</p>
//   <p>Positive feedback: {state.good > 0 ? countPercentage(state) : 0}%</p>
//   </>
// );