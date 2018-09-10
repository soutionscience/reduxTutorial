import React, { Component } from 'react'
import {connect} from 'react-redux';
//import books  from '../reducer/reducer_books';
import selectBook from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=>{
            return(
                <li
                key={book.title} 
                onClick ={ ()=> this.props.selectBook(book)}
                className='list-group-item'>
                {book.title}
                </li>
            )
        })
    }
  render() {
    return (
      
        <ul className ="list-group col-sm-4">
        {this.renderList()}
        </ul>
      
    )
  }
}

  function mapStateToProps(state){
      // whater is returned becomes props inside booklist
  return{
      books: state.books

  }
  
}

function mapDispatchToProps(dispatch){
    //whenever select book is called result should be passed to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
