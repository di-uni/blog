import Link from 'next/link';
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
                <Link key={title} href={`/posts/${title}`}>
                    <a className={styles.card}>
                        <h2>{title} &rarr;</h2>
                        <p>Descriptions..... </p>
                    </a>
                </Link>
            )})
        : null}
      </div>
    )
}

export default PostList