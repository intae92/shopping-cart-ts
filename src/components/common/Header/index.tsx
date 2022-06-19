import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div className={styles.icon}>
          <GiShoppingCart size={40} />
        </div>
        <div className={styles.title}>WOOWA SHOP</div>
      </div>
      <div className={styles.container_nav}>
        <Link to={"/"}>장바구니</Link>
        <Link to={"/"}>주문목록</Link>
      </div>
    </div>
  );
};

export default Header;
