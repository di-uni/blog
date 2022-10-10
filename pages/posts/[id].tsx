import { getAllPostIds, getPostData }  from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds();
    // console.log(paths);
    return { paths, fallback: false };

    // 참고: api 콜을 사용할 땐
    // const res = await fetch('http://.../posts')
    // const posts = await res.json()
    
    // const paths = posts.map((post) => ({
    //   params: { id: post.id },
    // }))
    
    // return { paths, fallback: false }
  
}

export async function getStaticProps({ params }: any) {
    const postData = await getPostData(params.id);
    // console.log(postData);
    // const post = JSON.parse(postData.value);
    return {
      props: {
        postData,
      }
    }
  }

const Post = ({ postData }:any) => {
    // console.log(postData);
    const markup = {__html: postData.value}
    return <div dangerouslySetInnerHTML={markup} />
}

export default Post