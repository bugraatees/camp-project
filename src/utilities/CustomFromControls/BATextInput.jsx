import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function BATextInput({...props}) {
    //console.log(props)
    const [field, meta] = useField(props) // formikte ki bilgileri alıyor. Reflect API kullanıyor.
    //console.log(meta)  //field : Bilgileri verir meta ise hata var mı hata varsa değerini verir.

  return (
    <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
             <Label pointing basic color='red' content={meta.error} ></Label>// hata varsa bunu gösterecek yoksa bir şey gösterme kodu
        ):null}
    </FormField>
  )
}

//axios post işlemi
