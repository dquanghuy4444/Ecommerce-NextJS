import { useContext, useEffect } from 'react';
import { DataContext } from '../store/global-state';
import Loading from './loading';
import Toast from './Toast';

const Notify = () =>{
    const {state , dispatch} = useContext(DataContext);

    const { notify }  = state;

    useEffect(() =>{
        if(notify.error || notify.success){
            setTimeout(() =>{
                dispatch({
                    type:'NOTIFY',
                    payload:{}
                })
            }, 3e3);
        }
    } , [notify])

    return (
        <>
            {
                notify.loading && <Loading></Loading>
            }
            {
                notify.error && 
                <Toast
                    mess={{
                        msg:notify.error,
                        title:"Error"
                    }}
                    handleShow={
                        () => dispatch({
                            type:'NOTIFY',
                            payload:{}
                        })
                    }
                    bgColor="bg-danger"
                ></Toast>
            }
            {
                notify.success && 
                <Toast
                    mess={{
                        msg:notify.success,
                        title:"Success"
                    }}
                    handleShow={
                        () => dispatch({
                            type:'NOTIFY',
                            payload:{}
                        })
                    }
                    bgColor="bg-success"
                ></Toast>
            }
        </>
    )
}

export default Notify;