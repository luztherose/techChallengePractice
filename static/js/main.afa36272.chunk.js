(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),r=n(30),c=n.n(r),i=(n(38),n(8)),o=n(9),l=n(11),h=n(10),u=n(2),j=(n(39),n(13)),p=n.n(j),d=n(14),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleChange=function(t){var n=e.state,a=t.target.name;"userEmail"===a?n.username=t.target.value:"password"===a&&(n.password=t.target.value),e.setState(n)},e.handleSubmit=function(t){t.preventDefault(),p.a.post("http://51.38.51.187:3333/api/v1/auth/login",e.state).then((function(t){localStorage.setItem("token",t.data.accessToken),e.props.history.push("/users")})).catch((function(e){alert(e.response.data.message),console.log(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return null!==localStorage.getItem("token")&&this.props.history.push("/users"),Object(a.jsxs)("div",{className:"formContainer",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{method:"post",action:"/login",children:[Object(a.jsx)("label",{children:"Email Address "}),Object(a.jsx)("input",{type:"email",name:"userEmail",placeholder:"johnsmith@gmail.com",onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"Sign In!",onClick:this.handleSubmit})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Please Sign Up!"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/signup",children:"Sign up"})})})]})]})}}]),n}(s.Component),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleChange=function(t){var n=e.state;"username"===t.target.name?n.username=t.target.value:"password"===t.target.name&&(n.password=t.target.value),e.setState(n)},e.handleSubmit=function(t){t.preventDefault();var n=e.state;p.a.post("http://51.38.51.187:3333/api/v1/auth/register",n).then((function(t){alert("Sign up successful!"),e.props.history.push("/")})).catch((function(e){alert(e.response.data.message),console.error(e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"formContainer",children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{method:"post",action:"/register",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Email "}),Object(a.jsx)("input",{type:"email",name:"username",onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",value:"Register",onClick:this.handleSubmit})})]})]})}}]),n}(s.Component),m=n(20),g=n.n(m),v=n(32),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[]},e}return Object(o.a)(n,[{key:"fetchUsers",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("token"),n={headers:{Authorization:"Bearer ".concat(t)}},p.a.get("http://51.38.51.187:3333/api/v1/users",n).then((function(e){a.setState({users:e.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){null===localStorage.getItem("token")?this.props.history.push("/"):this.fetchUsers()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:" Users Page"}),Object(a.jsx)("p",{children:"List of Users"}),Object(a.jsxs)("div",{className:"userContainer",children:[Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Ids"})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"users"})})]}),this.state.users.map((function(e){return Object(a.jsxs)("div",{className:"userContainer",children:[Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:e._id})}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:e.username})})]},e._id)}))]})}}]),n}(s.Component),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("main",{className:"app wrapper",children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(a.jsx)(u.a,{path:"/signup",component:O}),Object(a.jsx)(u.a,{path:"/users",component:f})]})})}}]),n}(s.Component);c.a.render(Object(a.jsx)(d.a,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.afa36272.chunk.js.map