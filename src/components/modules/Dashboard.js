import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/components/modules/Dashboard.module.css";
import User from "@/models/User";
import Connect from "@/utils/Connect";
import { getServerSession } from "next-auth";

async function Dashboard() {
  const {
    user: { email },
  } = await getServerSession(authOptions);
  await Connect();
  const { createdAt } = await User.findOne({ email });
  return (
    <div className={styles.container}>
      <h3>خوش آمدید🌹</h3>
      <div className={styles.info}>
        <h4>اطلاعات کاربر:</h4>
        <div>
          <span>نام کاربری:</span>
          <p>{email}</p>
        </div>
        <div>
          <span>تاریخ عضویت:</span>
          <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
