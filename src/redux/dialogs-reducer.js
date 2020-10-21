const SEND_MESAAGE = "SEND-MESSAGE";

let initialstate = {
  dialogs: [
    { id: 1, name: "Dimich" },
    { id: 2, name: "Tany" },
    { id: 3, name: "Oleg" },
    { id: 4, name: "Kirilh" },
    { id: 5, name: "Pahsa" },
    { id: 6, name: "Pahsa" },
    { id: 7, name: "Pahsa" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How was your day7" },
    { id: 3, message: "Not bad" },
    { id: 4, message: "Thanks" },
    { id: 5, message: "have a good day" },
  ]
};

const dialogsReducer = (state = initialstate, action) => {
  
  switch (action.type) {
      
    case SEND_MESAAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 8, message: body }],
      }
    default:
      return state;
  }
};


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESAAGE, newMessageBody });

export default dialogsReducer;
