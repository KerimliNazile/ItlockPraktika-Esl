import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import './index.scss'

const FormAdd = ({getProduct}) => {
    async function addProduct(values) {
        const res = await axios.post("http://localhost:5000/modes", values)
        getProduct()
    }
    const formik = useFormik({
        initialValues: {
            text: '',
            title: '',
            image: '',
        },

        onSubmit: values => {
            addProduct(values)
        },
    });
    return (
        <div className="FormAdd">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="text">Text</label>
                <input
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.text}
                />
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

                <label htmlFor="Image">Image </label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <button type="submit">Add</button>
            </form>
        </div>

    );
};
export default FormAdd