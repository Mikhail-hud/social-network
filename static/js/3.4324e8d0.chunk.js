(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[3],{292:function(t,e,a){t.exports={myposts:"MyPosts_myposts__1DCSH",myposts_tx:"MyPosts_myposts_tx__2VRlE",myposts_tx_btn:"MyPosts_myposts_tx_btn__3psjr",myposts_tx_in:"MyPosts_myposts_tx_in__1ByJh",myposts_tx_in_error:"MyPosts_myposts_tx_in_error__2-anf"}},294:function(t,e,a){t.exports={profile:"ProfileInfo_profile__3VXxi",profile_card:"ProfileInfo_profile_card__3IYeR",profile_card_avatar:"ProfileInfo_profile_card_avatar__3fnn1",profile_container:"ProfileInfo_profile_container__KUcGP"}},295:function(t,e,a){t.exports=a.p+"static/media/logo-main.50953027.png"},296:function(t,e,a){t.exports={status:"ProfileStatus_status__JjjQW"}},297:function(t,e,a){t.exports={posts:"Posts_posts__3SzYf",posts_logo:"Posts_posts_logo__2ylsm",posts_text:"Posts_posts_text__1ku7w",posts_count:"Posts_posts_count__35RCX",posts_likes:"Posts_posts_likes__6PTlu"}},298:function(t,e,a){t.exports=a.p+"static/media/user.50953027.png"},299:function(t,e,a){"use strict";a.r(e);var s=a(35),o=a(36),n=a(38),r=a(37),l=a(0),c=a.n(l),i=a(15),u=a(9),p=a(97),m=a(294),_=a.n(m),f=a(295),d=a.n(f),E=a(40),b=a(69),h=a(296),y=a.n(h),P=function(t){var e=Object(l.useState)(!1),a=Object(b.a)(e,2),s=a[0],o=a[1],n=Object(l.useState)(t.status),r=Object(b.a)(n,2),i=r[0],u=r[1];Object(l.useEffect)((function(){u(t.status)}),[t.status]);return c.a.createElement("div",{className:y.a.status},s?c.a.createElement("div",null,c.a.createElement("input",{onChange:function(t){u(t.target.value)},autoFocus:!0,defaultValue:i,onBlur:function(){o(!1),t.updateStatus(i)}})):c.a.createElement("div",null,c.a.createElement("span",{className:y.a.profile_status,onDoubleClick:function(){o(!0)}},i||"Dubl click to change your status!!!")))},g=function(t){return t.profile?c.a.createElement("section",{className:_.a.profile},c.a.createElement("aside",{className:_.a.profile_card},c.a.createElement("div",{className:_.a.profile_card_avatar},c.a.createElement("img",{src:null!==t.profile.photos.large?t.profile.photos.large:d.a,alt:"avatar"})),c.a.createElement("h2",null,t.profile.fullName),c.a.createElement(P,{status:t.status,updateStatus:t.updateStatus}),c.a.createElement("div",{className:_.a.profile_container},c.a.createElement("p",null,t.profile.aboutMe),c.a.createElement("p",null,t.profile.lookingForAJobDescription),c.a.createElement("p",null,t.profile.contacts.facebook),c.a.createElement("p",null,t.profile.contacts.vk),c.a.createElement("p",null,t.profile.contacts.github)))):c.a.createElement(E.a,null)},x=a(7),v=a(41),j=a(292),N=a.n(j),O=a(297),S=a.n(O),k=a(298),w=a.n(k),C=function(t){return c.a.createElement("div",{className:S.a.posts},c.a.createElement("div",{className:S.a.posts_logo},c.a.createElement("img",{src:w.a,alt:"user"})),c.a.createElement("div",{className:S.a.posts_text},c.a.createElement("p",null,t.massage),c.a.createElement("div",{className:S.a.posts_likes},c.a.createElement("i",{className:"far fa-heart"},c.a.createElement("span",{className:S.a.posts_count},t.likesCount)))))},I=a(87),M=a(67),A=a(129),D=a(130),F=Object(I.a)(100),J=Object(D.a)({form:"profileAddNewPostForm"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("label",{className:N.a.myposts_tx},c.a.createElement(A.a,{className:N.a.myposts_tx_in,component:M.b,name:"newPostText",validate:F})),c.a.createElement("label",null,c.a.createElement("button",{className:N.a.myposts_tx_btn,type:"submit"},"  Add post ")))})),T=function(t){var e=Object(v.a)(t.posts).reverse().map((function(t){return c.a.createElement(C,{massage:t.message,likesCount:t.likesCount,key:t.id})}));return c.a.createElement("section",{className:N.a.myposts},c.a.createElement("h2",null,"My posts"),c.a.createElement(J,{onSubmit:function(e){t.addPost(e.newPostText)}}),e)},U=Object(x.d)(Object(i.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}})))(T),z=function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Profile"),c.a.createElement(g,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(U,null))},R=function(t){Object(n.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(z,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),a}(c.a.Component);e.default=Object(x.d)(Object(i.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.e}),u.f)(R)}}]);
//# sourceMappingURL=3.4324e8d0.chunk.js.map