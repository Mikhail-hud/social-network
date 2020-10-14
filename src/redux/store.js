// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";


// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hello", likesCount: 12 },
//         { id: 2, message: "How was your day7", likesCount: 14 },
//         { id: 3, message: "Not bad", likesCount: 2 },
//         { id: 4, message: "Thanks", likesCount: 5 },
//         { id: 5, message: "have a good day", likesCount: 12 },
//       ],
//       newPostText: "Type here!",
//     },
//     dialogsPage: {
    
//       dialogs: [
//         { id: 1, name: "Dimich" }, 
//         { id: 2, name: "Tany" },
//         { id: 3, name: "Oleg" },
//         { id: 4, name: "Kirilh" },
//         { id: 5, name: "Pahsa" },
//         { id: 5, name: "Pahsa" },
//         { id: 5, name: "Pahsa" },
//       ],
//       messages: [
//         { id: 1, message: "Hello" },
//         { id: 2, message: "How was your day7" },
//         { id: 3, message: "Not bad" },
//         { id: 4, message: "Thanks" },
//         { id: 5, message: "have a good day" },
//       ],
//       newMessageBody: 'Type here!',
//     },
//     sidebar: {},
//   },
//   _callSubscriber() {},
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
//     this._callSubscriber(this._state);
//   }
// };


// export default store;
// window.store = store;
