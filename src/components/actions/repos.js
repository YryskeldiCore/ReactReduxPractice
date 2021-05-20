import axios from 'axios'
import { setIsFetching, setRepos, setRepo, setContributors } from '../../reducers/reposReducer'

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if(searchQuery === ''){
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        dispatch(setIsFetching(false))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        dispatch(setRepos(response.data))
    }
}

export const getCurrentRepo = (userName, repoName) => {
    return async (dispatch) => {
        dispatch(setIsFetching(false))
        const res = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
        dispatch(setRepo(res.data))
    }
}

export const getRepoContributors = (userName, repoName) => {
    return async (dispatch) => {
        dispatch(setIsFetching(false))
        const res = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=5`)
        dispatch(setContributors(res.data))
    }
}