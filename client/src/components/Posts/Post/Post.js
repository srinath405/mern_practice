import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({post, setSelectedId}) =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "#fff"}} size="small" onClick={() => setSelectedId(post._id)}>
                    <MoreHorizIcon fontSize="medium"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body1" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <CardContent>
                <Typography variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color="primary" size="small" onClick={() => {dispatch(likePost(post._id))}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button color="primary" size="small" onClick={() => {dispatch(deletePost(post._id))}}>
                    <DeleteIcon fontSize="small"/>
                    Delete                    
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;