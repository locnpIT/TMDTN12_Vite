// src/components/PostList.jsx
import React, { useState } from 'react';
import styles from './PostList.module.css';
import PostCard from '../PostCard/PostCard'; // Import PostCard component
import Pagination from '../Pagination/Pagination'; // Import Pagination component

const PostList = ({ title }) => {
  // Danh sách các bài viết
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
    // Bạn có thể thêm nhiều bài viết hơn ở đây
  ];

  // Trạng thái phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Cắt bài viết theo trang
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Hàm thay đổi trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.list}>
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        totalItems={posts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default PostList;
