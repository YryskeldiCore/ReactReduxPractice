const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURR_PAGE = 'SET_CURR_PAGE';
const SET_REPO = 'SET_REPO'
const SET_CON = 'SET_CON'

const defaultStore = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 6,
    totalCount: 0,
    repo: {owner:{}},
    contributors: []
}

export default function reposReducer(state = defaultStore, action){
    switch(action.type){
        case 'SET_REPOS':
            return {
                ...state,
                items: action.payload.items,
                isFetching: true,
                totalCount: action.payload.total_count
            }
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'SET_CURR_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SET_REPO':
            return {
                ...state, 
                isFetching: true,
                repo: action.payload
            }
        case 'SET_CON':
            return {
                ...state,
                isFetching: true,
                contributors: action.payload
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({type:SET_REPOS, payload: repos})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = (page) => ({type: SET_CURR_PAGE, payload: page})
export const setRepo = (repo) => ({type: SET_REPO, payload:repo})
export const setContributors = (repoContributors) => ({type: SET_CON , payload:repoContributors})