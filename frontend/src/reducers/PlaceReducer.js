const initialState = {
    locations: [],
    showEditor:false,
    editingPlace:null,
    map:null
  };

const reducer= (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PLACE_LOAD':
            return { ...state, locations: action.value };
        case 'PLACE_ADD':
            return { ...state, locations: [...state.locations, action.value] };
        case 'PLACE_UPDATE':
            closeMapPopup(state);
            return { ...state, 
                locations: [...state.locations.filter((v, i) => v.id !== action.value.id), action.value],
                editingPlace: null,
                showEditor: false};
        case 'PLACE_DELETE':
            closeMapPopup(state);
            return { ...state, locations: state.locations.filter((v, i) => v.id !== action.value) };
        case 'PLACE_SHOW_EDITOR':
            return { ...state, showEditor: action.value };
        case 'PLACE_EDITING_PLACE':
            return { ...state, editingPlace: action.value };
        case "PLACE_MAP":
            return {...state, map: action.value};
        default:
            return state;
    }
}

function closeMapPopup(state){
    const map = state.map;
    if(map)
        map.closePopup();
}
export default reducer;