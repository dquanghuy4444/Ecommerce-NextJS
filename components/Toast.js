const styleToast = {
    top:"6%",
    right:"2%",
    zIndex:"9",
    minWidth:"250px",
}

const styleButtonClose = {
    outline:'none',
    background:"none",
    border:"none",
}

const Toast = ({mess , handleShow , bgColor }) =>{
    return (
        <div className={ "toast show position-fixed text-light " + bgColor } data-autohide="false"
        style={ styleToast }
        >
            <div className={ "toast-header text-light" + bgColor}>
                <strong className="mr-auto text-primary">
                    {
                        mess.title
                    }
                </strong>
                <button type="button" className="ml-2 mb-1 close" style={ styleButtonClose } onClick={ handleShow }data-dismiss="toast">
                    &times;
                </button>
            </div>
            <div className="toast-body">
                {
                    mess.msg
                }
            </div>
        </div>
    )
}

export default Toast;