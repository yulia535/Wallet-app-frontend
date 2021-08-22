const OpenModalBtn=({onClick, children})=>{
    return(
        <>
        <button onClick={onClick}>{children}</button>
        </>
    )
}
export default OpenModalBtn