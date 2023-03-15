import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { baseApi } from "./../../lib/baseApi";
import { useAuth } from "../../context/auth.context";
import { getTokenFromLocalCookie } from "../../lib/auth";

type FormData = {
  identifier: string;
  password: string;
};

const schema = yup
  .object({
    // email: yup
    //   .string()
    //   .required("Email is Required.")
    //   .matches(
    //     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    //     "Invalid email address."
    //   ),
    identifier: yup.string().required("User is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();

const LoginForm = () => {
  const { login, success, message, jwt, user } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async ({
    identifier,
    password,
  }) => {
    await login(identifier, password);
    console.log(identifier, password);
  };

  // const token = getTokenFromLocalCookie();
  console.log(user);

  return (
    <main className="Login">
      <div></div>
      <div className="LoginForm">
        <h2 className="LoginForm-Title">Best Company</h2>
        <form className="LoginForm-Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="LoginForm-Field">
            <label className="LoginLabel">User:</label>
            <input {...register("identifier")} className="LoginInput" />
            {errors.identifier && (
              <p className="v-error">{errors.identifier?.message}</p>
            )}
          </div>

          <div className="LoginForm-Field">
            <label className="LoginLabel">Password:</label>
            <input {...register("password")} className="LoginInput" type="password"/>
            {errors.password && (
              <p className="v-error">{errors.password?.message}</p>
            )}
          </div>

          <input
            type="submit"
            className="btn-default LoginSubmit"
            value="Log In"
          />
          {message && (
            <p className={success === 0 ? "text-red-500" : "text-green-400"}>
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
