import { nanoid } from "nanoid"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import css from './ContactForm.module.css'

export default function ContactForm({onAdd}) { 
    const id = nanoid()
    const nameId = nanoid();
    const phoneId = nanoid();

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    })

    const handleSubmit = (values)=> { 
        onAdd({
            id: id,
            name: values.name,
            number: values.number,
        })
        
    }
    
    return (
        <Formik initialValues={{
            id: "",
            name: "",
            number: "",
        }} onSubmit={handleSubmit} validationSchema={ validationSchema}>
            <Form className={css.form}>
                <label htmlFor={nameId}>Name</label>
                <Field className={css.input} id={nameId} name="name"></Field>
                <ErrorMessage className={css.error} name="name" component="span" />
                <label htmlFor={phoneId}>Number</label>
                <Field className={css.input} id={phoneId} name="number"></Field>
                <ErrorMessage className={css.error} name="number" component="span" />
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
    
}

    //    <div>
    //         <form action="">
    //             <label htmlFor={id}>Name</label>
    //             <input type="text" name="" id={id} />
    //             <label htmlFor="password">Number</label>
    //             <input type="tel" name="" id="password" />
    //             <button type="button">Add contact</button>
    //         </form>
    //    </div>