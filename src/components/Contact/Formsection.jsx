import { useFormik } from "formik";
import { validationSchema } from "../../Scheme/index";
import Spinner from "../spiner/Spinner";
import { useState } from "react";
import tick from "../Tick/tick.gif";

const Formsection = () => {
  const [formSubmission, setFormSubmission] = useState(false);
  const [showTick, setShowTick] = useState(false);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setFormSubmission(true);

      setTimeout(() => {
        setFormSubmission(false);
        setShowTick(true);
        setTimeout(() => {
          setShowTick(false);
        }, 1000);
      }, 2000);
    },
  });

  return (
    <div>
      {formSubmission ? (
        <Spinner />
      ) : showTick ? (
        <div className="w-full h-full flex items-center justify-center">
          <img src={tick} alt="tick gif" />
        </div>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="ml-auto space-y-4 w-full"
        >
          <h1 className="text-2xl font-extrabold">Got a question?</h1>
          <p className="text-gray-500 dark:text-white">
            We are here to answer.
          </p>

          <div>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname}
            />
            {formik.touched.fname && formik.errors.fname ? (
              <div className="text-red-500 text-sm">{formik.errors.fname}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lname}
            />
            {formik.touched.lname && formik.errors.lname ? (
              <div className="text-red-500 text-sm">{formik.errors.lname}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 text-sm">
                {formik.errors.subject}
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Message"
              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff] resize-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Formsection;
