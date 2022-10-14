import { useRouter } from 'next/router';

const PostPage = () => {
    const router = useRouter();
    const data = router.query;
    const id = data.id;

    const value = data && typeof id === "string" ? data[id] as string: "데이터를 불러올 수 없습니다.";
    const markup = { __html: value };
    return <div dangerouslySetInnerHTML={markup} />
}

export default PostPage