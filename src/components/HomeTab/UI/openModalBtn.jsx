import styles from './openModalBtn.module.css'

const OpenModalBtn=({onClick, children})=>{
    return(
        <>
        <button className ={styles.openModal} onClick={onClick}>{children}</button>
        </>
    )
}
export default OpenModalBtn