import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  password: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is Required"),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Your Password is too short"),
  })
  .required();

const Hook = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <main className="min-h-screen bg-black">
      <form className="HookForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="HookLabel">Name</label>
        <input {...register("name")} className="HookInput" />
        {errors.name && <p>{errors.name?.message}</p>}

        <label className="HookLabel">Password</label>
        <input {...register("password")} className="HookInput" />
        {errors.password && <p>{errors.password?.message}</p>}
        <input type="submit" className="HookSubmit" />
        {/* <button
          type="button"
          onClick={() => {
            setValue("name", "password");
          }}
        >
          SetValue
        </button> */}
      </form>
    </main>
  );
};

export default Hook;
