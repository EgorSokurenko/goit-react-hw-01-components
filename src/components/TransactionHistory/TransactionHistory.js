import PropsType from "props-type";
import s from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th className={s.titleTable}>Type</th>
          <th className={s.titleTable}>Amount</th>
          <th className={s.titleTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={item.key}>
              <td className={index % 2 === 0 ? s.valueSecond : s.value}>
                {item.type}
              </td>
              <td className={index % 2 === 0 ? s.valueSecond : s.value}>
                {item.amount}
              </td>
              <td className={index % 2 === 0 ? s.valueSecond : s.value}>
                {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.PropsType = {
  items: PropsType.array,
};
