import ButtonBs from "react-bootstrap/Button";
import ModalBs from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import { useContext } from "react";
import { ItemsContext, UPLOAD_ITEMS } from "../context/itemsContext";
import { axiosInstance } from "../../services/axios.config";

function Modal({ show, onHide, item, onSubmit }) {
  const { items, dispatch } = useContext(ItemsContext);

  const initialValues = {
    name: item.name || "",
    description: item.description || "",
    image: item.image || "",
    stock: item.stock || 0,
    price: item.price || 0,
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
    <ModalBs show={show} onHide={onHide} centered>
      <ModalBs.Header closeButton>
        <ModalBs.Title>Editar producto</ModalBs.Title>
      </ModalBs.Header>
      <ModalBs.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            axiosInstance
              .put(`/${item.id}`, values)
              .then(response => {
                if (response.status === 200){
                  const itemsUpload = items.map(item => {
                  if(item.id === response.data.id){
                    return response.data
                  }
                  return item
                })
                dispatch({ type: UPLOAD_ITEMS, payload : itemsUpload });
                setSubmitting(false);
                }else{
                  throw new Error(`[ERROR ${response.status}] Error en la solicitud`)  
                }
                
              })
              .catch(error => console.log(error))
            
            onHide();
          }}
        >
          {({ values, isSubmitting, errors, touched, handleChange }) => (
            <Form className="form">
              <label htmlFor="name">Nombre del producto</label>
              <Field
                id="name"
                type="text"
                placeholder="Buzo"
                name="name"
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <ErrorMessage name="name" component="div" />
              )}

              <label htmlFor="description">Descripción del producto</label>
              <Field
                id="description"
                type="text"
                placeholder="Descripción del producto"
                name="description"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
              {errors.price && touched.price && (
                <ErrorMessage name="price" component="div" />
              )}
              <Button type="submit">Cargar producto</Button>
              {isSubmitting ? <p> Enviando producto </p> : null}
            </Form>
          )}
        </Formik>
      </ModalBs.Body>
      <ModalBs.Footer>
        <ButtonBs variant="secondary" onClick={onHide}>
          Cerrar
        </ButtonBs>
      </ModalBs.Footer>
    </ModalBs>
  );
}

export default Modal;
