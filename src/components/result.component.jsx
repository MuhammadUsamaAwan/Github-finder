import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';

export default function Result() {
    const [search] = useContext(Context);
    const [user, setUser] = useState ([]);
    const clientId = '17ff3651e58472c19bd8';
    const clientSecret = 'f774faafa82a91a7f16228cd8c85cb3c4d1b93d0';
    
    useEffect( () => {
        fetch(`https://api.github.com/users/${search}?client_id=${clientId}&client_secret=${clientSecret}`)
        .then (response => response.json())
        .then(resData => setUser(resData))
    }, [search])
    
    if (search === "") {
    return (
        <div className="alert alert-warning" role="alert">
            <strong>You haven't typed anything!</strong> Go ahead try it out.
        </div>
    )
    }

    else if (user.message === "Not Found") {
    return (
        <div className="alert alert-danger" role="alert">
            <strong>No User found!</strong> Try something else.
        </div>
    )
    }

    else {
    return(
        <div>
           <div className="row">
                <div className="col">
                    <img src={user.avatar_url} alt="Profile"/>
                </div>
                <div className="col">
                    <h3 className="text-center">{user.name}</h3>
                    <div className="text-center">
                        <span className="bg-primary">{user.public_repos} Public Repositories</span>
                        <span>      </span>
                        <span className="bg-secondary">{user.public_gists} Public Gists</span>
                        <br></br>
                        <span className="bg-success">{user.followers} Followers</span>
                        <span>      </span>
                        <span className="bg-info">{user.following} Following</span>
                    </div>
                    <ul className="list-group shadow p-3 mb-5 bg-light rounded">
                        <li className="list-group-item"><span style={{fontWeight: 'bold'}}>Company: </span>{user.company}</li>
                        <li className="list-group-item"><span style={{fontWeight: 'bold'}}>Website: </span>{user.blog}</li>
                        <li className="list-group-item"><span style={{fontWeight: 'bold'}}>Location: </span>{user.location}</li>
                        <li className="list-group-item"><span style={{fontWeight: 'bold'}}>Member Since: </span>{user.created_at}</li>
                    </ul>
                    <a className="btn btn-primary btn-lg" href={user.html_url} target="_blank"
                    rel="noopener noreferrer"
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >See Profile</a>
                </div>
            </div>
        </div>
    )
    }
}
