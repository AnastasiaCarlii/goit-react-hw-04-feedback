import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticsItem}>good:{good}</li>
      <li className={css.statisticsItem}>neutral:{neutral}</li>
      <li className={css.statisticsItem}>bad:{bad}</li>
      <li className={css.statisticsItem}>total:{total}</li>
      <li className={css.statisticsItem}>
        Positive feedback:{positivePercentage}%
      </li>
    </ul>
  );
};
