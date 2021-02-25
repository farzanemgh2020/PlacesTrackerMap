import React from "react";
import "./MarkerViewer.css"
import noimageavailable from "./no-image-available-icon.jpg";
import { deletePlace, setShowEditor,setEditingPlace} from '../../../actions/PlaceActions';
import { connect } from 'react-redux';

class MarkerViewer extends React.Component {
   
    deleteBtnHandler(placeId){
      if(!window.confirm("Are you sure to delete?"))
        return;
      this.props.deletePlace(placeId);
    };
          
    editBtnHandler(place){
      const editingPlace = Object.assign({}, place);
      this.props.setEditingPlace(editingPlace);
      this.props.setShowEditor(true);
    };
   
    render() {
      return (
        <div className="viewer-container">
            <div className="viewer-fields-container">
            <img alt="for location" src={(this.props.place.imageUrl==="")? noimageavailable: this.props.place.imageUrl} />
            <label className="mb-0">{this.props.place.name}</label> 
            </div>
            <div className="viewer-buttons-container">  
                <button id = "editBtn" onClick={()=>{this.editBtnHandler(this.props.place)}}>Edit</button>
                <button id = "deleteBtn" onClick={()=>{this.deleteBtnHandler(this.props.place.id)}}>Delete</button>
            </div>
        </div>);
    }
  }

export default connect(null, {deletePlace, setShowEditor,setEditingPlace})(MarkerViewer);