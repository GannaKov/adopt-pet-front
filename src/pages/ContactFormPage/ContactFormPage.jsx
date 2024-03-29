import styles from "./ContactFormPage.module.css";
import { useId } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { sendContactForm } from "../../services/requests";
import Button from "@mui/material/Button";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  message: "",
  subject: "I want to adopt a pet",
};
const FeedbackSchema = Yup.object({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email!")
    .required("Required"),
  message: Yup.string()
    .min(3, "Too short")
    .max(500, "Too long")
    .required("Required"),
  subject: Yup.string().required("Required"),
});
const ContactFormPage = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const subjectFieldId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      const res = await sendContactForm(values);
      if (res.code === 201) {
        Report.success("Success", "Thank you for your message", "Okay", {
          messageFontSize: "1.1rem",
          titleFontSize: "1.1rem",
        });
      }
      actions.resetForm();
    } catch (error) {
      if (error.response.status === 500) {
        Report.failure("Failure", error.response.data.message, "Okay", {
          messageFontSize: "1.1rem",
          titleFontSize: "1.1rem",
        });
      }
    }
  };
  return (
    <div className={styles.pageWrp}>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
          >
            <Form className={styles.contactForm}>
              <ErrorMessage
                name="subject"
                component="span"
                className={styles.contactFormError}
              />
              <label
                className={styles.contactFormLabel}
                htmlFor={subjectFieldId}
              >
                Subject<span style={{ color: "#d32828" }}>&#42;</span>
              </label>
              <Field
                as="select"
                className={styles.contactFormField}
                name="subject"
                id={subjectFieldId}
              >
                <option value="I want adopt">I want to adopt a pet</option>
                <option value="Pet for Adopt">I have a pet for adoption</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                className={styles.contactFormError}
                name="username"
                component="span"
              />
              <label className={styles.contactFormLabel} htmlFor={nameFieldId}>
                Username<span style={{ color: "#d32828" }}>&#42;</span>
              </label>
              <Field
                className={styles.contactFormField}
                type="text"
                name="username"
                id={nameFieldId}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.contactFormError}
              />
              <label className={styles.contactFormLabel} htmlFor={emailFieldId}>
                Email<span style={{ color: "#d32828" }}>&#42;</span>
              </label>
              <Field
                className={styles.contactFormField}
                type="email"
                name="email"
                id={emailFieldId}
              />
              <ErrorMessage
                name="message"
                component="span"
                className={styles.contactFormError}
              />
              <label className={styles.contactFormLabel} htmlFor={msgFieldId}>
                Message<span style={{ color: "#d32828" }}>&#42;</span>
              </label>
              <Field
                className={styles.contactFormTextarea}
                as="textarea"
                name="message"
                id={msgFieldId}
                rows="8"
              />

              <Button
                variant="outlined"
                style={{ width: 140, margin: "0 auto" }}
                type="submit"
              >
                Send
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;
