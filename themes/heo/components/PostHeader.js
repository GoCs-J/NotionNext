import { HashTag } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import WordCount from '@/components/WordCount'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'
import WavesArea from './WavesArea'

/**
 * 文章页头
 * @param {*} param0
 * @returns
 */
export default function PostHeader({ post, siteInfo, isDarkMode }) {
  if (!post) {
    return <></>
  }
  // 文章头图
  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover
  const ANALYTICS_BUSUANZI_ENABLE = siteConfig('ANALYTICS_BUSUANZI_ENABLE')
  return (
    <section className='w-full mx-auto mb-4'>
      <h2 className='text-5xl font-semibold py-10 dark:text-white text-center'>{post?.title}</h2>

      <div className='flex gap-3 font-semibold text-sm items-center justify-center'>
        <Link
          href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
          passHref
          className='pl-1 mr-2 cursor-pointer'>
          {post?.publishDay}
        </Link>

        {post?.type !== 'Page' && (
          <>
            <Link href={`/category/${post?.category}`} passHref className='cursor-pointer text-md mr-2 text-green-500'>
              {post?.category}
            </Link>
          </>
        )}

        <div className='flex py-1 space-x-3'>
          {post?.tags?.length > 0 && (
            <>
              {locale.COMMON.TAGS} <span>:</span>
            </>
          )}
          {post?.tags?.map(tag => {
            return (
              <Link href={`/tag/${tag}`} key={tag} className='text-yellow-500 mr-2'>
                {tag}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
          )
}
