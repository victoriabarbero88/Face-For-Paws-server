(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),s=a.n(r),c=a(2),o=a(3),i=a(5),u=a(4),m=(a(37),a(7)),h=a(6),p=a.n(h),d=new(function(){function e(){Object(c.a)(this,e),this.auth=p.a.create({baseURL:"".concat("https://faceforpaws.herokuapp.com"),withCredentials:!0})}return Object(o.a)(e,[{key:"signup",value:function(e){var t=e.name,a=e.email,n=e.password,l=e.isShelter;return this.auth.post("/auth/signup",{name:t,email:a,password:n,isShelter:l}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password,n=e.isShelter;return this.auth.post("/auth/login",{email:t,password:a,isShelter:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),f=l.a.createContext(),g=f.Consumer,E=f.Provider,v=function(e){return function(t){Object(i.a)(n,t);var a=Object(u.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return l.a.createElement(g,null,(function(a){var n=a.login,r=a.signup,s=a.user,c=a.logout,o=a.isLoggedIn,i=a.isShelter;return l.a.createElement(e,Object.assign({login:n,signup:r,user:s,logout:c,isLoggedIn:o,isShelter:i},t.props))}))}}]),n}(n.Component)},b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isLoggedIn:!1,user:null,isLoading:!0},e.signup=function(t){var a=t.email,n=t.name,l=t.password,r=t.isShelter;d.signup({email:a,name:n,password:l,isShelter:r}).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){var a=t.response;return e.setState({message:a.data.statusMessage})}))},e.login=function(t){var a=t.email,n=t.password,l=t.isShelter;d.login({email:a,password:n,isShelter:l}).then((function(t){return e.setState({isLoggedIn:!0,user:t})})).catch((function(t){return e.setState(t)}))},e.logout=function(){d.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(t){return e.setState(t)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedIn,n=e.user,r=e.isShelter,s=this.login,c=this.logout,o=this.signup;return t?l.a.createElement("div",null,"Loading"):l.a.createElement(E,{value:{isLoggedIn:a,user:n,login:s,logout:c,signup:o,isShelter:r}},this.props.children)}}]),a}(n.Component),y=a(16);var C=v((function(e){var t=e.component,a=e.isLoggedIn,n=Object(y.a)(e,["component","isLoggedIn"]);return l.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(m.a,{to:"/feed"}):l.a.createElement(t,e)}}))}));var S=v((function(e){var t=e.component,a=e.isLoggedIn,n=Object(y.a)(e,["component","isLoggedIn"]);return l.a.createElement(m.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,e):l.a.createElement(m.a,{to:"./profile"})}}))})),O=a(1),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.logout,a=e.isLoggedIn;return l.a.createElement("div",null,a?l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{onClick:this.props.history.goBack,className:"backimg"},l.a.createElement("img",{src:"../../assets/back.png",alt:""})),l.a.createElement(O.b,{to:"/feed",className:"logoimg"},l.a.createElement("img",{src:"../../assets/Logo.png",alt:""})),l.a.createElement(O.b,{to:"/profile",className:"profileimg"},l.a.createElement("img",{src:"../../assets/profile.png",alt:""}))),l.a.createElement("div",{className:"tabs"},l.a.createElement(O.b,{to:"/feed"},l.a.createElement("button",{className:"feed-button actiive"},"Feed")),l.a.createElement(O.b,{to:"/pet"},l.a.createElement("button",{className:"pet-button"},"PawFamily")),l.a.createElement(O.b,{to:"/shelter"},l.a.createElement("button",{className:"shelter-button"},"Shelters")),l.a.createElement(O.b,{to:"/user"},l.a.createElement("button",{className:"shelter-button"},"PawFriends")),l.a.createElement("button",{className:"logout-button",onClick:t},"Logout"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{onClick:this.props.history.goBack,className:"backimg"},l.a.createElement("img",{src:"../../assets/back.png",alt:""})),l.a.createElement(O.b,{to:"/",className:"logoimg"},l.a.createElement("img",{src:"../../assets/Logo.png",alt:""})),l.a.createElement(O.b,{to:"/login",className:"profileimg"},l.a.createElement("img",{src:"../../assets/profile.png",alt:""}))),l.a.createElement("div",{className:"tabs"},l.a.createElement(O.b,{to:"/login"},l.a.createElement("button",{className:"login-button"},"Login")),l.a.createElement(O.b,{to:"/signup"},l.a.createElement("button",{className:"signup-button"},"Sign Up")))))}}]),a}(n.Component),N=Object(m.g)(v(k)),j=a(9),w=v(function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",password:"",email:"",isShelter:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,l=a.password,r=a.email,s=a.isShelter;console.log("Signup -> form submit",{name:n,password:l,email:r,isShelter:s}),e.props.signup({name:n,email:r,password:l,isShelter:s})},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;"isShelter"===n&&(l=t.target.checked),e.setState(Object(j.a)({},n,l))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password,r=e.isShelter;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Are you a Shelter?"),l.a.createElement("input",{type:"checkbox",name:"isShelter",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:a,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"Signup"})),l.a.createElement(O.b,{to:"/login"},"Already have account? Login"))}}]),a}(n.Component)),L=v(function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",isShelter:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,l=a.password,r=a.isShelter;console.log("Login -> form submit",{email:n,password:l,isShelter:r}),e.props.login({email:n,password:l,isShelter:r})},e.handleChange=function(t){var a=t.target,n=a.name,l=a.value;"isShelter"===n&&(l=t.target.checked),e.setState(Object(j.a)({},n,l)),console.log(t.target)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.isShelter;return l.a.createElement("div",{className:"loginContainer"},l.a.createElement("h1",null,"Login"),l.a.createElement("div",{className:"loginStyle"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Are you a Shelter? "),l.a.createElement("input",{type:"checkbox",name:"isShelter",value:n,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Login",className:"loginButton"}))))}}]),a}(n.Component)),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.getProfile=function(){p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/profile"),{withCredentials:!0}).then((function(t){console.log(t),e.setState(t.data)}))},e.deletePet=function(t){p.a.delete("".concat("https://faceforpaws.herokuapp.com","/user-routes/pet/delete/").concat(t)).then((function(){return e.getProfile()})).catch((function(e){console.log(e)}))},e.deleteFeed=function(t){p.a.delete("".concat("https://faceforpaws.herokuapp.com","/user-routes/feed/delete/").concat(t)).then((function(){return e.getProfile()})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){var e=this;return this.state?l.a.createElement("div",null,this.state.isShelter?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"shelterGeneral"},l.a.createElement(O.b,{to:"/edit-shelter/".concat(this.state._id),className:"shelterDLink"},"Edit"),l.a.createElement("h1",null,this.state.name),l.a.createElement("div",{className:"shelterContainer"},l.a.createElement("div",{className:"shelterStyle"},l.a.createElement("div",{className:"shelterDDiv"},this.state.photo?l.a.createElement("img",{src:this.state.photo,alt:"shelter",style:{width:"150%",maxWidth:100}}):null,l.a.createElement("div",{className:"shelterPText"},l.a.createElement("p",null,"Location: ",this.state.location),l.a.createElement("p",null,"Phone number: ",this.state.phone),l.a.createElement("p",null,"Website: ",l.a.createElement(O.b,{to:"{this.state.website}"},this.state.website)),l.a.createElement("p",null,this.state.description),l.a.createElement("section",{className:"petList"},l.a.createElement("h3",null,"Pet list"),l.a.createElement("div",{className:"petShelter"},this.state.pets.map((function(t){return l.a.createElement("div",{key:t._id,className:"petLDiv"},l.a.createElement(O.b,{to:"/edit-pet/".concat(t._id),className:"petLink"},l.a.createElement("p",null,t.name),t.photo[0]?l.a.createElement("img",{src:t.photo[0].full,alt:"pet",style:{width:"100%",maxWidth:200}}):null),l.a.createElement("button",{onClick:function(){return e.deletePet(t._id)}},"Delete"))})))))),l.a.createElement(O.b,{to:"/add-pet",className:"shelterDLink"},"Add a Pet"))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"userLGeneral"},l.a.createElement("h1",null,this.state.name),l.a.createElement(O.b,{to:"/edit-user/".concat(this.state._id),className:"shelterDLink"},"Edit"),l.a.createElement("div",{className:"userContainer"},l.a.createElement("div",{className:"userStyle"},l.a.createElement("div",{className:"userLDiv"},this.state.photo?l.a.createElement("img",{src:this.state.photo,alt:"user",style:{width:"100%",maxWidth:100}}):null,l.a.createElement("div",{className:"userText"},l.a.createElement("p",null,"Hi, I'm ",this.state.name," and I'm from ",this.state.location,"."),l.a.createElement("p",null,"I'm available for ",this.state.status),l.a.createElement("p",null,"If I could say omething about me, ",this.state.description)),l.a.createElement("div",{className:"userLinkContainer"},l.a.createElement(O.b,{to:"/user",className:"userLink"},"Back to Users")))))))):l.a.createElement("p",null,'"loading"')}}]),a}(n.Component),D=Object(m.g)(v(x)),F=p.a.create({baseURL:"http://localhost:4000/api"}),P=function(e){throw e},I=function(e){return F.post("/upload",e).then((function(e){return e.data})).catch(P)},A=function(e){return F.post("/things/create",e).then((function(e){return e.data})).catch(P)},U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.photo,l=n.state.location,r=n.state.size,s=n.state.age,c=n.state.gender,o=n.state.species,i=n.state.description,u=n.state.status;p.a.post("".concat("https://faceforpaws.herokuapp.com","/user-routes/pet/add-pet"),{name:t,photo:a,location:l,size:r,age:s,gender:c,species:o,description:i,status:u},{withCredentials:!0}).then((function(e){console.log(e),n.props.history.push("/pet")})).catch((function(e){return console.log(e)}))},n.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("imageUrl",e.target.files[0]),I(t).then((function(e){console.log("response is: ",e),n.setState({imageUrl:e.secure_url})})).catch((function(e){console.log("Error while uploading the file: ",e)}))},n.handleSubmit=function(e){e.preventDefault(),A(n.state).then((function(e){console.log("added: ",e)})).catch((function(e){console.log("Error while adding the thing: ",e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(j.a)({},a,l))},n.state={name:"",photo:"",location:"Barcelona",size:"",age:"",gender:"Female",species:"Dog",description:"",status:"Adopted"},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"addPetGeneral"},l.a.createElement("h1",null,"Add a PawFriend + "),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"addPetDiv"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Location:"),l.a.createElement("select",{name:"location",value:this.state.location,onChange:function(t){return e.handleChange(t)}},l.a.createElement("option",{value:"Barcelona"},"Barcelona"),l.a.createElement("option",{value:"Girona"},"Girona"),l.a.createElement("option",{value:"Tarragona"},"Tarragona"),l.a.createElement("option",{value:"Lleida"},"Barcelona")),l.a.createElement("label",null,"Photo"),l.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),l.a.createElement("label",null,"Size:"),l.a.createElement("input",{type:"text",name:"size",value:this.state.size,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Age:"),l.a.createElement("input",{type:"text",name:"age",value:this.state.age,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Gender:"),l.a.createElement("select",{name:"gender",value:this.state.gender,onChange:function(t){return e.handleChange(t)}},l.a.createElement("option",{value:"Female"},"Female"),l.a.createElement("option",{value:"Male"},"Male")),l.a.createElement("label",null,"Species:"),l.a.createElement("select",{name:"species",value:this.state.species,onChange:function(t){return e.handleChange(t)}},l.a.createElement("option",{value:"Dog"},"Dog"),l.a.createElement("option",{value:"Cat"},"Cat"),l.a.createElement("option",{value:"Bird"},"Bird"),l.a.createElement("option",{value:"Hamster"},"Hamster"),l.a.createElement("option",{value:"Rabit"},"Rabit"),l.a.createElement("option",{value:"Ferret"},"Ferret"),l.a.createElement("option",{value:"Other"},"Other")),l.a.createElement("label",null,"Status:"),l.a.createElement("select",{name:"status",value:this.state.status,onChange:function(t){return e.handleChange(t)}},l.a.createElement("option",{value:"Adopted"},"Adopted"),l.a.createElement("option",{value:"Adoptable"},"Adoptable"),l.a.createElement("option",{value:"Foster"},"Foster")),l.a.createElement("label",null,"Description:"),l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),a}(n.Component),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.photo,l=n.state.title,r=n.state.description;p.a.post("".concat("https://faceforpaws.herokuapp.com","/user-routes/feed/add-feed"),{name:t,photo:a,title:l,description:r},{withCredentials:!0}).then((function(){n.props.history.push("/feed")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(j.a)({},a,l))},n.state={name:"",photo:"",title:"",description:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"addFeedGeneral"},l.a.createElement("h1",null,"Add a Feed"),l.a.createElement("div",{className:""},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"addFeedDiv"},l.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)},placeholder:"Title"}),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)},placeholder:"Written by"}),l.a.createElement("input",{type:"file",name:"photo",value:this.state.photo,onChange:function(t){return e.handleChange(t)},placeholder:"Photo"}),l.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)},placeholder:"Description"}),l.a.createElement("input",{type:"submit",value:"Submit"}),l.a.createElement("img",{src:"",alt:""})))))}}]),a}(n.Component),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getAllPets=function(){p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/pet")).then((function(t){e.setState({listOfPets:t.data})}))},e.state={listOfPets:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getAllPets()}},{key:"render",value:function(){return l.a.createElement("div",{className:"PetLGeneral"},l.a.createElement("h1",null,"PawFamily"),l.a.createElement("div",{className:"petContainer"},l.a.createElement("div",{className:"petLStyle"},this.state.listOfPets.map((function(e){return l.a.createElement("div",{key:e._id,className:"petLDiv"},l.a.createElement(O.b,{to:"/pet/".concat(e._id),className:"petLink"},l.a.createElement("h3",null,"Hi! I'm ",e.name),e.photo[0]?l.a.createElement("img",{src:e.photo[0].full,alt:"pet",style:{width:"100%",maxWidth:200}}):null))})))))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getSinglePet=function(){var e=n.props.match.params;p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/pet/").concat(e.id)).then((function(e){var t=e.data;n.setState(t)})).catch((function(e){console.log(e)}))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getSinglePet()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"render",value:function(){return l.a.createElement("div",{className:"PetLGeneral"},l.a.createElement("h1",null,this.state.name),l.a.createElement("div",{className:"petContainer"},l.a.createElement("div",{className:"petLStyle"},l.a.createElement("div",{className:"petLDiv"},l.a.createElement("h2",null,"I'm available for ",this.state.status),this.state.photo?l.a.createElement("img",{src:this.state.photo[0].medium,alt:"pet",style:{width:"100%",maxWidth:200}}):null,l.a.createElement("p",null,"Hi, my name is ",this.state.name," and I'm a ",this.state.age," ",this.state.gender," ",this.state.species," I'm from ",this.state.location),l.a.createElement("p",null,"Let me explain you a little bit about me ",this.state.description)),l.a.createElement(O.b,{to:"/pet",className:"petLink"},"Back to pets"))))}}]),a}(n.Component),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getSingleShelter=function(){var e=n.props.match.params;p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/shelter/").concat(e.id)).then((function(e){var t=e.data;console.log(t),n.setState(t)})).catch((function(e){console.log(e)}))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getSingleShelter()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"render",value:function(){return l.a.createElement("div",{className:"shelterGeneral"},l.a.createElement("h1",null,this.state.name),l.a.createElement("div",{className:"shelterContainer"},l.a.createElement("div",{className:"shelterStyle"},l.a.createElement("div",{className:"shelterDDiv"},this.state.photo?l.a.createElement("img",{src:this.state.photo[0].small,alt:"shelter",style:{width:"150%",maxWidth:200}}):null,l.a.createElement("div",{className:"shelterDText"},l.a.createElement("p",null,"Location: ",this.state.location),l.a.createElement("p",null,"Phone number: ",this.state.phone),l.a.createElement("p",null,"Website: ",l.a.createElement(O.b,{src:"{this.state.website}"},this.state.website)),l.a.createElement("p",null,this.state.description),l.a.createElement("p",null,this.state.pets)),l.a.createElement(O.b,{to:"/shelter",className:"shelterDLink"},"Back to Shelters")))))}}]),a}(n.Component),_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getSingleUser=function(){var e=n.props.match.params;console.log(e),p.a.get("http://localhost:4000/user-routes/user/".concat(e.id)).then((function(e){var t=e.data;n.setState(t)})).catch((function(e){console.log(e)}))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getSingleUser()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"userLGeneral"},l.a.createElement("h1",null,this.state.name),l.a.createElement("div",{className:"userContainer"},l.a.createElement("div",{className:"userStyle"},l.a.createElement("div",{className:"userLDiv"},this.state.photo?l.a.createElement("img",{src:this.state.photo,alt:"user",style:{width:"100%",maxWidth:200}}):null,l.a.createElement("div",{className:"userText"},l.a.createElement("p",null,"Hi, I'm ",this.state.name," and I'm from ",this.state.location,"."),l.a.createElement("p",null,"I'm available for ",this.state.status),l.a.createElement("p",null,"If I could say omething about me, ",this.state.description)),l.a.createElement("div",{className:"userLinkContainer"},l.a.createElement(O.b,{to:"/user",className:"userLink"},"Back to Users"))))))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getSingleFeed=function(){var e=n.props.match.params;p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/feed/").concat(e.id)).then((function(e){var t=e.data;n.setState(t),console.log(t)})).catch((function(e){console.log(e)}))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getSingleFeed()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,t){}}},{key:"render",value:function(){return l.a.createElement("div",{className:"feedLGeneral"},l.a.createElement("h1",null,"A ",this.state.name,"'s Feed"),l.a.createElement("div",{className:"feedLContainer"},l.a.createElement("div",{className:"feedDiv"},l.a.createElement("h3",null,this.state.title),l.a.createElement("img",{src:this.state.photo,alt:"feed",style:{width:"100%",maxWidth:300}}),l.a.createElement("div",{className:"feedText"},l.a.createElement("p",null,this.state.description),l.a.createElement("p",{className:"feedName"},this.state.name)),l.a.createElement(O.b,{to:"/feed",className:"feedLink"},"Back to Feed"))))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getAllFeeds=function(){p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/feed")).then((function(t){e.setState({listOfFeeds:t.data})}))},e.state={listOfFeeds:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getAllFeeds()}},{key:"render",value:function(){return l.a.createElement("div",{className:"feedLGeneral"},l.a.createElement("h1",null,"Feeds"),l.a.createElement("div",{className:"feedLContainer"},l.a.createElement("div",{className:"feedLStyle"},this.state.listOfFeeds.map((function(e){return l.a.createElement("div",{key:e._id,className:"feedDiv"},l.a.createElement(O.b,{to:"/feed/".concat(e._id),className:"feedLink"},l.a.createElement("h3",null,e.title),l.a.createElement("img",{src:e.photo,alt:"feed",style:{width:"100%",maxWidth:300}})))})))),l.a.createElement("div",null,l.a.createElement(O.b,{to:"/add-feed",className:"plusimg"},l.a.createElement("img",{src:"../../assets/plus.png",alt:""}))))}}]),a}(n.Component),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getAllShelters=function(){p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/shelter")).then((function(t){e.setState({listOfShelters:t.data})}))},e.state={listOfShelters:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getAllShelters()}},{key:"render",value:function(){return l.a.createElement("div",{className:"shelterLGeneral"},l.a.createElement("h1",null,"Shelters"),l.a.createElement("div",{className:"shelterLContainer"},l.a.createElement("div",{className:"shelterlStyle"},this.state.listOfShelters.map((function(e){return l.a.createElement("div",{key:e._id,className:"shelterDiv"},l.a.createElement(O.b,{to:"/shelter/".concat(e._id),className:"shelterLink"},l.a.createElement("h3",null,e.name),l.a.createElement("img",{src:e.photo[0].medium,alt:"shelter",style:{width:"100%",maxWidth:150}})))})))))}}]),a}(n.Component),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getAllUsers=function(){p.a.get("http://localhost:4000/user-routes/user").then((function(t){e.setState({listOfUsers:t.data})}))},e.state={listOfUsers:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){return l.a.createElement("div",{className:"userLGeneral"},l.a.createElement("h1",null,"PawFriends ",l.a.createElement("span",{role:"img","aria-label":"paws"}," \ud83d\udc3e")),l.a.createElement("div",{className:"userContainer"},l.a.createElement("div",{className:"userStyle"},this.state.listOfUsers.map((function(e){return l.a.createElement("div",{key:e._id,className:"userLDiv"},l.a.createElement(O.b,{to:"/user/".concat(e._id),className:"userLink"},l.a.createElement("div",{className:"userLimg"},l.a.createElement("img",{src:e.photo,alt:"user",style:{width:"100%",maxWidth:200}})),l.a.createElement("p",null,"Hi! I'm ",e.name,".")))})))))}}]),a}(n.Component),J=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.photo,l=n.state.location,r=n.state.size,s=n.state.age,c=n.state.gender,o=n.state.species,i=n.state.description,u=n.state.status,m=n.props.match.params.id;p.a.put("".concat("https://faceforpaws.herokuapp.com","/user-routes/pet/edit-pet/").concat(m),{name:t,photo:a,location:l,size:r,age:s,gender:c,species:o,description:i,status:u},{withCredentials:!0}).then((function(e){console.log(e),n.props.history.push("/profile")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(j.a)({},a,l))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/pet/").concat(t)).then((function(t){var a=t.data;e.setState(a)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h3",null,"Edit form"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("img",{src:this.state.photo,alt:"actual"}),l.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"size",value:this.state.size,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"age",value:this.state.age,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"gender",value:this.state.gender,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"species",value:this.state.species,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"text",name:"status",value:this.state.status,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.photo,l=n.state.location,r=n.state.description,s=n.state.status,c=n.state.myPets,o=n.props.match.params.id;p.a.put("".concat("https://faceforpaws.herokuapp.com","/user-routes/user/edit-user/").concat(o),{name:t,photo:a,location:l,description:r,status:s,myPets:c},{withCredentials:!0}).then((function(){n.props.history.push("/profile")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(j.a)({},a,l))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/user/").concat(t)).then((function(t){var a=t.data;e.setState(a)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h3",null,"Edit form"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Photo:"),l.a.createElement("img",{src:this.state.photo,alt:"actual"}),l.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Location:"),l.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Description:"),l.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Status:"),l.a.createElement("input",{type:"text",name:"status",value:this.state.status,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"My Pets:"),l.a.createElement("input",{type:"text",name:"myPets",value:this.state.myPets,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.name,a=n.state.photo,l=n.state.location,r=n.state.phone,s=n.state.website,c=n.state.description,o=n.props.match.params.id;p.a.put("".concat("https://faceforpaws.herokuapp.com","/user-routes/shelter/edit-shelter/").concat(o),{name:t,photo:a,location:l,phone:r,website:s,description:c},{withCredentials:!0}).then((function(){n.props.history.push("/profile")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(j.a)({},a,l))},n.state={},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;p.a.get("".concat("https://faceforpaws.herokuapp.com","/user-routes/shelter/").concat(t)).then((function(t){var a=t.data;e.setState(a)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("h3",null,"Edit form"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Photo:"),l.a.createElement("img",{src:this.state.photo,alt:"actual"}),l.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Location:"),l.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Phone:"),l.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Website:"),l.a.createElement("input",{type:"text",name:"website",value:this.state.website,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Description:"),l.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(b,{className:"container"},l.a.createElement(N,null),l.a.createElement("div",{className:"container"},l.a.createElement(m.d,null,l.a.createElement(C,{exact:!0,path:"/signup",component:w}),l.a.createElement(C,{exact:!0,path:"/login",component:L}),l.a.createElement(S,{exact:!0,path:"/profile",component:D}),l.a.createElement(S,{exact:!0,path:"/add-pet",component:U}),l.a.createElement(S,{exact:!0,path:"/pet",component:M}),l.a.createElement(S,{exact:!0,path:"/feed",component:T}),l.a.createElement(S,{exact:!0,path:"/shelter",component:H}),l.a.createElement(S,{exact:!0,path:"/user",component:R}),l.a.createElement(S,{exact:!0,path:"/pet/:id",component:B}),l.a.createElement(S,{exact:!0,path:"/shelter/:id",component:G}),l.a.createElement(S,{exact:!0,path:"/feed/:id",component:z}),l.a.createElement(S,{exact:!0,path:"/user/:id",component:_}),l.a.createElement(S,{exact:!0,path:"/add-feed",component:W}),l.a.createElement(S,{exact:!0,path:"/edit-pet/:id",component:J}),l.a.createElement(S,{exact:!0,path:"/edit-user/:id",component:q}),l.a.createElement(S,{exact:!0,path:"/edit-shelter/:id",component:K}))))}}]),a}(n.Component);s.a.render(l.a.createElement(O.a,null,l.a.createElement(Q,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.348e8899.chunk.js.map