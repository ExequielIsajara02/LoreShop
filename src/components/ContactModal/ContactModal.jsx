import React, {useState} from 'react'
import { Dialog } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { DialogContent } from '@mui/material'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import './ContactModal.css'


import db from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

const ContactModal = ({formOpen, formClose, formProducts, totalPrice}) => {

    const [formData, setData] = useState({
        name: '',
        email: '',
        phone: ''

    });


    const [orderId, setOrder] = useState()


    // Se identifica que datos está ingresando el comprador atraves del type de cada input
    const entryData = (e) => {
        
        const {name, value} = e.target;
        setData({...formData, [name] : value})
    }

    // Se guarda los datos del comprador y la compra que realizo en un objeto
    const sendOrder = () => {

        // Objeto que guardara los datos del comprador
        let order = {}
        order.buyer = formData;
        order.items = formProducts;
        order.total = totalPrice;

        updateOrder(order)
    }


    // Función que se comunica con firestore y sube la orden
    const updateOrder = async (order) => {

        const orderFirebase = collection(db, 'orders')
        const orden = await addDoc(orderFirebase, order)

        setOrder(orden)
        

    }

    return (
        <div>
            <Dialog
                onClose={formClose}
                aria-labelledby="customized-dialog-title"
                open={formOpen}
                className='modal-contact-data'
            
            >
               {
                   orderId != null 
                   ? (
                       <div className='buy-ticket'>
                            <h2>La compra se realizo con exito</h2>
                            <p><b>ID: {orderId.id}</b></p>
                            <p><b>Nombre y apellido: {formData.name}</b></p>
                            <p><b>Importe final: ${totalPrice}</b></p>
                       </div>
                   )
                   :
                  <>
                    <DialogTitle className="form-title">Completa tus datos</DialogTitle>
                    <DialogContent>
                     <Box component="form" noValidate autoComplete='off' className='form-container'>
                        <TextField label="Name" name='name' variant='outlined' value={formData.name} onChange={entryData} 
                            className="form-input">
                        </TextField>
                        <TextField label="Email" name='email' variant='outlined' value={formData.email} onChange={entryData}
                            className="form-input">
                        </TextField>
                        <TextField label="Phone" name='phone' variant='outlined' value={formData.phone} onChange={entryData}
                            className="form-input">
                        </TextField>
                        <Button variant='outlined' onClick={sendOrder} className='form-btn'>Confirmar datos</Button>
                     </Box>
                    </DialogContent>
                  </>
               }
            </Dialog>
        </div>
    )
}

export default ContactModal
