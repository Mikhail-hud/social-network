(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[1],{100:function(e,t,n){e.exports=n.p+"static/media/logo.ad897913.png"},112:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144);t.a=function(){return r.a.createElement(i.a,{style:{position:"absolute",left:"50%",top:"0.2%"},size:"large",tip:"Loading..."})}},143:function(e,t,n){e.exports={"ant-btn-round":"User_ant-btn-round__1yFx-","ant-btn":"User_ant-btn__3riXC","ant-btn-lg":"User_ant-btn-lg__1Jaz2","ant-comment-avatar":"User_ant-comment-avatar__1Rwgb","ant-btn-dashed":"User_ant-btn-dashed__2soxm","ant-list-split":"User_ant-list-split__3QUSp","ant-list-item":"User_ant-list-item__2NKmY","ant-list-vertical":"User_ant-list-vertical__1qTvu","ant-list-item-action":"User_ant-list-item-action__1z3dE","ant-list-item-extra":"User_ant-list-item-extra__3dFsO","ant-list-item-action-split":"User_ant-list-item-action-split__P6H2R","ant-layout":"User_ant-layout__2H9mt","ant-layout-content":"User_ant-layout-content__3Iddc","ant-list-item-meta-content":"User_ant-list-item-meta-content__3eCeo","ant-drawer-title":"User_ant-drawer-title__16phG","ant-btn-primary":"User_ant-btn-primary__39gqM",thinScrollBar:"User_thinScrollBar__12KFe","send-message-form":"User_send-message-form__3EADU",user_list:"User_user_list__O7TQx",follow_button:"User_follow_button__-o1vy"}},148:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return E})),n.d(t,"j",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return O}));var a=n(23),r=n.n(a),i=n(32),o=n(58),s=n(7),c=n(29),u={posts:[{id:1,message:"React.Js, - a JavaScript library for building user interfaces",likesCount:1,dislikesCount:10},{id:2,message:"React makes it painless to create interactive UIs.",likesCount:6,dislikesCount:20},{id:3,message:"Build encapsulated components that manage their own state, then compose them to make complex UIs.",likesCount:2,dislikesCount:2},{id:4,message:"We don\u2019t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code",likesCount:7,dislikesCount:0},{id:5,message:"Have a good day!!!!",likesCount:5,dislikesCount:4}],profile:null,status:"",error:null},l=function(e){return{type:"ADD-POST",newPostText:e}},d=function(e){return{type:"DELETE-POST",id:e}},f=function(e){return{type:"SET-STATUS",status:e}},m=function(e){return{type:"ADD-LIKE",id:e}},p=function(e){return{type:"ADD-DISLIKE",id:e}},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE-PHOTO-SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n,a){var i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().auth.id,t.next=3,c.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(g(i)),t.next=10;break;case 8:return n({type:"/PROFILE-SET-NON-FIELD-ERROR",payload:{error:o.data.messages}}),t.abrupt("return",Promise.reject(o.data.messages));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=10+90*Math.random(),a={id:n,message:t.newPostText,likesCount:0,dislikesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[a]),newPostText:""});case"DELETE-POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id?Object(s.a)({},e):null}))});case"SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});case"ADD-LIKE":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id&&e.dislikesCount>0?Object(s.a)(Object(s.a)({},e),{},{likesCount:e.likesCount+1,dislikesCount:e.dislikesCount-1}):e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{likesCount:e.likesCount+1}):e}))});case"ADD-DISLIKE":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id&&e.likesCount>0?Object(s.a)(Object(s.a)({},e),{},{dislikesCount:e.dislikesCount+1,likesCount:e.likesCount-1}):e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{dislikesCount:e.dislikesCount+1}):e}))});case"/PROFILE-SET-NON-FIELD-ERROR":return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(58),r=n(7),i={dialogs:[{id:1,name:"Dimich"},{id:2,name:"Tany"},{id:3,name:"Oleg"},{id:4,name:"Kirilh"},{id:5,name:"Pahsa"}],messages:[{id:1,message:"Hello"},{id:2,message:"How was your day7"},{id:3,message:"Not bad"},{id:4,message:"Thanks"},{id:5,message:"have a good day"}]},o=function(e){return{type:"SEND-MESSAGE",payload:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:8,message:t.payload}])});default:return e}}},185:function(e,t,n){e.exports={"ant-btn-round":"Friend_ant-btn-round__3etfX","ant-btn":"Friend_ant-btn__2CcAl","ant-btn-lg":"Friend_ant-btn-lg__Xzg5O","ant-comment-avatar":"Friend_ant-comment-avatar__Et_Lw","ant-btn-dashed":"Friend_ant-btn-dashed__3Z87I","ant-list-split":"Friend_ant-list-split__U6CW1","ant-list-item":"Friend_ant-list-item__DkEhO","ant-list-vertical":"Friend_ant-list-vertical__Z95Un","ant-list-item-action":"Friend_ant-list-item-action__3i1a_","ant-list-item-extra":"Friend_ant-list-item-extra__1jHuL","ant-list-item-action-split":"Friend_ant-list-item-action-split__3IenJ","ant-layout":"Friend_ant-layout__2bMy7","ant-layout-content":"Friend_ant-layout-content__2Fws5","ant-list-item-meta-content":"Friend_ant-list-item-meta-content__2fFC8","ant-drawer-title":"Friend_ant-drawer-title__29600","ant-btn-primary":"Friend_ant-btn-primary__2KBUP",thinScrollBar:"Friend_thinScrollBar__1WHLg","send-message-form":"Friend_send-message-form__2NJtF",friend_card:"Friend_friend_card__17mdR"}},189:function(e,t,n){e.exports={trigger:"Sidebar_trigger__1hRQL"}},198:function(e,t,n){e.exports=n(302)},203:function(e,t,n){},29:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c}));var a=n(177),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"785356f0-bfad-453c-883d-856e6d5db0d2"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFriends:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t,"&friend=",!0)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e))},follow:function(e){return r.post("follow/".concat(e))}},o={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},s={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},c={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},302:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(26),o=n.n(i),s=(n(203),n(113)),c=n(114),u=n(130),l=n(128),d=n(25),f=n(44),m=n(48),p=n(176),g=n(148),E=n(163),b={},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return e},O=n(23),F=n.n(O),S=n(32),y=n(58),j=n(7),_=n(29),w={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},C=function(e){return{type:"FOLLOW",userId:e}},v=function(e){return{type:"UN-FOLLOW",userId:e}},P=function(e,t){return{type:"TOGGLE-IS-FETCHING-FOLLOWING-PROGRESS",isFetching:e,userId:t}},I=function(){var e=Object(S.a)(F.a.mark((function e(t,n,a,r){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(P(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(P(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage,isFetching:!0});case"SET-TOTAL-USERS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FETCHING-FOLLOWING-PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"CHANGE-PAGE-SIZE":return Object(j.a)(Object(j.a)({},e),{},{pageSize:t.pageSize,isFetching:!0});default:return e}},U={id:null,email:null,login:null,isAuth:!1,captchaUrl:null,error:null},x=function(){return function(){var e=Object(S.a)(F.a.mark((function e(t){var n,a,r,i,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,i=a.login,o=a.email,t(R(r,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(S.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(A(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e,t,n,a){return{type:"/AUTH/SET-USER-DATA",payload:{id:e,email:t,login:n,isAuth:a}}},A=function(e){return{type:"/AUTH/GET-CAPTCHA-URL",payload:{captchaUrl:e}}},N=function(e){return{type:"/AUTH/SET-NON-FIELD-ERROR",payload:{error:e}}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/AUTH/SET-USER-DATA":case"/AUTH/GET-CAPTCHA-URL":case"/AUTH/SET-NON-FIELD-ERROR":return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},G={initialized:!1},D=function(){return{type:"INITIALIZED-SUCCESS"}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},H={friends:[],pageSizeFriends:5,totalFriendsCount:0,currentPageFriends:1,isFetchingFriends:!1,unFollowingInProgress:[]},W=function(e,t){return{type:"TOGGLE-IS-REMOVING-PROGRESS",isFetchingFriends:e,friendId:t}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-FRIENDS":return Object(j.a)(Object(j.a)({},e),{},{friends:t.friends});case"DELETE-FREND":return Object(j.a)(Object(j.a)({},e),{},{friends:e.friends.filter((function(e){return e.id!==t.id?Object(j.a)({},e):null}))});case"SET-CURRENT-PAGE-FRIENDS":return Object(j.a)(Object(j.a)({},e),{},{currentPageFriends:t.currentPageFriends,isFetchingFriends:!0});case"SET-TOTAL-FRIENDS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalFriendsCount:t.totalFriendsCount});case"TOGGLE-IS-FETCHING-FRIENDS":return Object(j.a)(Object(j.a)({},e),{},{isFetchingFriends:t.isFetchingFriends});case"TOGGLE-IS-REMOVING-PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{unFollowingInProgress:t.isFetchingFriends?[].concat(Object(y.a)(e.unFollowingInProgress),[t.friendId]):e.unFollowingInProgress.filter((function(e){return e!==t.friendId}))});case"CLEAR_IN_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{unFollowingInProgress:[]});case"CHANGE-PAGE-SIZE-FRIENDS":return Object(j.a)(Object(j.a)({},e),{},{pageSizeFriends:t.pageSizeFriends,isFetchingFriends:!0});default:return e}},B=n(310),K=Object(m.c)({profilePage:g.d,dialogsPage:E.a,sidebar:h,usersPage:T,auth:L,form:B.a,app:z,friends:M}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,Z=Object(m.e)(K,J(Object(m.a)(p.a)));window.store=Z;var V=Z,q=n(85),X=n(51),Q=n(190),Y=function(e){var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,i=e.isFetching,o=e.onSetCurrentPage,s=e.onChangePageSize;return r.a.createElement(q.a,{justify:"center"},r.a.createElement(X.a,null,r.a.createElement(Q.a,{responsive:!0,disabled:i,style:{textAlign:"center",marginBottom:"2rem"},pageSizeOptions:[5,10,15,20,50],pageSize:n,current:a,total:t,onShowSizeChange:function(e,t){s(t)},showSizeChanger:!0,onChange:function(e){o(e)},showQuickJumper:!0,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}})))},$=n(100),ee=n.n($),te=n(143),ne=n(315),ae=n(96),re=n(311),ie=n(316),oe=n(317),se=n(318),ce=n(319),ue=function(e){var t=e.user,n=e.followingInProgress,a=e.onUnfollow,i=e.onFollow,o=e.isFetching;return r.a.createElement(q.a,{justify:"center"},r.a.createElement(X.a,{xs:24,sm:24,md:18,lg:14,xl:12,xxl:10},r.a.createElement(ne.b,{className:te.user_list,itemLayout:"vertical",size:"large",dataSource:t,renderItem:function(e){return r.a.createElement(ne.b.Item,{key:e.id,actions:!o&&[r.a.createElement(ae.a,{className:te.follow_button,onClick:function(){return t=e.followed,n=e.id,void(t?a(n):i(n));var t,n},disabled:n.some((function(t){return t===e.id})),type:"dashed",shape:"round",icon:e.followed?r.a.createElement(ie.a,null):r.a.createElement(oe.a,null)},e.followed?"Unfollow":"Follow"),r.a.createElement(ae.a,{type:"dashed",shape:"round",disabled:!0,icon:r.a.createElement(se.a,null)}),r.a.createElement(f.b,{to:"/dialogs"},r.a.createElement(ae.a,{type:"dashed",shape:"round",disabled:!0,icon:r.a.createElement(ce.a,null)}))],extra:!o&&r.a.createElement(f.b,{to:"/profile/"+e.id},r.a.createElement("img",{width:100,style:{borderRadius:"50%"},alt:"logo",src:null!==e.photos.small?e.photos.small:ee.a}))},r.a.createElement(re.a,{loading:o,active:!0,shape:!0},r.a.createElement(ne.b.Item.Meta,{title:r.a.createElement(f.b,{to:"/profile/"+e.id},e.name),description:e.status})))}})))},le=r.a.memo((function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,i=e.isFetching,o=e.users,s=e.onFollow,c=e.onUnfollow,u=e.followingInProgress,l=e.onChangePageSize,d=e.onSetCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Users"),r.a.createElement(Y,{currentPage:t,isFetching:i,totalItemsCount:n,pageSize:a,onChangePageSize:l,onSetCurrentPage:d}),r.a.createElement(ue,{user:o,followingInProgress:u,onFollow:s,onUnfollow:c,isFetching:i}))})),de=n(22),fe=function(){var e=Object(de.c)(),t=Object(de.d)((function(e){return e.usersPage.users})),n=Object(de.d)((function(e){return e.usersPage.pageSize})),i=Object(de.d)((function(e){return e.usersPage.currentPage})),o=Object(de.d)((function(e){return e.usersPage.isFetching})),s=Object(de.d)((function(e){return e.usersPage.followingInProgress})),c=Object(de.d)((function(e){return e.usersPage.totalUsersCount}));Object(a.useEffect)((function(){e(function(e,t){return function(){var n=Object(S.a)(F.a.mark((function n(a){var r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.d.getUsers(e,t);case 2:r=n.sent,a({type:"TOGGLE-IS-FETCHING",isFetching:!1}),a({type:"SET-USERS",users:r.items}),a({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:r.totalCount});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(i,n))}),[e,i,n]);var u=Object(a.useCallback)((function(t){var n;e((n=t,function(e){I(e,n,_.d.unfollow.bind(_.d),v)}))}),[e]),l=Object(a.useCallback)((function(t){var n;e((n=t,function(e){I(e,n,_.d.follow.bind(_.d),C)}))}),[e]),d=Object(a.useCallback)((function(t){e(function(e){return{type:"CHANGE-PAGE-SIZE",pageSize:e}}(t))}),[e]),f=Object(a.useCallback)((function(t){e(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(t))}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{totalUsersCount:c,pageSize:n,currentPage:i,users:t,onUnfollow:u,onFollow:l,followingInProgress:s,isFetching:o,onChangePageSize:d,onSetCurrentPage:f}))},me=n(320),pe=n(321),ge=function(e){var t=Object(d.g)(),n=e.isAuth,a=e.login,i=e.onLogout;return r.a.createElement(q.a,{style:{width:"100%"},justify:"space-between"},r.a.createElement(X.a,null,r.a.createElement("h3",null,n?a:"Join us!")),r.a.createElement(X.a,null,r.a.createElement(ae.a,{className:"btn-login-out",style:{background:"none"},type:"dashed",shape:"round",size:"large",onClick:function(){n?i():t.push("/login")},icon:n?r.a.createElement(me.a,null):r.a.createElement(pe.a,null)},n?"logout":"login")))},Ee=n(305),be=Ee.a.Header,he={background:"none",boxShadow:"0 0 10px rgba(0, 0, 0, .2)",padding:"20px",margin:"0 16px",lineHeight:"normal",display:"flex",alignItems:"center"},Oe=function(){var e=Object(de.c)(),t=Object(de.d)((function(e){return e.auth.isAuth})),n=Object(de.d)((function(e){return e.auth.login}));return r.a.createElement(be,{style:he},r.a.createElement(ge,{isAuth:t,login:n,onLogout:function(){e(function(){var e=Object(S.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.logout();case 2:0===e.sent.data.resultCode&&t(R(null,null,null,!1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}))},Fe=function(e){return{isAuth:e.auth.isAuth}},Se=n(185),ye=n(307),je=n(306),_e=ye.a.Meta,we=function(e){var t=e.friends,n=e.unFollowingInProgress,a=e.onUnFollowFriend,i=e.isFetchingFriends;return r.a.createElement(q.a,{justify:"center"},t.map((function(e){return r.a.createElement(X.a,{xs:24,sm:24,md:12,lg:8,xl:6,style:{display:"flex",justifyContent:"space-around"},key:e.id},r.a.createElement(ye.a,{className:Se.friend_card,loading:i,hoverable:!0,size:"small",style:{maxWidth:"200px",marginBottom:"2rem",display:"flex",justifyContent:"space-between",flexDirection:"column"},cover:!i&&r.a.createElement(f.b,{to:"/profile/"+e.id},r.a.createElement("img",{alt:"logo",src:null!==e.photos.large?e.photos.large:ee.a})),actions:[r.a.createElement(je.a,{title:"Are you sure to delete ".concat(e.name,"?"),onConfirm:function(){return t=e.id,void a(t);var t},okText:"Delete",cancelText:"No way!"},r.a.createElement(ae.a,{type:"dashed",shape:"round",disabled:n.some((function(t){return t===e.id})),icon:r.a.createElement(ie.a,null)})),r.a.createElement(f.b,{to:"/dialogs/".concat(e.id)},r.a.createElement(ae.a,{type:"dashed",shape:"round",icon:r.a.createElement(ce.a,null)})),r.a.createElement(ae.a,{type:"dashed",shape:"round",icon:r.a.createElement(se.a,null)})]},r.a.createElement(_e,{title:e.name,description:e.status})))})))},Ce=r.a.memo((function(e){var t=e.isFetchingFriends,n=e.currentPageFriends,a=e.totalFriendsCount,i=e.pageSizeFriends,o=e.friends,s=e.unFollowingInProgress,c=e.onUnFollowFriend,u=e.onSetCurrentPage,l=e.onChangePageSize;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Friends"),r.a.createElement(Y,{currentPage:n,totalItemsCount:a,pageSize:i,onSetCurrentPage:u,onChangePageSize:l,isFetching:t}),r.a.createElement(we,{isFetchingFriends:t,friends:o,unFollowingInProgress:s,onUnFollowFriend:c}))})),ve=Object(m.d)((function(e){var t=function(t){Object(u.a)(a,t);var n=Object(l.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(d.a,{to:"/login"})}}]),a}(r.a.Component);return Object(de.b)(Fe)(t)}))((function(){var e=Object(de.c)(),t=Object(de.d)((function(e){return e.friends.friends})),n=Object(de.d)((function(e){return e.friends.totalFriendsCount})),i=Object(de.d)((function(e){return e.friends.pageSizeFriends})),o=Object(de.d)((function(e){return e.friends.currentPageFriends})),s=Object(de.d)((function(e){return e.friends.isFetchingFriends})),c=Object(de.d)((function(e){return e.friends.unFollowingInProgress}));Object(a.useEffect)((function(){e(function(e,t){return function(){var n=Object(S.a)(F.a.mark((function n(a){var r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_.d.getFriends(e,t);case 2:r=n.sent,a({type:"TOGGLE-IS-FETCHING-FRIENDS",isFetchingFriends:!1}),a({type:"SET-FRIENDS",friends:r.items}),a({type:"SET-TOTAL-FRIENDS-COUNT",totalFriendsCount:r.totalCount}),a({type:"CLEAR_IN_FOLLOWING_PROGRESS"});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(o,i))}),[o,i,e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{totalFriendsCount:n,pageSizeFriends:i,currentPageFriends:o,isFetchingFriends:s,friends:t,unFollowingInProgress:c,onUnFollowFriend:function(t){var n;e((n=t,function(){var e=Object(S.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(W(!0,n)),e.next=3,_.d.unfollow(n);case 3:0===e.sent.data.resultCode&&t({type:"DELETE-FREND",id:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},onChangePageSize:function(t){e(function(e){return{type:"CHANGE-PAGE-SIZE-FRIENDS",pageSizeFriends:e}}(t))},onSetCurrentPage:function(t){e(function(e){return{type:"SET-CURRENT-PAGE-FRIENDS",currentPageFriends:e}}(t))}}))})),Pe=n(309),Ie=n(193),Te=n(308),Ue=n(312),xe=n(314),ke=n(196),Re=n(322),Ae=n(323),Ne=n(324),Le=Pe.a.Text,Ge={labelCol:{span:5},wrapperCol:{span:19}},De={wrapperCol:{offset:5,span:19}},ze=function(e){var t=e.error,n=e.captchaUrl,i=e.onLogin,o=e.clearError;Object(a.useEffect)((function(){t&&(!function(e){Ie.a.open({duration:3,description:"Please check your credentials and try again!",message:e,icon:r.a.createElement(ke.a,{style:{color:"red"}})})}(t),o(null))}),[t,o]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sign In"),r.a.createElement(q.a,{justify:"center"},r.a.createElement(X.a,{span:24},r.a.createElement(Te.a,Object.assign({style:{margin:"0 auto",maxWidth:"500px",marginTop:"50px"}},Ge,{name:"login",initialValues:{rememberMe:!0},onFinish:function(e){i(e.email,e.password,e.rememberMe,e.captcha)},onFinishFailed:function(e){console.log("Failed:",e)}}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,null,r.a.createElement(X.a,{xs:24,sm:{span:19,offset:5}},r.a.createElement("img",{src:n,alt:"captcha",style:{margin:"0 auto",display:"block",marginBottom:"10px"}}))),r.a.createElement(Te.a.Item,{label:"Captcha",name:"captcha",rules:[{required:!0,message:"Please input your Captcha!"}]},r.a.createElement(Ue.a,{type:"text",prefix:r.a.createElement(Re.a,{className:"site-form-item-icon"})}))),r.a.createElement(q.a,null,r.a.createElement(X.a,{xs:24,sm:{span:19,offset:5},style:{marginBottom:"10px"}},r.a.createElement(Le,{strong:!0},"For test use email: free@samuraijs.com"))),r.a.createElement(Te.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(Ue.a,{autoComplete:"username",prefix:r.a.createElement(Ae.a,{className:"site-form-item-icon"}),type:"email"})),r.a.createElement(q.a,null,r.a.createElement(X.a,{xs:24,sm:{span:19,offset:5},style:{marginBottom:"10px"}},r.a.createElement(Le,{strong:!0},"Password: free"))),r.a.createElement(Te.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Ue.a.Password,{autoComplete:"new-password",prefix:r.a.createElement(Ne.a,{className:"site-form-item-icon"})})),r.a.createElement(Te.a.Item,Object.assign({},De,{name:"rememberMe",valuePropName:"checked"}),r.a.createElement(xe.a,null,"Remember me")),r.a.createElement(Te.a.Item,De,r.a.createElement(ae.a,{type:"primary",htmlType:"submit"},"Submit"))))))},He=function(){var e=Object(de.c)(),t=Object(de.d)((function(e){return e.auth.isAuth})),n=Object(de.d)((function(e){return e.auth.captchaUrl})),i=Object(de.d)((function(e){return e.auth.error})),o=Object(a.useCallback)((function(t,n,a,r){e(function(e,t,n,a){return function(){var r=Object(S.a)(F.a.mark((function r(i){var o,s;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.login(e,t,n,a);case 2:0===(o=r.sent).data.resultCode?(i(x()),i(N(null)),i(A(null))):(10===o.data.resultCode&&i(k()),s=o.data.messages.length>0?o.data.messages[0]:"Some error",i(N(s)));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,n,a,r))}),[e]),s=Object(a.useCallback)((function(t){e(N(t))}),[e]);return t?r.a.createElement(d.a,{to:"/profile"}):r.a.createElement(ze,{isAuth:t,captchaUrl:n,onLogin:o,error:i,clearError:s})},We=n(147),Me=n(189),Be=n(313),Ke=n(325),Je=n(326),Ze={position:"sticky",top:"11%",background:"none",fontSize:"17px"},Ve={fontSize:"17px"},qe=[{key:0,slug:"/profile",icon:r.a.createElement(Ae.a,{style:Ve}),title:"Profile"},{key:1,slug:"/users",icon:r.a.createElement(Ke.a,{style:Ve}),title:"Users"},{key:2,slug:"/friends",icon:r.a.createElement(Je.a,{style:Ve}),title:"Friends"},{key:3,slug:"/dialogs",icon:r.a.createElement(ce.a,{style:Ve}),title:"Dialogs"}],Xe=function(){return r.a.createElement(Be.a,{theme:"light",mode:"inline",defaultSelectedKeys:["0"],style:Ze},qe.map((function(e){return r.a.createElement(Be.a.Item,{key:e.key,icon:e.icon},r.a.createElement(f.b,{to:e.slug},e.title))})))},Qe=n(327),Ye=n(328),$e={background:"none",boxShadow:"0 0 10px rgba(0, 0, 0, .2)",marginBottom:"24px"},et=Ee.a.Sider,tt=function(){var e=Object(a.useState)(!0),t=Object(We.a)(e,2),n=t[0],i=t[1];return r.a.createElement(et,{trigger:null,collapsible:!0,collapsed:n,theme:"light",style:$e},r.a.createElement(n?Qe.a:Ye.a,{className:Me.trigger,onClick:function(){i(!n)}}),r.a.createElement(Xe,null))},nt=n(112),at=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(nt.a,null)},r.a.createElement(e,t))}},rt=(n(301),Ee.a.Content),it=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,348))})),ot=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,347))})),st=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){console.error(e)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(Ee.a,null,r.a.createElement(tt,null),r.a.createElement(Ee.a,null,r.a.createElement(Oe,null),r.a.createElement(rt,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/profile"})}}),r.a.createElement(d.b,{path:"/profile/:userId?",render:at(ot)}),r.a.createElement(d.b,{path:"/dialogs",render:at(it)}),r.a.createElement(d.b,{path:"/users",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(d.b,{path:"/friends",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(d.b,{path:"*",render:function(){return r.a.createElement("section",null,"404 not found")}}))))):r.a.createElement(nt.a,null)}}]),n}(r.a.Component),ct=Object(m.d)(d.h,Object(de.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(x());Promise.all([t]).then((function(){e(D())}))}}}))(st),ut=function(e){return r.a.createElement(f.a,null,r.a.createElement(de.a,{store:V},r.a.createElement(ct,null)))};o.a.render(r.a.createElement(ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,2,3]]]);
//# sourceMappingURL=main.cb9ff1e6.chunk.js.map