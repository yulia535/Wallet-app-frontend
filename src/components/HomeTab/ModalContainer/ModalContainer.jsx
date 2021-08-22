import './modalContainer.css'
import ModalAddTransactions from '../ModalAddTransaction/ModalAddTransaction';

const ModalContainer = ({active, setActive, onHandleChange, onHandleSubmit, handleFormCancel})=>{
return (
    <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)}>
        <div className={'modal_content'} onClick={e=>e.stopPropagation()}>
        <ModalAddTransactions
                onHandleChange={onHandleChange}
                onHandleSubmit={onHandleSubmit}
                handleFormCancel={handleFormCancel}
                setActive={setActive}
            />
        </div>
    </div>
)
}

export default ModalContainer