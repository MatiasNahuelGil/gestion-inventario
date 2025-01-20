import "./FormCreateProduct.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import { axiosInstance } from "../../services/axios.config";
import styled from "styled-components";

const FormContainer = styled.section`
  width: 500px;
`


export default function FormCreateProduct() {
  const initialValues = {
    name: "",
    description: "",
    image: "",
    stock: 0,
    price: 0,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "El nombre es demasiado corto")
      .max(20, "El nombre es muy extenso")
      .required("El campo es obligatorio"),
    description: Yup.string()
      .min(5, "La descripción es demasiado corta")
      .max(200, "La descripción es muy extensa")
      .required("El campo es obligatorio"),
    image: Yup.string().required("El campo es obligatorio"),
    stock: Yup.number().required("El campo es obligatorio"),
    price: Yup.number().required("El campo es obligatorio"),
  });

  return (
    <>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { isSubmitting }) => {
          console.log(values);
          axiosInstance
            .post("/", values)
            .then((response) => {
              if (response.status == 201) {
                console.log(response);
                isSubmitting(false);
              } else {
                throw new Error(`Error en la solicitud, ${response.status}`);
              }
            })
            .catch((error) => console.log(error));
        }}
      >
        {({ values, isSubmitting, errors, touched }) => (
         <FormContainer>
          <Form className="form">
            <label htmlFor="name">Nombre del producto</label>
            <Field id="name" type="text" placeholder="Buzo" name="name" />
            {errors.name && touched.name && (
              <ErrorMessage name="name" component="div" />
            )}

            <label htmlFor="description">Descripción del producto</label>
            <Field
              id="description"
              type="text"
              placeholder="Descripción del producto"
              name="description"
            />
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div" />
            )}
            <label htmlFor="image">Imagen del producto</label>
            <Field
              id="image"
              type="text"
              placeholder="Imagen del producto"
              name="image"
            />
            {errors.image && touched.image && (
              <ErrorMessage name="image" component="div" />
            )}
            <label htmlFor="stock">Stock del producto</label>
            <Field
              id="stock"
              type="number"
              placeholder="Stock del producto"
              name="stock"
            />
            {errors.stock && touched.stock && (
              <ErrorMessage name="stock" component="div" />
            )}
            <label htmlFor="price">Precio del producto</label>
            <Field
              id="price"
              type="number"
              placeholder="Precio del producto"
              name="price"
            />
            {errors.price && touched.price && (
              <ErrorMessage name="price" component="div" />
            )}

            <Button type="submit">Cargar producto</Button>
            {isSubmitting ? <p> Enviando producto </p> : null}
          </Form>
         </FormContainer>
          

        )}
      </Formik>
    </>
  );
}
