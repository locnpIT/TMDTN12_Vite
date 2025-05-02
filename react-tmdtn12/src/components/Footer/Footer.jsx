import React from 'react';
import styles from './Footer.module.css';

import logo from "../../assets/FashionFeedLogo.png"

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={`${styles.container} ${styles.footerContent}`}>


        <div className={`${styles.footerColumn} ${styles.logoColumn}`}>
          <img src={logo} alt="Logo" className={styles.footerLogo} />
        </div>

 
        <div className={`${styles.footerColumn} ${styles.aboutColumn}`}>
          <h4 className={styles.footerHeading}>Về Chúng Tôi</h4>
          <p>Trang giới thiệu và cập nhật các xu hướng thời trang, outfit mới nhất giúp bạn định hình phong cách cá nhân.</p>
        </div>

        <div className={`${styles.footerColumn} ${styles.linksColumn}`}>
          <h4 className={styles.footerHeading}>Liên kết nhanh</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/blog">Blog/Bài viết</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </div>

        {/* Policies and Social */}
        <div className={`${styles.footerColumn} ${styles.policySocialColumn}`}>
          <h4 className={styles.footerHeading}>Thông tin khác</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/privacy-policy">Chính sách bảo mật</a></li>
            <li><a href="/terms">Điều khoản sử dụng</a></li>
            <li><a href="/affiliate-disclosure">Tiết lộ liên kết</a></li>
          </ul>
          <div className={styles.socialLinks}>
            <h5 className={styles.socialHeading}>Kết nối với chúng tôi</h5>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>FB</a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>IG</a>
            <a href="#" aria-label="Pinterest" className={styles.socialIcon}>PI</a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>TW</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; <span id="current-year">{new Date().getFullYear()}</span> Tên Website Của Bạn. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
