/** @format */

// project next (kumpulan library) -> run dev -> error karena library tidak ditemukan  ?
//                                                                             - package.json ada isinya? sesuai ?
//                                                                             - node_modules ? npm i

// html -> element  -> form -> melakukan pengisian data
// formik -> library untuk handle form
// yup -> melakukan validasi
// untuk install library di dalam project nextjs? package.json
// untuk mencatat library yang digunakan dan dipakai
// npm i -> install library dari library list yang ada di package.json
"use client";
import { api } from "@/utils/axios";
import axios, { AxiosError } from "axios";
import { Form, Formik, FormikProps, Field, useFormik } from "formik";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ini bukan email")
    .required("email tidak boleh kosong"),
  password: Yup.string()
    .required("password tidak boleh kosong")
    .min(5, "minimal 5 bro"),
});

interface IRegisterForm {
  email: string;
  password: string;
}

export default function Page() {
  const initialValues: IRegisterForm = {
    email: "",
    password: "",
  };

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit: () => {},
  //   validationSchema: LoginSchema,
  // });

  const submitRegister = async (values: IRegisterForm) => {
    try {
      console.log(values);
      // const res = await api.get("/users", {
      //   params: {
      //     email: values.email,
      //   }, //untuk queryParams?email=values.email
      // });

      // const checkUser = res.data as IRegisterForm[];

      // if (checkUser.length) throw new Error("user sudah terdaftar");

      await api.post("/users", values);
    } catch (error: unknown) {
      if (error instanceof AxiosError) console.log(error.response?.data);
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl mb-3">Register Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitRegister}
        validationSchema={LoginSchema}
      >
        {(props: FormikProps<IRegisterForm>) => {
          const { values, errors, touched, handleChange } = props;
          return (
            <Form className="flex flex-col gap-2 w-96 border rounded-md p-3">
              <div>
                <label htmlFor="email" className="">
                  Email :
                </label>
                <Field
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="masukan email andaaaa"
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className=" text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password">Password :</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="**********"
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div className=" text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <div>
                <button type="submit" className="px-2 py-1 border rounded-md">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
