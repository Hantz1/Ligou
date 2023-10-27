import { useEffect } from 'react'
import './toast.css'

function Toast(props){

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            props.setOpen(false)
        },2000)
        return()=>{
            clearTimeout(timeout)
        }
    })

    return(
        <div className='toast-container'>
            <p>Successfully</p>
        </div>
    )
}
export default Toast