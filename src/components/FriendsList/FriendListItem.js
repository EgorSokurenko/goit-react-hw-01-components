import PropsType from "props-type";
import s from "./FriendList.module.css";
export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <span className={isOnline ? s.online : s.offline}></span>
    </li>
  );
}
FriendListItem.PropsType = {
  avatar: PropsType.string,
  name: PropsType.string,
  isOnline: PropsType.string,
};
