"use client";
import styles from "@/components/modules/Card.module.css";
import { sp } from "@/utils/operations/Number";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Card({ data: { _id, title, location, price }, operations = true }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/advertising/${_id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result.status === 200) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>{sp(price)} تومان</p>
      </div>
      {operations ? (
        <div className={styles.btn}>
          <div>
            <FaEye />
          </div>

          <Link href={`/account/edit/${_id}`}>
            <div>
              <MdEdit />
            </div>
          </Link>

          <div onClick={deleteHandler}>
            <MdDelete />
          </div>
        </div>
      ) : (
        <div className={styles.details}>جزییات آگهی</div>
      )}
    </div>
  );
}

export default Card;
