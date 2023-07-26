import React from "react";
import classes from './BlogCard.module.css';

    const BlogCard = (props) => {

        return(
          <div className={classes.blogCard}>
            <h2 className= {classes.h2file} >{props.title}</h2>
            <p className={classes.pfile} >{props.values}</p>
          </div>
        )
      }
export default BlogCard;



