const { v4: uuid_v4 } = require('uuid');

class PlaceRepository{
    constructor() {
        if (!PlaceRepository.instance) {
            this.places = new Map();
            PlaceRepository.instance = this;
        }
        return PlaceRepository.instance;
    }
    
    getPlaces(){
        return Array.from( this.places.values())
    }
    insert(place){
        place.id = uuid_v4();
        this.places.set(place.id, place);
        return place.id;
    }
    update(placeId, place){
        const oplace = this.places.get(placeId);
        if(place){
            Object.assign(oplace,place);
            return placeId;
        }
        else
            return null;
    }
    delete(placeId){
        this.places.delete(placeId);
    }
}

// ensure Singleton
const instance = new PlaceRepository();
Object.freeze(instance);

module.exports = instance;