import PropsType from "props-type";
import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          ></FriendListItem>
        );
      })}
    </ul>
  );
}
FriendList.PropsType = {
  friends: PropsType.array,
};
