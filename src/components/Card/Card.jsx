import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router'
import { getCurrentRepo, getRepoContributors } from '../actions/repos';
import './Card.scss'

const Card = (props) => {
    const {username, reponame} = useParams();
    const repo = useSelector(state => state.repos.repo)
    const contributors = useSelector(state => state.repos.contributors)
    const isFetching = useSelector(state => state.repos.isFetching)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrentRepo(username, reponame))
        dispatch(getRepoContributors(username, reponame))
    }, [])

    return (
        <div>
            <button onClick={() => props.history.goBack()}>Go back</button>
            {isFetching === true ? 
                <>
                    <div className="card">
                        <img src={repo.owner.avatar_url} alt="avatar" />
                        <div className="name">{repo.name}</div>
                        <div className="stars">{repo.stargazers_count}</div>
                    </div>
                    <ul>
                        {contributors.map((c, i) => 
                            <li key={i}>{c.login}</li>
                        )}
                    </ul>
                </>
                : 
                <div className="fetching"></div>
            }
        </div>
    )
}

export default Card;