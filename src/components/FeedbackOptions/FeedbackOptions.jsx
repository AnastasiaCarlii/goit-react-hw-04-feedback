import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackBtnList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.feedbackBtnItem}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
