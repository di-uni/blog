import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), '/__posts')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const post = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(fileContents)
    // const matterResult = matter(fileContents)
    console.log(post.value)
    return {
        id,
        ...post
    }
}