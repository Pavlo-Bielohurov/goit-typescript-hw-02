import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import css from "./searchBar.module.css";

export default function searchImage({ onSubmit }) {
  const handleSearch = (values, actions) => {
    if (values.topic === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(values.topic);
    actions.resetForm();
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ topic: "" }} onSubmit={handleSearch}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="topic"
            placeholder="Search images and photos"
            autoFocus
          />
          <button type="submit" className={css.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
