import React from "react";
import "./MarkerEditor.css"
import { updatePlace, setEditingPlace,setShowEditor} from '../../../actions/PlaceActions';
import { connect } from 'react-redux';

class MarkerEditor extends React.Component {
    constructor(){
        super();
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onImageChanged = this.onImageChanged.bind(this);
    }

    btnCancelHandler(){
        this.props.setShowEditor(false);
    };
    
    btnSaveHandler(place){
      this.props.updatePlace(place);
      this.props.setShowEditor(false);
    }

    onNameChanged(e){
        const place = Object.assign({},this.props.place);
        place.name = e.target.value;
        this.props.setEditingPlace(place);
    }
    onImageChanged(e){
        const place = Object.assign({},this.props.place);
        place.imageUrl = e.target.value;
        this.props.setEditingPlace(place);
    }

    render() {
        return (
          <div className="editor-container">
              <div className="editor-fields-container">
                <div className="form-field-editor">
                    <label>Name: </label>
                    <input id="txtName" type="text" value={this.props.place.name} onChange={this.onNameChanged}></input>
                </div>
                <div className="form-field-editor">
                    <label>Image Url: </label>
                    <input id="txtImage" type="url" value={this.props.place.imageUrl} onChange={this.onImageChanged}></input>
                </div>
              </div>
              <div className="editor-buttons-container">  
                  <button id = "btnSave" onClick={()=>{this.btnSaveHandler(this.props.place)}}>Save</button>
                  <button id = "btnCancel" onClick={()=>{this.btnCancelHandler()}}>Cancel</button>
              </div>
          </div>);
      }
}

function mapStateToProps(state) {
    return {
        place: state.placeStore.editingPlace
    }
  }
export default connect(mapStateToProps, {updatePlace, setShowEditor, setEditingPlace})(MarkerEditor);