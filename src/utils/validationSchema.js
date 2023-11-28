import * as Yup from "yup";

export let signinSchema = Yup.object({
  email: Yup.string().email("Incorrect").required("Email is Required"),
  pass: Yup.string().required("Password is Required"),
});
