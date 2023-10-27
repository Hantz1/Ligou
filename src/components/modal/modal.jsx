import './modal.css'

function Modal(props){
    return(
        <div className='modal-container'>
            <div className='modal'>
                <h4>{props.title}</h4>
                <p>{props.message}</p>
                <div className='modal-button-group'>
                    <button onClick={()=>props.onDialog(false)} className='model-no'>Cancel</button>
                    <button onClick={()=>props.onDialog(true)} className='model-yes'>Confirmer</button>
                </div>
            </div>
        </div>
    )
}
export default Modal