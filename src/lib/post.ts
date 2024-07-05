import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'contents/posts')

interface PostData {
    id: string
    date: string
    title: string
    description: string
    category: string
    contentHtml?: string
}

export function getSortedPostData(): PostData[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: PostData[] = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        } as PostData
    })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(gfm)
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    } as PostData
}

export function getAllPostIds(): string[] {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return fileName.replace(/\.md$/, '')
    })
}