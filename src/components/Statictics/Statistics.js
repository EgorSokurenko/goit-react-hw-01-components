import PropsType from "props-type";
import s from "./Statistics.module.css";
export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.block}>
        {title && <h2 className={s.title}>Upload stats</h2>}

        <ul className={s.statList}>
          {stats.map((object) => (
            <li className={s.item} key={object.id}>
              <span className={s.label}>{object.label}</span>
              <span className={s.percentage}>{object.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
Statistics.PropsType = {
  title: PropsType.string,
  stats: PropsType.array,
};
