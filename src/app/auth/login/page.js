"use client";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import TextInput from "../../components/inputs/TextInput";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid Email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const { control, handleSubmit, trigger } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    shouldFocusError: true,
    reValidateMode: "onBlur",
    mode: "all",
  });

  const onSubmit = async (postData) => {
    await signIn("credentials", { ...postData, redirect: true });
  };

  return (
    <div className="layout-content-container flex justify-center">
      <div className="flex flex-col">
        <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Welcome to Spendly
        </h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Sign in to your account
        </p>
        <form
          className="flex flex-col max-w-[480px]px-4 py-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex max-w-[480px] px-4 py-3">
            <TextInput
              control={control}
              name="email"
              label="Email"
              schema="email"
            />
          </div>
          <div className="flex max-w-[480px] px-4 py-3">
            <TextInput
              control={control}
              name="password"
              label="Password"
              type="password"
              schema="password"
            />
          </div>
          <div className="flex px-4 py-3 justify-center">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer primary"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          OR
        </p>
        <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Forgot your password?
        </p>
        <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Don't have an account? Sign up.
        </p>
      </div>
    </div>
  );
}
