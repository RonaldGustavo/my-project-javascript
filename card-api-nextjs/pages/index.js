import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from 'axios'

// const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  // get data from external API
  const req = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const res = await req.data;

  return {
    props: {
      posts: res,
    },
  };
}
function Home(props) {
  const { posts } = props;
  // console.log(posts);

  return (
    <>

      <div className='container-fluid'>
        <h1>Card API</h1>
        <h6>by Ronald Gustavo</h6>
        <p className='sub_title'>Use Boostrap and Next.js</p>

        <div className='row m-auto container-box'>
          {posts.map((post) => (
            <div className="card text-bg-primary col-5 " key={post.id} >
              <div className="card-header m-auto"><b>Title: </b> {post.title}</div>
              <div className="card-body">
                <h5 className="card-title"><b>Id:</b> {post.id}</h5>
                <p className="card-text">
                  <b>Description: </b> {post.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
