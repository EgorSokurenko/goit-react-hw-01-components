import user from "./date/user.json";
import statisticalData from "./date/statistical-data.json";
import friends from "./date/friends.json";
import transactions from "./date/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statictics/Statistics";
import FriendList from "./components/FriendsList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}
