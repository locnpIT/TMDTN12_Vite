import React from 'react';
import styles from './LatestPosts.module.css';
import PostCard from '../PostCard/PostCard';


const posts = [
  {
    id: 1,
    title: 'Top 5 xu hướng thời trang mùa hè 2025',
    excerpt: 'Khám phá các phong cách đang thống trị mùa hè này...',
    image: '/images/post1.jpg',
    link: '/bai-viet/xu-huong-2025',
  },
  {
    id: 2,
    title: 'Phối đồ đi làm: thanh lịch & cá tính',
    excerpt: 'Mẹo chọn đồ phù hợp môi trường công sở nhưng vẫn nổi bật...',
    image: '/images/post2.jpg',
    link: '/bai-viet/phoi-do-cong-so',
  },
  {
    id: 3,
    title: 'Mix đồ với tone trung tính',
    excerpt: 'Tone trung tính luôn mang lại vẻ tinh tế – học cách mix ngay!',
    image: '/images/post3.jpg',
    link: '/bai-viet/tone-trung-tinh',
  },
];

const LatestPosts = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Bài viết mới nhất</h2>
      <div className={styles.postsGrid}>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
