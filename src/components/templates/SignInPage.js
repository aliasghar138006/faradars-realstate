"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "@/components/templates/Signup.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

function SigninPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.error) {
      toast.success("ورود با موفقیت انجام شد");
      router.push("/account");
    } else {
      toast.error(res.error);
    }
  };
  return (
    <div className={styles.container}>
      <form>
        <div>
          <label htmlFor="email">ایمیل:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">کلمه عبور:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={signinHandler}>ورود</button>
        <div className={styles.link}>
          <Link href="signup">
            <p>حساب کاربری ندارید؟ ثبت نام</p>
          </Link>
        </div>
      </form>
      <div className={styles.image}>
        <Image
          src="/pictures/2bb70cc2f77993b57b37661c6e54f05b.jpg"
          width="350"
          height="200"
        />
      </div>
      <Toaster />
    </div>
  );
}

export default SigninPage;
