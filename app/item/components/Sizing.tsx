import Item from "../model";
import styles from "./Sizing.module.css";

export default function Sizing({ item }: { item: Item }) {
  const getRows = () => {
    const rows = [];

    for (const sizing of item.sizing) {
      for (const [key, value] of Object.entries(sizing)) {
        rows.push(
          <tr key={key} className={styles.restTableHead}>
            <td className={styles.topTableHead}>{key}</td>
            {(value as string[]).map((val, index) => (
              <td key={index}>{val}</td>
            ))}
          </tr>
        );
      }
    }

    return rows;
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.topTableHead}></th>
            <th className={styles.restTableHead}>Length</th>
            <th className={styles.restTableHead}>Width</th>
            <th className={styles.restTableHead}>Sleeve</th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
      <div className={styles.logo}>
        {/* <Image
          src="assets/logo.png"
          alt="Logo"
          // style={{ width: "60px", height: "60px" }}
          width={60}
          height={60}
        /> */}
      </div>
    </div>
  );
}
