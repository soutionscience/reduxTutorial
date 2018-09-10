export default function(book){
    //select book is an action creator it needs
    //to create an action: object with type propety
   return{
       type: 'BOOK_SELECTED',
       payload: book
   }
}