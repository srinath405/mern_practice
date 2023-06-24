import React from "react";
import { useSelector } from "react-redux"
import { Grid, CircularProgress } from "@material-ui/core"; 

import Post from "./Post/Post"
import useStyles from "./styles";

const Posts = ({setSelectedId}) =>{
    const classes = useStyles();

    const posts = useSelector((state) => state.posts);
    return(<>
        {!posts.length ? <CircularProgress/> : (
            <Grid container className={classes.container} alignItems="stretch" spacing={3}>
                {posts.map((post,i) => <Grid key={post._id} item xs={12} sm={6}><Post setSelectedId={(id) => setSelectedId(id)} post={post}/></Grid>)}
            </Grid>
        )}
        </>
    );
}

export default Posts;