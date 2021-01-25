import { createContext, useEffect, useReducer } from 'react';
import { getData } from '../ultis/fetch-data';
import reducers from './reducers';

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const initialState = {
        notify:{},
        auth:{}
    }
    const [state , dispatch] = useReducer(reducers , initialState)

    useEffect(() =>{
        const firstLogin = localStorage.getItem("firstlogin");
        if(firstLogin){
            getData("auth/accesstoken").then((res) =>{
                if(res.err){
                    return localStorage.removeItem("firstlogin")
                }

                dispatch({
                    type: "AUTH",
                    payload:{
                        token: res.accessToken,
                        user: res.user
                    }
                })
            })
        }
    },[])

    return (
        <DataContext.Provider value={[state , dispatch]}>
            {
                children
            }
        </DataContext.Provider>
    )
}