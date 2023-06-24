const updateEditId = (data, id) => {
    data.forEach(val =>{
        if(val._id === id)
            val.isEdit = true;
        else
            val.isEdit = false;
    })
}

export default (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
            
        case 'CREATE':
            return [...posts, action.payload];

        case 'EDIT_ID':
            return updateEditId(...posts);
            
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case 'DELETE':
            return posts.filter(post => post._id !== action.payload);

        case 'LIKE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        default:
            return posts;
    }
};