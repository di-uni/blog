import { getPostList }  from '../../lib/posts'
import styles from '../../styles/Home.module.css'

export async function getStaticProps() {
    const postList = await getPostList();
    console.log("heyyy", postList)
    // const post = JSON.parse(postData.value)
    return {
      props: {
        postList,
      }
    }
  }

const PostList = ({ postList }: any) => {
    console.log(postList);
    return (
      <div className={styles.grid}>
        {postList ? postList.map((title: any) => {
            return (
                // <a key={title} href={`http://localhost:3000/posts/${title}`} className={styles.card}>
                <a key={title} href={`https://di-uni-blog.vercel.app/posts/${title}`} className={styles.card}>
                    <h2>{title} &rarr;</h2>
                    <p>Descriptions..... </p>
                </a>
            )})
        : null}
      </div>
    )
}

export default PostList