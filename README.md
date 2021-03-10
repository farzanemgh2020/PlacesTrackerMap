## Getting Start
This project is bootstrapped with Create React App.

## Introduction

It is a small React-Redux-Nodejs application with javascript Language for managment of visited or tourist places. It allows you to keep track of all your favorite places around the world, and mark them. Marked places are displayed with their corresponding info on the map.

 In this project:
 backend part(node.js)providing a REST API to create, read, update and delete places. Each place has the properties: id, latitude, longitude, name,and image URL.
 frontend part(React.js)shows a leaftlet map as a central component that provides the following features:
 1. Showing all existing markers(previous marked places)
 2. Adding a new marker
 3. By clicking on an existing marker, it will be shown the place's properties in a popup window. The popup window allows to edit the name and image URL of selected place, or to       delete the marker.

## How to run application
### Backend
1. go to the backend directory
2. run `npm install`
3. run `npm start`

### Frontend
1. go to the frontend directory
2. run `npm install`
3. run `npm run build`
4. run `npm start`
