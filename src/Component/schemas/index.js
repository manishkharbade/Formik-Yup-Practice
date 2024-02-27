import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().min(2).max(6).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please provide a valid Email Address"),
});
