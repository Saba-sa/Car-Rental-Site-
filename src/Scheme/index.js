import * as Yup from "yup";

export const validationSchema = Yup.object({
  fname: Yup.string()
    .matches(/^[A-Za-z]+$/, "First name can only contain letters")
    .required("First name is required"),
  lname: Yup.string()
    .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Subject can only contain letters and spaces")
    .required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
