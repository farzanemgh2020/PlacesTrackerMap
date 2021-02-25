import { useMapEvents  } from 'react-leaflet';
import * as ELG from 'esri-leaflet-geocoder'
import { connect } from 'react-redux';
import { setMap, insertPlace} from '../../actions/PlaceActions';

function CustomMarker(props) {
  const token = process.env.REACT_APP_ELG_TOKEN;
  var geocodeService = ELG.geocodeService();
    const map = useMapEvents({
      click: (e) => {
        e.originalEvent.preventDefault();
        geocodeService.reverse().latlng(e.latlng).token(token).run((error, obj_place)=> {
          if (error) {
            console.log(error);
            return;
          }
          let newplace={
                latitude: obj_place.latlng.lat,
                longitude: obj_place.latlng.lng,
                name: (obj_place.address.PlaceName!=="")? obj_place.address.PlaceName: obj_place.address.Match_addr,
                imageUrl:""
            };
          props.insertPlace(newplace);
      });
    }
  });
  if(props.map == null)
    props.setMap(map);
  return null; 
}

function mapStateToProps(state) {
  return {
      map: state.placeStore.map
  }
}
export default connect(mapStateToProps, {setMap, insertPlace})(CustomMarker);