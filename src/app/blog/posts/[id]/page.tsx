import { getPostData, getAllPostIds } from '@/lib/post'
import Header from '@/components/common/header';
import Blog_Profile from '@/components/blog/blog_profile';
import Footer from "@/components/common/footer";
import styles from "@/styles/styles.module.css"
import styles_2 from "@/styles/fade.module.css"
import styles_3 from "../../../../styles/styles_blog.module.scss"

interface PostParams {
    params: {
        id: string
    }
}

export default async function Post({ params }: PostParams) {
    const postData = await getPostData(params.id)
    const postUrl = `https://zawataku.com/blog/posts/${params.id}`;

    return (
        <div className={styles.body}>
            <div className="bg-slate-50">
                <Header></Header>
                <div className={styles_2.fade}>
                    <div className="mx-auto py-6 pt-32 md:px-6 lg:px-6">
                        <h1 className="pb-3 text-center text-2xl font-semibold text-slate-900 md:text-3xl lg:text-4xl">{postData.title}</h1>
                        <p className="mb-5 text-center text-base text-slate-900 md:mb-12 md:text-lg lg:mb-12 lg:text-lg">{postData.date}</p>
                        <div className='mx-auto max-w-6xl'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10'>
                                <div className='col-span-2 mb-8 lg:mb-20'>
                                    <div className="mx-1 my-5 rounded-lg border-2 border-slate-300 bg-white px-3 py-4 md:mx-3 md:px-6 lg:mx-3 lg:px-6">
                                        <div className='mb-4'>
                                            <div className='mb-2 flex max-w-fit items-center rounded-full border-2 border-slate-300 bg-slate-100 px-3 py-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 9c0-.55-.45-1-1-1h-3V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V5c0-.55-.45-1-1-1s-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v4H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v-4h3c.55 0 1-.45 1-1m-6 5h-4v-4h4z" /></svg>{postData.category}
                                            </div>
                                        </div>
                                        <div className={styles_3.container} dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? '' }}></div>                                        <div className='mt-4 border-t-2 border-slate-300 pt-4'>
                                            <div className='mx-5 flex items-center justify-between md:mx-40 lg:mx-40'>
                                                <div className="tooltip tooltip-bottom size-12" data-tip="Xで共有">
                                                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postData.title)}`} target="_blank" rel="noopener noreferrer">
                                                        <button className=" rounded-full bg-black p-2">
                                                            <img src="/img/blog/X_logo_white.svg" alt="Xのロゴ" className="mx-auto size-8 p-1" />
                                                        </button>
                                                    </a>
                                                </div>
                                                <div className="tooltip tooltip-bottom size-12" data-tip="Facebookで共有">
                                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">
                                                        <img src="/img/blog/Facebook_icon.svg" alt="Facebookのロゴ" className="mx-auto size-12" />
                                                    </a>
                                                </div>
                                                <div className="tooltip tooltip-bottom size-12" data-tip="Misskeyで共有">
                                                    <a href={`https://misskeyshare.link/share.html?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postData.title)}`} target="_blank" rel="noopener noreferrer">
                                                        <button className=" rounded-full bg-[#86B300] p-2">
                                                            <img src="/img/blog/Mi_icon.svg" alt="Misskeyのロゴ" className='mx-auto size-8' />
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:hidden lg:block'>
                                    <Blog_Profile></Blog_Profile>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const paths = getAllPostIds()
    return paths.map(id => ({ id }))
}