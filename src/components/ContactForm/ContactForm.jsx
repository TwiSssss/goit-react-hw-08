import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialState = {
    username: "",
    number: "",
};
const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});
const ContactForm = () => {
    const dispatch = useDispatch();
    const handleAddContact = (values, { resetForm }) => {
        dispatch(
            addContact({
                id: crypto.randomUUID(),
                name: values.username,
                number: values.number,
            })
        );
        resetForm();
    };
    return (
        <Formik validationSchema={FeedbackSchema} initialValues={initialState} onSubmit={handleAddContact}>
            <Form className={style.formBox}>
                <label className={style.formLabel}>Name</label>
                <Field className={style.formInput} type="text" name="username" />
                <ErrorMessage className={style.formError} name="username" component="div" />
                <label className={style.formLabel}>Number</label>
                <Field className={style.formInput} type="tel" name="number" />
                <ErrorMessage className={style.formError} name="number" component="div" />
                <button className={style.formButton} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
