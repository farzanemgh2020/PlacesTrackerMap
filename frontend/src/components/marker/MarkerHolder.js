import React from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";
import MarkerViewer from "./markerviewer/MarkerViewer";
import MarkerEditor from "./markereditor/MarkerEditor";
import {loadPlaces} from '../../actions/PlaceActions';
import { connect } from 'react-redux';

class MarkerHolder extends React.Component {
  
    componentDidMount() {
      this.props.loadPlaces();
    }
   
    render() {
      return (
          (this.props.locations === undefined )? "": this.props.locations.map((item) => {
              return (
                <Marker
                  position={[item.latitude, item.longitude]}
                  icon={icon}
                >
                  <Popup  autoPan='true' minWidth="120px" >
                    {
                      (this.props.showEditor)?
                        <MarkerEditor />
                        :
                        <MarkerViewer place={item} />
                    }
                   </Popup>
                </Marker>
              );
            })
      );
    }
  }

  function mapStateToProps(state) {
    return {
        locations : state.placeStore.locations,
        showEditor: state.placeStore.showEditor
    }
  }
  export default connect(mapStateToProps, {loadPlaces})(MarkerHolder);
