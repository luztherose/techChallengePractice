(this["webpackJsonppractice-app"]=this["webpackJsonppractice-app"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n(28),r=n.n(c),i=(n(36),n(9)),j=n(10),l=n(12),o=n(11),p=n(14),u=n(2),h=(n(37),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"formContainer",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{method:"post",action:"/login",children:[Object(a.jsx)("label",{children:"Email Address "}),Object(a.jsx)("input",{type:"email",name:"userEmail",placeholder:"johnsmith@gmail.com"}),Object(a.jsx)("label",{children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password"}),Object(a.jsx)("input",{type:"submit",value:"Sign In!"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Please Sign Up!"}),Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)(p.b,{to:"/signup",children:"Sign up"})})})]})]})}}]),n}(s.Component)),b=n(30),d=n.n(b),O=n(4),m=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleChange=function(t){var n=e.state;"username"==t.target.name?n.username=t.target.value:"password"==t.target.name&&(n.password=t.target.value),e.setState(n)},e.handleSubmit=function(t){t.preventDefault();var n=e.state;d.a.post("http://51.38.51.187:3333/api/v1/auth/register",n).then((function(e){alert("Sign up successful!"),Object(O.b)().push("/")})).catch((function(e){alert(e.response.data.message),console.error(e)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"formContainer",children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)("form",{method:"post",action:"/register",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Email "}),Object(a.jsx)("input",{type:"email",name:"username",onChange:this.handleChange}),Object(a.jsx)("label",{children:"Password "}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"submit",value:"Register",onClick:this.handleSubmit})})]})]})}}]),n}(s.Component),x=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(p.a,{basename:"/",children:Object(a.jsxs)("div",{className:"app wrapper",children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:h}),Object(a.jsx)(u.a,{path:"/signup",component:m})]})})}}]),n}(s.Component);r.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.98f1fd7f.chunk.js.map