
## Introduction

It is a small React-Redux-Nodejs application for managment of visited places. It allows you to keep track of all your favorite places around the world, and mark them. Visited places are displayed with their corresponding info on the map.

 Node.JS backend providing a REST API to create, read, update and delete places.Each place has the properties: ID, latitude, longitude, name,and image URL.
 React.JS Frontend show a world map as central component(used Leaflet.js as a map) that provides the following features:
 1. Clicking on the map add a place marker (stored in the backend)
 2. Clicking on an existing marker shows its properties in a popup window.The popup window allows to edit name and image URL, and to delete the marker.
 3. Reloading the frontend page loads all markers from the backend REST.

## How to run application
### Backend
1. go to backend directory
2. run `npm install`
3. run `npm start`

### Frontend
1. go to frontend directory
2. run `npm install`
3. run `npm run build`
4. run `npm start`
