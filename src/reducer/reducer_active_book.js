  export default function(state = null, action){
      //state argument is not app state, only state reducer
      //is fuckin wit
      switch(action.type){
          case 'BOOK_SELECTED':
          return action.payload;
      }
      return state;

  }