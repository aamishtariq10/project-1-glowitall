import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = (props) => {
    const {id, title, description, date, image} = props;
  return (
        <div className="Blog-card">
            <div className="card-image">
                <img src= {image ? image : "https://img.freepik.com/free-photo/make-up-blogger-cute-lovely-beautiful-young-lady-recording-blog-camera-wiping-face_140725-167412.jpg?w=740&t=st=1680210354~exp=1680210954~hmac=72f336165ae70cbca69da20286226cefbc7bbf581ee24207aa9bc67b07233f00"}
                     className='image-fluid w-100'
                     alt="blog" 
                />
            </div>
            <div className="blog-content">
                <p className="date">{date}</p>
                <h5 className="title">{title}</h5>
                <p className="desc" dangerouslySetInnerHTML={{ __html: description?.substr(0, 70) + "..." }}></p>
                <Link to={"/blog/" + id} className="button">
                    Read More
                </Link>
            </div>
        </div>
  );
};

export default BlogCard;