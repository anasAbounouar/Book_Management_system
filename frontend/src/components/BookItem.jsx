// frontend/src/components/Bookitem

import axios from "axios"


const BookItem = ({ fetchBooks, book }) => {
    return (
        <div>
            <div>Title</div>
            <div>{ book.title}</div>
        </div>
    )
    
}