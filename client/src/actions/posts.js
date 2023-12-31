import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({type:'FETCH_ALL', payload:data})
    }
    catch (error){
        console.log(error.message);
    }
}

export const createPost = (postData) => async (dispatch) => {
    try {
        const { data } = await api.createPost(postData);

        dispatch({type:'CREATE', payload:data})
    }
    catch (error){
        console.log(error.message);
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);

        dispatch({type:'UPDATE', payload:data})
    }
    catch (error){
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type:'DELETE', payload:id})
    }
    catch (error){
        console.log(error.message);
    }
}

export const editId = (id) => async (dispatch) => {
    try {
        dispatch({type:'EDIT_ID', payload:id})
    }
    catch (error){
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type:'LIKE', payload:data})
    }
    catch (error){
        console.log(error.message);
    }
}