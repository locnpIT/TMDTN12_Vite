import React from 'react';
import styles from './Banner.module.css'; // Giả sử bạn có một file CSS module riêng cho Banner

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>Khám Phá Thế Giới Thời Trang</h1>
        <p className={styles.description}>Cập nhật xu hướng mới nhất, sản phẩm độc đáo và mẹo phối đồ thông minh</p>
        <button className={styles.ctaButton}>Khám Phá Ngay</button>
      </div>
    </section>
  );
};

export default Banner;
