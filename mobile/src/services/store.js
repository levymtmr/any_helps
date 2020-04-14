import React, { createContext, useState, useEffect, useContext }  from 'react';
import { AsyncStorage } from 'react-native';

const StoreContext = createContext([{}, () => {}])

export const useStore = () => {
    const [state, setState] = useContext(StoreContext)
    return [state, setState]
}

export const StoreProvider = ({ children }) => {
    const [getItem, setItem] = useState()
    const [state, setState] = useState({});

    const _storeData = async () => {
        try {
          await AsyncStorage.setItem('store', 'I like to save it.');
        } catch (error) {
          // Error saving data
        }
      };

    useEffect(() => {
        _storeData()
    }, [])

    useEffect(() => {
        setItem(JSON.stringify(state))
    }, [state])


    return (
        <StoreContext.Provider value={[state, setState]}>
            {children}
        </StoreContext.Provider>
    )
}