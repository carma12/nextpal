(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{16:function(e,t,n){e.exports={AuthForm:"AuthForm_AuthForm__N4E0x",MainForm:"AuthForm_MainForm__HEt6F",Input:"AuthForm_Input__Vt0Ui",LogButton:"AuthForm_LogButton__3_BYn",SwitchMode:"AuthForm_SwitchMode__1GdBJ",TestCredentials:"AuthForm_TestCredentials__3kgEZ",Error:"AuthForm_Error__2h1l9"}},23:function(e,t,n){e.exports={Header:"Header_Header__3ATBq",HeaderText:"Header_HeaderText__3l9nN",LogoutListElement:"Header_LogoutListElement__2fEYl",LogoutButton:"Header_LogoutButton__1jVAF"}},25:function(e,t,n){e.exports={Friend:"Friend_Friend__219Ag",Button:"Friend_Button__3GRam",ButtonRemove:"Friend_ButtonRemove__1Mgl9"}},30:function(e,t,n){e.exports={PreAuth:"PreAuth_PreAuth__1ATb-",LogInButton:"PreAuth_LogInButton__1gcLu"}},33:function(e,t,n){e.exports={StartingPage:"StartingPage_StartingPage__zRDK1",ImageContainer:"StartingPage_ImageContainer__1-AtL"}},37:function(e,t,n){e.exports={Friends:"Friends_Friends__sOhSC"}},50:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n.n(r),s=n(9),i=n(18),c=(n(49),n(50),n(0)),o=n(8),u=n(4),d=n.n(u),l=n(7),f=n(10),j=n(20),m=Object(j.b)({name:"friends",initialState:{users:[],myFriends:[],friendsFromDBReady:!1},reducers:{setMyFriendsList:function(e,t){e.myFriends=t.payload.myFriends,e.friendsFromDBReady=!0},setUsers:function(e,t){var n,r=t.payload.users,a=Object(f.a)(r);try{for(a.s();!(n=a.n()).done;){var s=n.value;e.users.push({id:s.id,first:s.first_name,last:s.last_name,email:s.email,avatar:s.avatar})}}catch(i){a.e(i)}finally{a.f()}},addNewFriend:function(e,t){var n=t.payload;e.myFriends.find((function(e){return e.id===n.id}))||e.myFriends.push({id:n.id,first:n.first,last:n.last,email:n.email,avatar:n.avatar})},deleteFriend:function(e,t){var n=t.payload.friendId,r=e.myFriends.filter((function(e){return e.id!==n}));r&&(e.myFriends=r)}}}),p=m.actions,h=m,b="https://nextpal-5e69e-default-rtdb.firebaseio.com/myFriends.json",g={isLogin:!1,isLoading:!1,token:localStorage.getItem("token"),logoutTimer:null,error:null},x=Object(j.b)({name:"auth",initialState:g,reducers:{setLoadingState:function(e,t){e.isLoading=t.payload},setIsLoginState:function(e,t){e.isLogin=t.payload},setToken:function(e,t){e.token=t.payload},checkUserStatus:function(e,t){e.token&&(e.isLogin=!0)},setLogoutTimer:function(e,t){e.logoutTimer=t.payload},setError:function(e,t){e.error=t.payload}}}),O=x.actions,v=x,y=n(1),w=function(e){return Object(y.jsx)(c.Fragment,{children:Object(y.jsx)("main",{children:e.children})})},F=n(39),_=n(30),k=n.n(_),L=function(){var e=Object(o.g)();return Object(y.jsxs)("div",{className:k.a.PreAuth,children:[Object(y.jsx)("h1",{children:"Check out what is going up"}),Object(y.jsx)("h3",{children:"Join to NextPal"}),Object(y.jsx)(F.a,{className:k.a.LogInButton,variant:"primary",onClick:function(t){t.preventDefault(),e.push("/login")},children:"Log In"})]})},S=n(33),T=n.n(S),N=n.p+"static/media/joel-muniz-0QuIgOjLLXc-unsplash.7abb0643.jpg",I=function(){return Object(y.jsxs)("div",{className:T.a.StartingPage,children:[Object(y.jsx)("div",{className:T.a.ImageContainer,children:Object(y.jsx)("img",{src:N,alt:"a group of girlfriends"})}),Object(y.jsx)(L,{})]})},E=n(34),P=n(12),A=n(61),R=n(59),B=n(38),C=n(16),H=n.n(C),M=function(){var e=Object(o.g)(),t=Object(s.b)(),n=Object(c.useState)(!0),r=Object(P.a)(n,2),a=r[0],i=r[1],u=Object(B.a)(),f=u.register,j=u.handleSubmit,m=u.formState.errors;return Object(y.jsxs)("section",{className:H.a.AuthForm,children:[Object(y.jsx)("h1",{children:a?"Sign in to NextPal":"Sign up to NextPal"}),Object(y.jsxs)(A.a,{className:H.a.MainForm,onSubmit:j(a?function(e){var n={email:e.email,password:e.password};t(function(e){var t=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t};return function(){var n=Object(l.a)(d.a.mark((function n(r){var a,s,i,c,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOlPcwmVrbztUP0PCTHLwbsNxNR3UoHsY",{method:"POST",body:JSON.stringify({email:e.email,password:e.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n.prev=1,r(O.setLoadingState(!0)),n.next=5,a();case 5:(s=n.sent).error?(r(O.setError(s.error.message)),alert(s.error.message)):(r(O.setIsLoginState(!0)),r(O.setToken(s.idToken)),localStorage.setItem("token",s.idToken),localStorage.setItem("expirationTime",s.expiresIn),i=new Date((new Date).getTime()+1e3*+s.expiresIn),c=t(i),o=setTimeout((function(){localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),r(O.setToken(null)),r(O.setIsLoginState(!1))}),c),r(O.setLogoutTimer(o))),r(O.setError(null)),r(O.setLoadingState(!1)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),alert("ERROR: "+n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()}(n))}:function(n){var r={email:n.email,password:n.password};t(function(e){return function(){var t=Object(l.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var t=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOlPcwmVrbztUP0PCTHLwbsNxNR3UoHsY",{method:"POST",body:JSON.stringify({email:e.email,password:e.password,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 2:if(t.sent.ok){t.next=5;break}throw new Error("Cannot register email. Error trying to send data to Firebase.");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,n(O.setLoadingState(!0)),t.next=5,r();case 5:n(O.setLoadingState(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("ERROR (logIn) -> "+t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(r)),e.push("/login")}),children:[Object(y.jsx)(A.a.Control,Object(E.a)({className:H.a.Input,type:"email",placeholder:"name@example.com",id:"email",name:"email"},f("email",{required:"Email is required",maxLength:45,pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Enter a valid email"}}))),m.email&&Object(y.jsx)("div",{className:H.a.Error,children:m.email.message}),Object(y.jsx)(A.a.Control,Object(E.a)({className:H.a.Input,type:"password",placeholder:"password",id:"password",name:"password"},f("password",{required:"Password is required",minLength:{value:6,message:"Password must have at least 6 characters"}}))),m.password&&Object(y.jsx)("div",{className:H.a.Error,children:m.password.message}),Object(y.jsxs)(R.a,{vertical:!0,children:[Object(y.jsx)(F.a,{className:H.a.LogButton,variant:"primary",type:"submit",children:a?"Log In":"Sign up"}),Object(y.jsx)(F.a,{className:H.a.SwitchMode,variant:"link",onClick:function(){i((function(e){return!e}))},children:a?"Create new account":"Login with existing account"})]}),Object(y.jsxs)("div",{className:H.a.TestCredentials,children:[Object(y.jsx)("p",{children:"Test me"}),Object(y.jsx)("p",{children:"Try to register yourself!"})]})]})]})},D=n(60),U=n(37),z=n.n(U),q=n(25),J=n.n(q),V=function(e){var t=Object(s.b)(),n=Object(c.useState)("Add Pal"),r=Object(P.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)(""),u=Object(P.a)(o,2),d=u[0],l=u[1];Object(c.useEffect)((function(){e.isFriend&&(i("Delete Pal"),l(e.email))}),[e.isFriend,e.email]);return Object(y.jsxs)("div",{className:J.a.Friend,children:[Object(y.jsx)("img",{src:e.avatar,alt:"A potential friend to add in your friend's list"}),Object(y.jsxs)("p",{children:[e.first," ",e.last]}),Object(y.jsx)("p",{children:Object(y.jsx)("i",{children:d})}),Object(y.jsx)(F.a,{className:e.isFriend?J.a.ButtonRemove:J.a.Button,variant:e.isFriend?"danger":"primary",onClick:e.isFriend?function(){t(p.deleteFriend({friendId:e.id})),i("Add Pal"),l("")}:function(){t(p.addNewFriend({id:e.id,first:e.first,last:e.last,email:e.email,avatar:e.avatar,isFriend:e.isFriend})),i("Delete Pal"),l(e.email)},children:a})]})},Y=n(23),Z=n.n(Y),G=function(){var e=Object(s.b)(),t=Object(o.g)(),n=Object(s.c)((function(e){return e.auth.logoutTimer}));return Object(y.jsxs)("div",{className:Z.a.Header,children:[Object(y.jsxs)("div",{className:Z.a.HeaderText,children:[Object(y.jsx)("h1",{children:"NextPal"}),Object(y.jsx)("h3",{children:"Make pals around the world!"})]}),Object(y.jsx)("nav",{children:Object(y.jsx)("ul",{className:Z.a.LogoutListElement,children:Object(y.jsx)("li",{children:Object(y.jsx)(F.a,{className:Z.a.LogoutButton,variant:"link",type:"submit",onClick:function(r){r.preventDefault(),e(O.setToken(null)),e(O.setIsLoginState(!1)),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),clearTimeout(n),t.push("/")},children:"Log Out"})})})})]})},K=function(){var e=Object(s.c)((function(e){return e.friends.users})),t=Object(s.c)((function(e){return e.friends.myFriends})),n=Object(s.c)((function(e){return e.friends.friendsFromDBReady})),r=function(e){var n,r=Object(f.a)(t);try{for(r.s();!(n=r.n()).done;){if(n.value.id===e)return!0}}catch(a){r.e(a)}finally{r.f()}return!1},a=n&&Object(y.jsx)("div",{className:z.a.Friends,children:e.map((function(e){return Object(y.jsx)(V,{id:e.id,first:e.first,last:e.last,email:e.email,avatar:e.avatar,isFriend:r(e.id)},e.id)}))}),i=!n&&Object(y.jsx)(D.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"});return Object(y.jsxs)(c.Fragment,{children:[Object(y.jsx)(G,{}),i,a]})},Q=!0;var W=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.friends.myFriends})),n=Object(s.c)((function(e){return e.auth.isLogin}));return Object(c.useEffect)((function(){var n;Q?Q=!1:e((n=t,function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"PUT",body:JSON.stringify(n)});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Friend cannot be added");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,r();case 4:t(p.setMyFriendsList({myFriends:n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("ERROR (storeMyFriends) -> "+e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,t]),Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch list of friends");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:r=e.sent,t(p.setMyFriendsList({myFriends:r||[]})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("ERROR (getMyFriends) -> "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=1");case 2:return t=e.sent,e.next=5,fetch("https://reqres.in/api/users?page=2");case 5:if(n=e.sent,t.ok&&n.ok){e.next=8;break}throw new Error("Could not fetch list of users");case 8:return e.next=10,t.json();case 10:return r=e.sent,e.next=13,n.json();case 13:return a=e.sent,e.abrupt("return",r.data.concat(a.data));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:r=e.sent,t(p.setUsers({users:r})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("ERROR (fetchAllUsers) -> "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(c.useEffect)((function(){e(v.actions.checkUserStatus())}),[e]),Object(y.jsx)(w,{children:Object(y.jsxs)(o.d,{children:[!n&&Object(y.jsx)(o.b,{path:"/login",children:Object(y.jsx)(M,{})}),!n&&Object(y.jsx)(o.b,{path:"/",exact:!0,children:Object(y.jsx)(I,{})}),n&&Object(y.jsx)(o.b,{path:"/logout",children:Object(y.jsx)(o.a,{to:"/"})}),n&&Object(y.jsx)(o.b,{path:"/friends",children:Object(y.jsx)(K,{})}),Object(y.jsxs)(o.b,{path:"*",children:[n&&Object(y.jsx)(o.a,{to:"/friends"}),!n&&Object(y.jsx)(o.a,{to:"/login"})]})]})})},X=Object(j.a)({reducer:{friends:h.reducer,auth:v.reducer}});a.a.render(Object(y.jsx)(s.a,{store:X,children:Object(y.jsx)(i.a,{children:Object(y.jsx)(W,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.cb0fc161.chunk.js.map