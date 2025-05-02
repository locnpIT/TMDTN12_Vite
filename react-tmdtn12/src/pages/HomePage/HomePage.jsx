import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import LatestPosts from '../../components/LatestProduct/LatestPosts'
import Footer from '../../components/Footer/Footer'
import PostList from '../../components/PostList/PostList'

export const HomePage = () => {
  return (
    <>
        <Header></Header>
        {/* <AboutWebsite></AboutWebsite> */}
        <Banner></Banner>
        <LatestPosts></LatestPosts>
        <PostList title="Khám phá phong cách, phối đồ chuẩn gu"></PostList>
        <Footer></Footer>
    
    </>
  )
}
