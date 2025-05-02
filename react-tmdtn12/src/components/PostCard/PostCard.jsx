// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <Link to={post.link} className={styles.postCard}>
      <img src={post.image} alt={post.title} className={styles.thumbnail} />
      <div className={styles.postContent}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postExcerpt}>{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCard;
