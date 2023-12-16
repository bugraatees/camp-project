import React from 'react';
import { Formik, Form,  } from 'formik';
import * as Yup from "yup";
import { Button, } from "semantic-ui-react"
import BATextInput from '../utilities/CustomFromControls/BATextInput';


export default function ProductAdd() {
  const initialValues = { title: "", price: "" }

  const schema = Yup.object({
    title: Yup.string().required("Ürün adı zorunlu.."),
    price: Yup.number().required("Ürün fiyatı zorunlu..")
  })


  return (
    <Formik
      initialValues={initialValues} // başlangı. değeri
      validationSchema={schema} /* Girilmesi zorunlu alan anlamında */
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form className='ui form'>
        <BATextInput name="title" placeholder="Ürün Adı" />
        <BATextInput name="price" placeholder="Ürün Fiyatı" />
        {/* { <FormField>
          <Field name="title" placeholder="Ürün Adı"></Field>
          <ErrorMessage name='title' render={error =>
            <Label pointing basic color='red' content={error} ></Label>
          }></ErrorMessage>
        </FormField>}
        <FormField>
          <Field name="price" placeholder="Ürün Fiyatı"></Field>
          <ErrorMessage name='title' render={error =>
            <Label pointing basic color='red' content={error} ></Label>
          }></ErrorMessage>
        </FormField> */}
        <Button color='green' type='submit'>Ekle</Button>
      </Form>
    </Formik>
  )
}

//Redux-thunk asenkron işlemler için kullanılan paket