import styles from "@/components/modules/Card.module.css";
import { sp } from "@/utils/operations/Number";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Card({ id, title, location, price }) {
  return (
    <div className={styles.container}>
      <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>{sp(price)} تومان</p>
      </div>
      <div className={styles.btn}>
        <div>
          <FaEye />
        </div>
        <Link href={`/account/edit/${id}`}>
          <div>
            <MdEdit />
          </div>
        </Link>
        <div>
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default Card;
