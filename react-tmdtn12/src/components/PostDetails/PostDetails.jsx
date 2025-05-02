// src/components/PostDetails/PostDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PostDetails.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PostDetails = () => {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);


  useEffect(() => {
    const posts = [
        {
          id: 1,
          title: 'Top 5 xu hướng thời trang mùa hè 2025',
          excerpt: 'Khám phá các phong cách đang thống trị mùa hè này...',
          image: '/images/post1.jpg',
          content: `
            <p>Mùa hè năm 2025 đang đến gần và xu hướng thời trang năm nay mang nhiều sự đột phá với các chất liệu mỏng nhẹ, màu sắc pastel và họa tiết tự nhiên. Các nhà thiết kế nổi tiếng như Dior, Gucci, và Chanel đều cho ra mắt những bộ sưu tập mang hơi thở nhẹ nhàng nhưng đầy cá tính.</p>
            
            <p><strong>1. Chất liệu linen và cotton hữu cơ:</strong> Với thời tiết nóng nực, chất liệu tự nhiên như linen và cotton không chỉ giúp người mặc cảm thấy dễ chịu mà còn thân thiện với môi trường. Các nhà mốt lớn đã tích hợp các loại vải này vào nhiều thiết kế từ váy maxi đến áo sơ mi oversized.</p>
            
            <p><strong>2. Màu pastel và tông đất:</strong> Những gam màu như hồng phấn, xanh mint, vàng nhạt hoặc be đang chiếm lĩnh thị trường thời trang. Những màu sắc này phù hợp với mọi loại da và mang lại vẻ ngoài tươi sáng, nhẹ nhàng.</p>
            
            <p><strong>3. Phối đồ nhiều lớp (layering):</strong> Mặc dù mùa hè nóng, nhưng xu hướng layering mỏng nhẹ vẫn được ưa chuộng. Bạn có thể phối một chiếc áo hai dây với sơ mi mỏng bên ngoài hoặc kết hợp crop top với áo lưới xuyên thấu.</p>
      
            <p><strong>4. Phụ kiện bản lớn:</strong> Kính mát to bản, túi tote màu sắc, hoa tai dài... là những món đồ không thể thiếu để tạo điểm nhấn trong hè này.</p>
            
            <p><strong>5. Giày sandals đế bệt và sneaker trắng:</strong> Ưu tiên sự thoải mái nhưng vẫn giữ phong cách, các loại giày đế bệt đang quay trở lại mạnh mẽ cùng với sneaker trắng cơ bản.</p>
            
            <img src="/images/post1-detail.jpg" alt="Top fashion trends" />
            
            <p>Đừng quên theo dõi các fashion blogger nổi bật trong nước và quốc tế để cập nhật nhanh chóng những xu hướng mới nhất. Bạn cũng có thể thử mix & match lại các món đồ có sẵn trong tủ quần áo để tạo ra phong cách riêng cho mình.</p>
          `
        },
        {
          id: 2,
          title: 'Phối đồ đi làm: thanh lịch & cá tính',
          excerpt: 'Mẹo chọn đồ phù hợp môi trường công sở nhưng vẫn nổi bật...',
          image: '/images/post2.jpg',
          content: `
            <p>Phong cách công sở thường gắn liền với sự chỉnh chu, nghiêm túc. Tuy nhiên, điều đó không có nghĩa là bạn không thể thể hiện cá tính riêng qua cách phối đồ. Hè 2025, xu hướng công sở đề cao sự kết hợp giữa thanh lịch và sáng tạo.</p>
      
            <p><strong>1. Áo sơ mi cách điệu:</strong> Thay vì sơ mi trắng trơn truyền thống, hãy thử những mẫu sơ mi có cổ bèo, tay phồng hoặc họa tiết chấm bi nhỏ để tạo sự khác biệt nhưng vẫn lịch sự.</p>
            
            <p><strong>2. Chân váy midi và quần ống rộng:</strong> Đây là hai item vừa dễ phối đồ, vừa đem lại sự thoải mái. Bạn có thể kết hợp với giày mule hoặc sneaker trắng để tạo cảm giác hiện đại, năng động.</p>
            
            <p><strong>3. Tông màu trung tính kết hợp sắc màu nổi:</strong> Một chiếc áo blazer màu beige phối cùng áo thun màu xanh cobalt hoặc vàng mustard sẽ giúp bạn nổi bật mà vẫn giữ nét chuyên nghiệp.</p>
            
            <p><strong>4. Tối giản nhưng tinh tế:</strong> Đôi khi chỉ cần một chiếc đồng hồ đơn giản, túi da nhỏ và tóc búi cao là bạn đã có một vẻ ngoài hoàn hảo cho buổi họp sáng thứ Hai.</p>
      
            <p>Hãy lựa chọn những trang phục vừa thể hiện cá tính, vừa phù hợp với văn hóa công ty. Thời trang công sở ngày nay đã mở rộng giới hạn để bạn tự do thể hiện mình nhiều hơn.</p>
          `
        }
      ];
      

    const foundPost = posts.find(post => post.id === parseInt(postId));

    console.log(postId)
    if (foundPost) {
      setPost(foundPost);
    }
  }, [postId]);  

  if (!post) {
    
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header></Header>
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.image} alt={post.title} className={styles.coverImage} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    <Footer></Footer>
    </>
  );
};

export default PostDetails;
