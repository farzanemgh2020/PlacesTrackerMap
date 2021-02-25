(this.webpackJsonpvisitedplaces=this.webpackJsonpvisitedplaces||[]).push([[0],{50:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(12),o=n.n(i),r=(n(50),n(7)),l=n(8),s=n(11),u=n(10),d=n(84),p=n(85),h=(n(26),n(81)),j=n(38),b=n(39),O="/place",f=n.n(b).a.create({baseURL:"http://localhost:8002",headers:{"Content-Type":"application/json"}});function v(e){return function(t){t({type:"PLACE_SHOW_EDITOR",value:e})}}function g(e){return function(t){t({type:"PLACE_EDITING_PLACE",value:e})}}var m=n(6);var E=Object(m.b)(null,{insertPlace:function(e){return function(t){return f.post(O,e).then((function(n){e.id=n.data,t({type:"PLACE_ADD",value:e})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=j.geocodeService();return Object(h.a)({click:function(n){n.originalEvent.preventDefault(),t.reverse().latlng(n.latlng).token("AAPK2679642e0a3549c9b0b50af7cc49f1d9GEODy9GljkFXXXUQAHpi8KH53LnM6B40Hl1G7Wx9Tnk9AnvYX6XHjBfGc14b9W6t").run((function(t,n){if(t)console.log(t);else{var a={latitude:n.latlng.lat,longitude:n.latlng.lng,name:""!==n.address.PlaceName?n.address.PlaceName:n.address.Match_addr,imageUrl:""};e.insertPlace(a)}}))}}),null})),C=n(82),x=n(83),P=n(0),y=n.n(P).a.icon({iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40],iconUrl:"https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"}),A=(n(76),n.p+"static/media/no-image-available-icon.6fc67843.jpg"),k=n(2),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"deleteBtnHandler",value:function(e){window.confirm("Are you sure to delete?")&&this.props.deletePlace(e)}},{key:"editBtnHandler",value:function(e){var t=Object.assign({},e);this.props.setEditingPlace(t),this.props.setShowEditor(!0)}},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"viewer-container",children:[Object(k.jsxs)("div",{className:"viewer-fields-container",children:[Object(k.jsx)("img",{alt:"for location",src:""===this.props.place.imageUrl?A:this.props.place.imageUrl}),Object(k.jsx)("label",{className:"mb-0",children:this.props.place.name})]}),Object(k.jsxs)("div",{className:"viewer-buttons-container",children:[Object(k.jsx)("button",{id:"editBtn",onClick:function(){e.editBtnHandler(e.props.place)},children:"Edit"}),Object(k.jsx)("button",{id:"deleteBtn",onClick:function(){e.deleteBtnHandler(e.props.place.id)},children:"Delete"})]})]})}}]),n}(c.a.Component),L=Object(m.b)(null,{deletePlace:function(e){return function(t){return f.delete("".concat(O,"/").concat(e)).then((function(e){t({type:"PLACE_DELETE",value:e.data})})).catch((function(e){return console.log(e.messge)}))}},setShowEditor:v,setEditingPlace:g})(w),S=n(15),D=(n(78),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onNameChanged=e.onNameChanged.bind(Object(S.a)(e)),e.onImageChanged=e.onImageChanged.bind(Object(S.a)(e)),e}return Object(l.a)(n,[{key:"btnCancelHandler",value:function(){this.props.setShowEditor(!1)}},{key:"btnSaveHandler",value:function(e){this.props.updatePlace(e),this.props.setShowEditor(!1)}},{key:"onNameChanged",value:function(e){var t=Object.assign({},this.props.place);t.name=e.target.value,this.props.setEditingPlace(t)}},{key:"onImageChanged",value:function(e){var t=Object.assign({},this.props.place);t.imageUrl=e.target.value,this.props.setEditingPlace(t)}},{key:"render",value:function(){var e=this;return Object(k.jsxs)("div",{className:"editor-container",children:[Object(k.jsxs)("div",{className:"editor-fields-container",children:[Object(k.jsxs)("div",{className:"form-field-editor",children:[Object(k.jsx)("label",{children:"Name: "}),Object(k.jsx)("input",{id:"txtName",type:"text",value:this.props.place.name,onChange:this.onNameChanged})]}),Object(k.jsxs)("div",{className:"form-field-editor",children:[Object(k.jsx)("label",{children:"Image Url: "}),Object(k.jsx)("input",{id:"txtImage",type:"url",value:this.props.place.imageUrl,onChange:this.onImageChanged})]})]}),Object(k.jsxs)("div",{className:"editor-buttons-container",children:[Object(k.jsx)("button",{id:"btnSave",onClick:function(){e.btnSaveHandler(e.props.place)},children:"Save"}),Object(k.jsx)("button",{id:"btnCancel",onClick:function(){e.btnCancelHandler()},children:"Cancel"})]})]})}}]),n}(c.a.Component));var N=Object(m.b)((function(e){return{place:e.placeStore.editingPlace}}),{updatePlace:function(e){return function(t){return f.put("".concat(O,"/").concat(e.id),e).then((function(n){t({type:"PLACE_UPDATE",value:e})})).catch((function(e){return console.log(e.messge)}))}},setShowEditor:v,setEditingPlace:g})(D),_=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).props=e,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.loadPlaces()}},{key:"render",value:function(){var e=this;return void 0===this.props.locations?"":this.props.locations.map((function(t){return Object(k.jsx)(C.a,{position:[t.latitude,t.longitude],icon:y,children:Object(k.jsx)(x.a,{autoPan:"true",minWidth:"120px",children:e.props.showEditor?Object(k.jsx)(N,{}):Object(k.jsx)(L,{place:t})})})}))}}]),n}(c.a.Component);var H=Object(m.b)((function(e){return{locations:e.placeStore.locations,showEditor:e.placeStore.showEditor}}),{loadPlaces:function(){return function(e){return f.get(O).then((function(t){e({type:"PLACE_LOAD",value:t.data})})).catch((function(e){return console.log(e.messge)}))}}})(_),I=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(d.a,{center:[51.505,-.09],zoom:13,id:"map",style:{width:"700px",height:"500px"},children:[Object(k.jsx)(p.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),Object(k.jsx)(H,{}),Object(k.jsx)(E,{})]})}}]),n}(c.a.Component),T=n(9),U=n(42),B=n(43),G=n(44),M=n(24),W=n(3),F={locations:[],showEditor:!1,editingPlace:null},X={placeStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"PLACE_LOAD":return Object(W.a)(Object(W.a)({},e),{},{locations:t.value});case"PLACE_ADD":return Object(W.a)(Object(W.a)({},e),{},{locations:[].concat(Object(M.a)(e.locations),[t.value])});case"PLACE_UPDATE":return Object(W.a)(Object(W.a)({},e),{},{locations:[].concat(Object(M.a)(e.locations.filter((function(e,n){return e.id!==t.value.id}))),[t.value]),editingPlace:null,showEditor:!1});case"PLACE_DELETE":return Object(W.a)(Object(W.a)({},e),{},{locations:e.locations.filter((function(e,n){return e.id!==t.value}))});case"PLACE_SHOW_EDITOR":return Object(W.a)(Object(W.a)({},e),{},{showEditor:t.value});case"PLACE_EDITING_PLACE":return Object(W.a)(Object(W.a)({},e),{},{editingPlace:t.value});default:return e}}},R=Object(T.combineReducers)(X),z=Object(G.composeWithDevTools)(Object(T.applyMiddleware)(B.a,U.a)),J=Object(T.createStore)(R,z),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(m.a,{store:J,children:Object(k.jsx)("div",{style:{margin:"100px"},children:Object(k.jsx)(I,{})})})}),document.getElementById("root")),K()}},[[80,1,2]]]);
//# sourceMappingURL=main.d5e8fbc3.chunk.js.map