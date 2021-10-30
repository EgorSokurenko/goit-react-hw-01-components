import s from "./FriendList.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
      <span className={isOnline ? s.online : s.offline}></span>
    </div>
  );
}