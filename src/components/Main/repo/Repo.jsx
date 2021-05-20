import React from 'react'
import { NavLink } from 'react-router-dom';
import './Repo.scss';

const Repo = (props) => {

    const repo = props.repo;

    return (
        <div className="repo">
            <div className="repo-headers">
                <div className="repo-header-name"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></div>
                <div className="repo-header-stars">{repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">{repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Link to Repo {repo.html_url}</a>
        </div>
    )
}

export default Repo;