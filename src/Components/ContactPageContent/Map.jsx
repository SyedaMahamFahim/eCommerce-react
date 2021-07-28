import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const style = {
    width: '500px',
    height: '500px',
    margin:"auto"
  }
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={style}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Karachi'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAdlp3Om_zwn1cTWM6X3FL-i2Nw5og3TrI")
})(MapContainer)