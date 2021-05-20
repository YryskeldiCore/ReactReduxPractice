import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import './Main.scss';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';

export default function Main() {
    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const perPage = useSelector(state => state.repos.perPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = [];
    createPages(pages, pagesCount, currentPage)
    
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage));
    }, [currentPage])

    function search(){
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage));
    }

    function changePage(page){
        dispatch(setCurrentPage(page))
    }

    return (
        <div>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="search-input" />
                <button  onClick={() => search()} className="search-btn">Search</button>
            </div>
            {isFetching === true ? 
                repos.map((repo,i) => 
                    <Repo repo={repo} key={i}/>    
                )
            : 
                <div className="fetching"></div>
            }
            <div className="pages">
                {pages.map((page, i) => 
                    <span 
                        onClick={() => changePage(page)}
                        key={i} 
                        className={currentPage === page? "current-page": 'page'}>
                        {page}
                    </span>
                    )}
            </div>
        </div>
    )
}
