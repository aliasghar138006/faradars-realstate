"use client";
import styles from "@/components/modules/Card.module.css";
import { sp } from "@/utils/operations/Number";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Card({
  data: { _id, title, location, price },
  operations = true,
  role = "USER",
}) {
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

  const publishHandler = async () => {
    const res = await fetch(`/api/admin/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.status === 200) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(toast.message);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>{sp(price)} تومان</p>
      </div>
      {role === "USER" ? (
        operations ? (
          <div className={styles.btn}>
            <Link href={`/advertising/${_id}`}>
              <div>
                <FaEye />
              </div>
            </Link>

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
          <Link href={`/advertising/${_id}`}>
            <div className={styles.details}>جزییات آگهی</div>
          </Link>
        )
      ) : (
        <div className={styles.admin}>
          <Link href={`/advertising/${_id}`}>
            <div>مشاهده آگهی</div>
          </Link>
          <div onClick={deleteHandler}>حذف آگهی</div>
          <div onClick={publishHandler}>انتشار آگهی</div>
        </div>
      )}
    </div>
  );
}

export default Card;
