import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({selectedId, setSelectedId}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({creator:"",title:"",message:"",tags:"",selectedFile:""});

    const posts = useSelector((state) => state.posts);

    useEffect(() =>{
        if(selectedId)
            setPostData(posts.filter(val => val._id === selectedId)[0]);
    },[selectedId])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(selectedId && selectedId !== ""){
            dispatch(updatePost(selectedId, postData));
        }else{
            dispatch(createPost(postData));
        }   
        clear();     
    }

    const clear = () =>{
        setPostData({creator:"",title:"",message:"",tags:"",selectedFile:""});
        setSelectedId(null);
    }

    console.log(postData)
    
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{selectedId ? `Edit a Memory` : `Creating Memories`}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) =>setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) =>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) =>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) =>setPostData({...postData,tags:e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;