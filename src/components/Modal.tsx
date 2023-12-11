const Modal = ({ header, p, setOpen, open, onAgree }: { header: string, p: string, setOpen: any, open: any, onAgree: any }) => {
    const modalClass = open ? 'fixed' : 'hidden';
    const handleAgree = () => {
        setOpen(false)
        onAgree()
    }
    return (
        <div id="modal" className={`modal-box z-20 py-8 px-16 boxShadow bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalClass}`}>
            <h3 className="font-bold text-lg">{header}</h3>
            <p className="py-4">{p}</p>
            <div className="modal-action">
                <button className="btn" type="button" onClick={() => setOpen(false)}>Disagree</button>
                <button className="btn bg-dark text-white " type="button" onClick={handleAgree}>Agree</button>
            </div>
        </div>
    )
}

export default Modal;
