(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(30),i=n.n(r),o=(n(38),n(8)),l=n(9),u=n(11),h=n(10),j=n(2),d=(n(39),n(13)),p=n.n(d),b=n(12),O=c.a.createContext(),m=O.Provider,f=(O.Consumer,function(){return localStorage.getItem("token")}),g=function(e){return localStorage.setItem("token",e)},v=function(){return localStorage.removeItem("token")},x=function(){return null!==f()},y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleChange=function(t){var n=e.state,a=t.target.name;"userEmail"===a?n.username=t.target.value:"password"===a&&(n.password=t.target.value),e.setState(n)},e.handleSubmit=function(t){t.preventDefault(),p.a.post("http://51.38.51.187:3333/api/v1/auth/login",e.state).then((function(t){g(t.data.accessToken),e.props.history.push("/users")})).catch((function(e){alert(e.response.data.message),console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return x()&&this.props.history.push("/users"),Object(a.jsxs)("div",{className:"formContainer",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{method:"post",action:"/login",children:[Object(a.jsx)("label",{children:"Email Address "}),Object(a.jsx)("input",{type:"email",name:"userEmail",placeholder:"johnsmith@gmail.com",onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Sign In!",onClick:this.handleSubmit})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Please Sign Up!"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/signup",children:"Sign up"})})})]})]})}}]),n}(s.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleChange=function(t){var n=e.state;"username"===t.target.name?n.username=t.target.value:"password"===t.target.name&&(n.password=t.target.value),e.setState(n)},e.handleSubmit=function(t){t.preventDefault();var n=e.state;p.a.post("http://51.38.51.187:3333/api/v1/auth/register",n).then((function(t){alert("Sign up successful!"),e.props.history.push("/")})).catch((function(e){alert(e.response.data.message),console.error(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"formContainer",children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{method:"post",action:"/register",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Email "}),Object(a.jsx)("input",{type:"email",name:"username",onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",value:"Register",onClick:this.handleSubmit})})]})]})}}]),n}(s.Component),C=n(20),k=n.n(C),S=n(32),L=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleLogOut=function(){v(),e.props.history.push("/")},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Log Out Page"}),Object(a.jsx)("button",{onClick:this.handleLogOut,children:"Sing out"})]})}}]),n}(s.Component),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={users:[]},e.handleConfirmDelete=function(t){window.confirm("Are you should you want to delete this entry?")&&e.handleDelete(t)},e.handleDelete=function(t){var n=f(),a={headers:{Authorization:"Bearer ".concat(n)}};p.a.delete("http://51.38.51.187:3333/api/v1/users/".concat(t),a).then((function(n){var a=e.state.users.filter((function(e){return e._id!=t}));e.setState({users:a}),alert("This entry has been deleted"),console.log(n)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"fetchUsers",value:function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=f(),n={headers:{Authorization:"Bearer ".concat(t)}},p.a.get("http://51.38.51.187:3333/api/v1/users",n).then((function(e){a.setState({users:e.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){x()?this.fetchUsers():this.props.history.push("/")}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"linkToLogout",children:Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/logout",children:"Log out"})})})}),Object(a.jsxs)("div",{class:"container",children:[Object(a.jsx)("div",{class:"row",children:Object(a.jsx)("h1",{className:"centerElements",children:"List of Users"})}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col-sm alignLeft ",children:Object(a.jsx)("h2",{children:"Ids"})}),Object(a.jsx)("div",{class:"col-sm alignLeft",children:Object(a.jsx)("h2",{className:"marginLeft",children:"Emails"})})]})]}),this.state.users.map((function(t){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{class:"col-sm",children:Object(a.jsx)("p",{children:t._id})}),Object(a.jsx)("div",{class:"col-sm",children:Object(a.jsx)("p",{children:t.username})}),Object(a.jsx)("div",{class:"col-sm",children:Object(a.jsx)("button",{onClick:function(){return e.handleConfirmDelete(t._id)},children:"X"})})]},t._id)}))]})}}]),n}(s.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("main",{className:"container-fluid",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:y}),Object(a.jsx)(j.a,{path:"/signup",component:w}),Object(a.jsx)(j.a,{path:"/users",component:A}),Object(a.jsx)(j.a,{path:"/logout",component:L})]})})}}]),n}(s.Component),E=(n(63),{getToken:function(){return f()},isUserLogged:function(){return x()}});i.a.render(Object(a.jsx)(m,{value:E,children:Object(a.jsx)(b.a,{basename:"/techChallengePractice",children:Object(a.jsx)(D,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.73625f0c.chunk.js.map