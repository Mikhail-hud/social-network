(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[4],{333:function(e,t,a){e.exports={"ant-btn-round":"ProfileInfo_ant-btn-round__2ZTQl","ant-btn":"ProfileInfo_ant-btn__2ep_P","ant-btn-lg":"ProfileInfo_ant-btn-lg__2k5X0","ant-comment-avatar":"ProfileInfo_ant-comment-avatar__24qZ1","ant-btn-dashed":"ProfileInfo_ant-btn-dashed__1vg2S","ant-list-split":"ProfileInfo_ant-list-split__2Zy8M","ant-list-item":"ProfileInfo_ant-list-item__1_OCV","ant-list-vertical":"ProfileInfo_ant-list-vertical__21KJz","ant-list-item-action":"ProfileInfo_ant-list-item-action__FkcO6","ant-list-item-extra":"ProfileInfo_ant-list-item-extra__20RF_","ant-list-item-action-split":"ProfileInfo_ant-list-item-action-split__XGF3R","ant-layout":"ProfileInfo_ant-layout__2PKjX","ant-layout-content":"ProfileInfo_ant-layout-content__2LhBL","ant-list-item-meta-content":"ProfileInfo_ant-list-item-meta-content__33MOt","ant-drawer-title":"ProfileInfo_ant-drawer-title__1F0Td","ant-btn-primary":"ProfileInfo_ant-btn-primary__3N6D5",thinScrollBar:"ProfileInfo_thinScrollBar__HXUZl","send-message-form":"ProfileInfo_send-message-form__2AZ80",profile_card:"ProfileInfo_profile_card__9225X",profile_data:"ProfileInfo_profile_data__106v2"}},334:function(e,t,a){e.exports=a.p+"static/media/github.549cf7b4.svg"},335:function(e,t,a){e.exports=a.p+"static/media/facebook.7f4357e1.svg"},336:function(e,t,a){e.exports=a.p+"static/media/vk.83bd7ad2.svg"},337:function(e,t,a){e.exports=a.p+"static/media/mainLink.2b0eb018.svg"},338:function(e,t,a){e.exports=a.p+"static/media/youtube.18f3221d.svg"},339:function(e,t,a){e.exports=a.p+"static/media/instagram.fa06bfe9.svg"},340:function(e,t,a){e.exports=a.p+"static/media/twitter.87557f42.svg"},341:function(e,t,a){e.exports=a.p+"static/media/website.9e0f713e.svg"},342:function(e,t,a){e.exports=a.p+"static/media/updateLogo.8ab220ae.svg"},343:function(e,t,a){e.exports={"ant-btn-round":"ProfileStatus_ant-btn-round__LtekZ","ant-btn":"ProfileStatus_ant-btn__1pNOZ","ant-btn-lg":"ProfileStatus_ant-btn-lg__1Jo99","ant-comment-avatar":"ProfileStatus_ant-comment-avatar__C1s9d","ant-btn-dashed":"ProfileStatus_ant-btn-dashed__1woSR","ant-list-split":"ProfileStatus_ant-list-split__20X0e","ant-list-item":"ProfileStatus_ant-list-item__1oH2k","ant-list-vertical":"ProfileStatus_ant-list-vertical__1qYul","ant-list-item-action":"ProfileStatus_ant-list-item-action__3Ou9T","ant-list-item-extra":"ProfileStatus_ant-list-item-extra__3llgh","ant-list-item-action-split":"ProfileStatus_ant-list-item-action-split__1fyhW","ant-layout":"ProfileStatus_ant-layout__2vq7w","ant-layout-content":"ProfileStatus_ant-layout-content__3tA8e","ant-list-item-meta-content":"ProfileStatus_ant-list-item-meta-content__3kgQY","ant-drawer-title":"ProfileStatus_ant-drawer-title__2iksY","ant-btn-primary":"ProfileStatus_ant-btn-primary__2dNnB",thinScrollBar:"ProfileStatus_thinScrollBar__HIeUO","send-message-form":"ProfileStatus_send-message-form__1GEw5",status:"ProfileStatus_status__3irgE",status_active:"ProfileStatus_status_active__3iehO"}},347:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(25),o=a(148),r=a(147),s=a(333),c=a(100),u=a.n(c),m=a(334),f=a.n(m),d=a(335),p=a.n(d),_=a(336),b=a.n(_),E=a(337),g=a.n(E),h=a(338),P=a.n(h),k=a(339),v=a.n(k),y=a(340),O=a.n(y),j=a(341),S=a.n(j),w=a(342),x=a.n(w),I=a(112),C=a(149),A=a(343),D=a.n(A),L=a(4),F=a.n(L),N=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),i=a[0],o=a[1],s=Object(n.useState)(e.status),c=Object(r.a)(s,2),u=c[0],m=c[1];Object(n.useEffect)((function(){m(e.status)}),[e.status]);return l.a.createElement("div",{className:F()(D.a.status,Object(C.a)({},D.a.status_active,e.isOwner))},i?l.a.createElement("div",null,l.a.createElement("input",{type:"text",onChange:function(e){m(e.target.value)},autoFocus:!0,defaultValue:u,onBlur:function(){o(!1),e.updateStatus(u)}})):l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){e.isOwner&&o(!0)}},u||"Dubl click to change your status!!!")))},M=a(7),Y=a(193),J=a(349),T=a(308),B=a(312),V=a(314),q=a(96),Z=a(22),H=a(196),X={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:14}}},R=function(e){var t=e.profile,a=e.editMode,n=e.setEditMode,i=Object(Z.c)(),s=Object(Z.d)((function(e){return e.profilePage.error}));s&&console.log(s);return l.a.createElement(J.a,{title:"Profile Details",width:"70%",onClose:function(){return n(!1)},visible:a,bodyStyle:{paddingBottom:"2rem"}},l.a.createElement(T.a,Object.assign({},X,{onFinish:function(e){i(Object(o.i)(e)).then((function(){n(!1)})).catch((function(e){Object.values(e).map((function(e){return Y.a.open({duration:10,description:"Please check out fields and try again!",message:e,icon:l.a.createElement(H.a,{style:{color:"red"}})})}))}))}}),l.a.createElement(T.a.Item,{initialValue:t.fullName,name:"fullName",label:"Your full name:",rules:[{required:!0,message:"Please enter your full name."}]},l.a.createElement(B.a,{placeholder:"Don't forget to write your full name."})),l.a.createElement(T.a.Item,{initialValue:t.aboutMe,name:"aboutMe",label:"Describe Yourself",rules:[{required:!0,message:"Please describe Yourself."}]},l.a.createElement(B.a.TextArea,{rows:2,placeholder:"How would you describe yourself?"})),l.a.createElement(T.a.Item,{initialValue:t.lookingForAJobDescription,name:"lookingForAJobDescription",label:"Your skills",rules:[{required:!0,message:"Please indicate your skills."}]},l.a.createElement(B.a.TextArea,{rows:2,placeholder:"Please indicate your skills."})),l.a.createElement(T.a.Item,{name:"lookingForAJob",label:"Looking for a job",valuePropName:"checked",initialValue:t.lookingForAJob},l.a.createElement(V.a,null)),Object.entries(t.contacts).map((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];return l.a.createElement(T.a.Item,{name:["contacts","".concat(a)],label:a,initialValue:n,key:a},l.a.createElement(B.a,{placeholder:"Please indicate url to your network"}))})),l.a.createElement(T.a.Item,{wrapperCol:Object(M.a)(Object(M.a)({},X.labelCol),{},{offset:8})},l.a.createElement(q.a,{type:"primary",style:{marginRight:"1rem"},htmlType:"submit"},"Save"),l.a.createElement(q.a,{onClick:function(){return n(!1)},type:"primary"},"Cancel"))))},z=a(85),U=a(51),G=a(54),K=a(197),Q=function(e){var t=e.profile,a=t.fullName,n=t.aboutMe,i=t.lookingForAJob,o=t.lookingForAJobDescription,c=t.contacts,u={github:f.a,facebook:p.a,vk:b.a,mainLink:g.a,youtube:P.a,instagram:v.a,twitter:O.a,website:S.a};return l.a.createElement(U.a,{xs:24,className:s.profile_data},l.a.createElement("h2",null,a),n&&l.a.createElement("p",null,l.a.createElement("b",null,"About me:")," ",n),l.a.createElement("p",null,l.a.createElement("b",null,"Looking for a job:")," ",i?"Yes!":"No !"),i&&l.a.createElement("p",null,l.a.createElement("b",null,"My skills:")," ",o),Object.entries(c).map((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];return n?l.a.createElement("a",{href:n,key:a},l.a.createElement("img",{src:u[a],alt:"social-icon"})):null})))},W=function(e){var t,a=e.profile,i=e.savePhoto,o=e.isOwner,c=e.status,m=e.updateStatus,f=Object(n.useState)(!1),d=Object(r.a)(f,2),p=d[0],_=d[1];if(!a)return l.a.createElement(I.a,null);return l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,{className:s.profile_card},l.a.createElement(U.a,{style:{position:"absolute",top:"18px",right:"20px"}},o&&l.a.createElement(q.a,{type:"primary",shape:"round",icon:l.a.createElement(K.a,null),onClick:function(){_(!0)}},"Edit profile!")),l.a.createElement(U.a,null,l.a.createElement("img",{src:null!==(t=a.photos.large)&&void 0!==t?t:u.a,alt:"avatar"}),o&&l.a.createElement(G.a,{title:"Upload your photo!"},l.a.createElement("label",null,l.a.createElement("img",{src:x.a,alt:"update-logo"}),l.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})))),l.a.createElement(U.a,null,l.a.createElement(N,{status:c,updateStatus:m,isOwner:o}))),l.a.createElement(z.a,null,l.a.createElement(R,{initialValues:a,editMode:p,setEditMode:_,profile:a}),l.a.createElement(Q,{profile:a,isOwner:o})))},$=a(58),ee=function(){Y.a.open({duration:10,message:"You are not authorized to perform this action.",description:"For test use email: free@samuraijs.com. Password: free",icon:l.a.createElement(H.a,{style:{color:"red"}})})},te=a(346),ae=a(350),ne=a(344),le=a.n(ne),ie=a(352),oe=a(353),re=a(354),se=a(355),ce=a(356),ue=function(e){var t,a,i=e.massage,o=e.likesCount,s=e.dislikesCount,c=e.deletePost,m=e.addLike,f=e.id,d=e.addDislike,p=e.profile,_=e.isAuth,b=Object(n.useState)(null),E=Object(r.a)(b,2),g=E[0],h=E[1],P=[l.a.createElement(G.a,{key:"comment-basic-like",title:"Like"},l.a.createElement("span",{onClick:function(){m(f),h("liked")}},"liked"===g?l.a.createElement(ie.a,null):l.a.createElement(oe.a,null),l.a.createElement("span",{className:"comment-action"},o))),l.a.createElement(G.a,{key:"comment-basic-dislike",title:"Dislike"},l.a.createElement("span",{onClick:function(){d(f),h("disliked")}},"disliked"===g?l.a.createElement(re.a,null):l.a.createElement(se.a,null),l.a.createElement("span",{className:"comment-action"},s))),l.a.createElement("span",{key:"comment-basic-reply-to"},"Reply to"),l.a.createElement("span",{key:"comment-basic-reply-to",onClick:function(){_?c(f):ee()}},"Delete",l.a.createElement(ce.a,null))];return l.a.createElement(te.a,{actions:P,author:null===p||void 0===p?void 0:p.fullName,avatar:l.a.createElement(ae.a,{src:null!==(t=null===p||void 0===p||null===(a=p.photos)||void 0===a?void 0:a.small)&&void 0!==t?t:u.a,alt:"photos.small"}),content:l.a.createElement("p",null,i),datetime:l.a.createElement(G.a,{title:le()().format("YYYY-MM-DD HH:mm:ss")},l.a.createElement("span",null,le()().fromNow()))})},me=a(330),fe=a(309),de=a(351),pe=function(e){var t,a,n=e.isAuth,i=e.addPost,o=fe.a.Text,r=Object(me.a)(),s=r.register,c=r.handleSubmit,u=r.errors,m=r.reset;return l.a.createElement(z.a,null,l.a.createElement(U.a,{xs:24},l.a.createElement("form",{onSubmit:c((function(e){var t=e.newPost;n?(i(t),m()):ee()})),className:"send-message-form",autoComplete:"off"},"maxLength"===(null===(t=u.newPost)||void 0===t?void 0:t.type)&&l.a.createElement(o,{type:"danger"},"The character limit for a single message is 100 characters"),l.a.createElement("textarea",{rows:"2",name:"newPost",ref:s({required:!0,maxLength:100})}),l.a.createElement(q.a,{disabled:"maxLength"===(null===(a=u.newPost)||void 0===a?void 0:a.type),htmlType:"submit",type:"dashed",shape:"round",size:"large",icon:l.a.createElement(de.a,null)},"Post"))))},_e=function(e){var t=e.posts,a=e.addLike,n=e.addPost,i=e.deletePost,o=e.addDislike,r=e.profile,s=e.isAuth,c=Object($.a)(t).reverse().map((function(e){return l.a.createElement(ue,{isAuth:s,massage:e.message,likesCount:e.likesCount,dislikesCount:e.dislikesCount,key:e.id,id:e.id,profile:r,addDislike:o,addLike:a,deletePost:i})}));return l.a.createElement(z.a,null,l.a.createElement("h2",null,"My posts"),l.a.createElement(U.a,{xs:24},c),l.a.createElement(U.a,{xs:24},l.a.createElement(pe,{addPost:n,isAuth:s})))},be=function(e){var t=e.profile,a=e.status,n=e.updateStatus,i=e.isOwner,o=e.savePhoto,r=e.deletePost,s=e.addLike,c=e.addPost,u=e.posts,m=e.addDislike,f=e.isAuth;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Profile"),l.a.createElement(W,{isAuth:f,profile:t,status:a,updateStatus:n,isOwner:i,savePhoto:o}),l.a.createElement(_e,{isAuth:f,profile:t,deletePost:r,addLike:s,addPost:c,posts:u,addDislike:m}))};t.default=Object(i.h)((function(e){var t,a,i=Object(Z.c)(),r=Object(Z.d)((function(e){return e.profilePage.profile})),s=Object(Z.d)((function(e){return e.profilePage.status})),c=Object(Z.d)((function(e){return e.auth.id})),u=Object(Z.d)((function(e){return e.profilePage.posts})),m=Object(Z.d)((function(e){return e.auth.isAuth})),f=null!==(t=null!==(a=e.match.params.userId)&&void 0!==a?a:c)&&void 0!==t?t:e.history.push("/login");return Object(n.useEffect)((function(){i(Object(o.g)(f)),i(Object(o.f)(f))}),[i,f]),l.a.createElement(l.a.Fragment,null,l.a.createElement(be,{isAuth:m,addDislike:function(e){i(Object(o.a)(e))},addPost:function(e){i(Object(o.c)(e))},addLike:function(e){i(Object(o.b)(e))},deletePost:function(e){i(Object(o.e)(e))},profile:r,status:s,posts:u,updateStatus:function(e){i(Object(o.j)(e))},isOwner:!e.match.params.userId,savePhoto:function(e){i(Object(o.h)(e))}}))}))}}]);
//# sourceMappingURL=4.506c4591.chunk.js.map