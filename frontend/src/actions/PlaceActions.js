import axios from "axios";


const path = "/place";
const baseUrl = process.env.REACT_APP_API_URL;
const request = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
}); 

export function loadPlaces(){
    return dispatch => {
        return request.get(path)
        .then(res=>{dispatch({
            type: 'PLACE_LOAD',
            value: res.data
        })}
        ).catch(error=>console.log(error.messge))
    };
}

export function insertPlace(place) {
    return dispatch => {
        return request.post(path,place)
            .then(res=>{
                place.id = res.data;
                dispatch({
                    type: 'PLACE_ADD',
                    value: place
                })
            })
            .catch(error=>console.log(error));
    };
}

export function updatePlace(place){
    return dispatch => {
        return request.put(`${path}/${place.id}`, place)
        .then(res=>{dispatch({
            type: 'PLACE_UPDATE',
            value: place
        })
        }).catch(error=>console.log(error.messge));
    }
}

export function deletePlace(placeId) {
    return dispatch => {
        return request.delete(`${path}/${placeId}`)
        .then(res=>{dispatch({
            type: 'PLACE_DELETE',
            value: res.data
        })
        }).catch(error=>console.log(error.messge));
    }
}

export function setShowEditor(editor){
    return dispatch => {
        dispatch({
            type: 'PLACE_SHOW_EDITOR',
            value: editor
        })
    }
}

export function setEditingPlace(place){
    return dispatch => {
        dispatch({
            type: 'PLACE_EDITING_PLACE',
            value: place
        })
    }
}

export function setMap(map){
    return dispatch => {
        dispatch({
            type: 'PLACE_MAP',
            value: map
        })
    }
}