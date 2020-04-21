import React, { useContext } from 'react';
import { Context } from '../Context';

export default function Input() {
    const [search, setSearch] = useContext(Context);
    const changeHandler = e => setSearch(e.target.value);
    return (
        <div className="jumbotron">
            <h1 className="display-3 text-center">Github Finder</h1>
            <p className="lead">This is a github user finder application. To find the user simply begin typing the
                User Name in the search box, the user's information along with their latest repositories will be
                displayed down below.
            </p>
            <input value={search} onChange= {changeHandler} 
            className="form-control form-control-lg" type="text"
            placeholder="Begin typing the User Name here...."/>
        </div>
    )
}
