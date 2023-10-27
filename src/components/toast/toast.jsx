import { useEffect } from 'react'
import './toast.css'

function Toast(props){

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            props.setOpen(false)
        },3000)
        return()=>{
            clearTimeout(timeout)
        }
    }, [props.isOpen, props.setOpen])

    return props.isOpen ?(
        <div className='toast-container'>
            <p>{props.theme}</p>
            <button onClick={()=>props.setOpen(false)} className='toast-button'>X</button>
        </div>
    ): <></>
}
export default Toast