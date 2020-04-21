import React, {useState, createContext} from 'react';

export const Context= createContext();

export const Provider = props => {
    const [search, setSearch] = useState("");
    return(
        <Context.Provider value={[search, setSearch]} >
            {props.children}
        </Context.Provider>
    )
}