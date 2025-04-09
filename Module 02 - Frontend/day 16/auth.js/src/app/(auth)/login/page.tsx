/** @format */
"use client";
import React from "react";
import Google from "@/../public/Google.svg";
import Facebook from "@/../public/Facebook.svg";

import Image from "next/image";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
export default function Page() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirectTo: "/",
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="w-full max-w-96 flex flex-col gap-12">
      <div>
        <h1 className=" font-semibold text-3xl">Welcome Back</h1>
        <p className="mt-4">
          {`Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.`}
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            className="bg-[#F7FBFF] w-full rounded-[12px] border border-[#D4D7E3] p-4"
            placeholder="Example@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              className="bg-[#F7FBFF] w-full rounded-[12px] border border-[#D4D7E3] p-4"
              placeholder="* * * * * * * * * *"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-[#1E4AE9]">
              Forgot Password?
            </a>
          </div>

          <button className="text-white bg-[#162D3A] p-4 rounded-[12px]">
            Sign in
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-4 text-[#294957]">
        <div className="flex p-[10px] justify-center items-center  gap-[10px]">
          <hr className="w-full h-[1px] bg-[#CFDFE2] border-0 " />
          Or
          <hr className="w-full h-[1px] bg-[#CFDFE2] border-0 " />
        </div>

        <button className=" bg-[#F3F9FA] p-4 rounded-[12px] flex justify-center items-center gap-4">
          <Image
            src={Google}
            height={28}
            width={28}
            className="w-7 h-7"
            alt="google "
          ></Image>{" "}
          Sign in with Google
        </button>

        <button className=" bg-[#F3F9FA] p-4 rounded-[12px] flex justify-center items-center gap-4">
          <Image
            src={Facebook}
            height={28}
            width={28}
            className="w-7 h-7"
            alt="google "
          ></Image>{" "}
          Sign in with Facebook
        </button>
      </div>

      <center>
        {`Don't have an account? `}

        <a href="#" className="text-[#1E4AE9]">
          Sign Up
        </a>
      </center>
    </div>
  );
}
