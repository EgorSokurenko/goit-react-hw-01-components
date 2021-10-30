import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        return (
          <li className={s.item} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
