import './modalContainer.css'
import ModalAddTransactions from '../ModalAddTransaction/ModalAddTransaction';



const ModalContainer = ({active, setActive, onHandleChange, onHandleSubmit, handleFormCancel, setCategory, setType})=>{
return (
    <div className={active ? 'modal active' : 'modal'} onClick={()=>setActive(false)} >
        <div className={'modal_content'} onClick={e=>e.stopPropagation()}>
        <ModalAddTransactions
                onHandleChange={onHandleChange}
                onHandleSubmit={onHandleSubmit}
                handleFormCancel={handleFormCancel}
                setActive={setActive}
                setCategory={setCategory}
                setType={setType}
            />
        </div>
    </div>
)
}

export default ModalContainer