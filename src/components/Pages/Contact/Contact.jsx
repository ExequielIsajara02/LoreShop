import React, {useState} from "react";
import { Formik } from "formik";
import './Contact.css'

const Contact = () => {

    const [send, setSend] = useState(false)

    return(
        <div className="contact-container">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                
                onSubmit={(valores, {resetForm}) => {
                    console.log(valores)
                    resetForm()
                    console.log("Formulario enviado")
                    setSend(true)
                }}

                validate={(valores) => {
                    let errores = {}

                    // Validación para el nombre
                    if(!valores.name){
                       errores.name = "Please enter a name"
                    }
                    else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                        errores.name = "El nombre solo puede contener letras y espacios"
                    }


                    // Validación para el correo
                    if(!valores.email){
                       errores.email = "Please enter a email"
                    }
                    else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = 'El email debe ser con "@", "." y sin espacios'
                    }

                    // Validación para el telefono
                    if(!valores.phone){
                       errores.phone = "Please enter a phone number"
                    }
                    else if(!/[0-9]{10}/.test(valores.phone)){
                        errores.phone = 'El telefono solo puede contener numeros y debe tener una longitud de 10 digitos'
                    }


                    // Validación para el comentario
                    if(!valores.message){
                       errores.message = "Please enter a text"
                    }
                    return errores
                }}
            
            >
                {({values, handleSubmit, handleChange, handleBlur, errors, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <h2 className="contact-form-title">Contact us</h2>
                        <div className="form-input">
                            <label>
                                Name
                                <input 
                                    name="name" 
                                    type="text" 
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.name && <div className="error">{errors.name}</div>}
                            </label>
                    
                            <label>
                                Email
                                <input 
                                    name="email" 
                                    type="email" 
                                    value={values.email} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </label>
                    
                            <label>
                                Phone
                                <input 
                                    name="phone" 
                                    type="text" 
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
                            </label>

                            <label>
                                Comment
                                <textarea
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                </textarea>
                                {touched.message && errors.message && <div className="error">{errors.message}</div>}
                            </label>
                            {send && <div className="success">Mensaje enviado con exito!</div>}
                        </div>
                        <button className="contact-btn" type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Contact