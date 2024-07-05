import Link from 'next/link'
import { getSortedPostData } from '@/lib/post'
import Header from '../common/header'
import Blog_Profile from './blog_profile'
import styles from "@/styles/fade.module.css"

interface PostData {
    id: string
    date: string
    title: string
    description: string
}

export default async function Home() {
    const allPostsData: PostData[] = await getSortedPostData()
    return (
        <div className='bg-slate-50'>
            <Header></Header>
            <div className={styles.fade}>
                <div className="pt-32 mx-auto px-6">
                    <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">Blog</h1>
                    <p className="mb-10 md:mb-12 lg:mb-12 text-center text-lg text-slate-900">記事一覧</p>
                    <div className='max-w-6xl mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            <div className='lg:col-span-2 mb-20'>
                                <ul>
                                    {allPostsData.map(({ id, date, title, description }) => (
                                        <li key={id} className="items-center py-8 px-3 md:mx-3 ld:mx-3 my-5 bg-white border-2 border-slate-300 rounded-lg">
                                            <Link href={`blog/posts/${id}`}>
                                            <div className='flex items-center md:hidden lg:hidden'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="#0284C7" d="M21.093 6.75c2.9 5.022 1.179 11.444-3.843 14.344c-4.183 2.414-9.332 1.624-12.613-1.604a1.5 1.5 0 0 1 2.104-2.139a7.5 7.5 0 1 0-2.031-7.117l.518-.134c1.522-.398 2.644 1.41 1.61 2.598l-2.25 2.587c-.826.949-2.423.626-2.754-.646A10.503 10.503 0 0 1 6.75 2.907c5.023-2.9 11.445-1.179 14.344 3.843ZM12 5.5a1.5 1.5 0 0 1 1.493 1.356L13.5 7v4.379l2.06 2.06a1.5 1.5 0 0 1-2.007 2.225l-.114-.103l-2.5-2.5a1.5 1.5 0 0 1-.432-.913L10.5 12V7A1.5 1.5 0 0 1 12 5.5" /></g></svg><p className="text-sky-600 ml-2">{date}</p>
                                                    </div>
                                                <div className='flex justify-between'>
                                                    <p className="text-slate-900 text-xl md:text-3xl lg:text-3xl">{title}</p>
                                                    <div className='hidden md:flex md:items-center lg:flex lg:items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="#0284C7" d="M21.093 6.75c2.9 5.022 1.179 11.444-3.843 14.344c-4.183 2.414-9.332 1.624-12.613-1.604a1.5 1.5 0 0 1 2.104-2.139a7.5 7.5 0 1 0-2.031-7.117l.518-.134c1.522-.398 2.644 1.41 1.61 2.598l-2.25 2.587c-.826.949-2.423.626-2.754-.646A10.503 10.503 0 0 1 6.75 2.907c5.023-2.9 11.445-1.179 14.344 3.843ZM12 5.5a1.5 1.5 0 0 1 1.493 1.356L13.5 7v4.379l2.06 2.06a1.5 1.5 0 0 1-2.007 2.225l-.114-.103l-2.5-2.5a1.5 1.5 0 0 1-.432-.913L10.5 12V7A1.5 1.5 0 0 1 12 5.5" /></g></svg><p className="text-sky-600 ml-2">{date}</p>
                                                    </div>
                                                </div>
                                                <p className='text-slate-500 mt-4'>{description}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='hidden md:hidden lg:block'>
                                <Blog_Profile></Blog_Profile>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}