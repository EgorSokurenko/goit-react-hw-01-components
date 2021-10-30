import PropsType from "props-type";
import s from "./Profile.module.css";
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stats__block}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.stats__block}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.stats__block}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.PropsType = {
  name: PropsType.string,
  tag: PropsType.string,
  avatar: PropsType.string,
  location: PropsType.string,
  stats: PropsType.object,
};
