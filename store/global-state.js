import { createContext, useEffect, useReducer } from 'react';
import { getData } from '../ultis/fetch-data';
import reducers from './reducers';

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const initialState = { 
        notify: {}, auth: {}, cart: [], modal: [], orders: [], users: [], categories: []
    }
    
    const [state , dispatch] = useReducer(reducers , initialState)
    const { cart } = state;

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

    useEffect(() => {
        const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'))

        if(__next__cart01__devat) dispatch({ type: 'ADD_CART', payload: __next__cart01__devat })
    }, [])

    useEffect(() => {
        localStorage.setItem('__next__cart01__devat', JSON.stringify(cart))
    }, [cart])

    return (
        <DataContext.Provider value={{state , dispatch}}>
            {
                children
            }
        </DataContext.Provider>
    )
}