export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    // token:"BQCW7QV7FLgwRzdwTmLj1z8d5wb1AUrVJ2KdEkoPNzsMHedVo-U9s_gHgGjndfqH8dtLP2N9RMd9vHUxKaCKPom__ueTS2RVEcp41mP-RQYBRFJiANCk8a_A3-eVWY2tiUZYZhdvNEhWY5iYg7-3z6E94dI0JejjcUXdH1MdXNATEUZZj14HNcw-PRAWLCmrSCgVwHY0DavmszHJ2-uv",
}


const reducer = (state, action) =>{
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
           
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
    
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;