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
  <div className='w-full bg-white dark:bg-[#1f1f1f] py-12 px-6 md:px-12 border-b border-gray-200 dark:border-gray-700'>
    <div className='max-w-4xl mx-auto flex flex-col gap-6'>

      {/* 标题 */}
      <h1 className='title-1 relative text-xl md:text-4xl pb-4 z-10'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
        {post.title}
      </h1>

      {/* 信息块 */}
      <div className='d-flex gap-3 font-semibold text-sm items-center justify-center'>

        {/* 发布时间 */}
        {post.publishDay && (
          <div className='flex items-center gap-1'>
            <i className='fa-regular fa-calendar'></i>
            <span>{post.publishDay}</span>
          </div>
        )}

        {/* 分类 */}  
        {post.category && (
              <>
                <Link
                  href={`/category/${post.category}`}
                  className='mr-4'
                  passHref
                  legacyBehavior>
                  <div className='cursor-pointer font-sm font-bold px-3 py-1 rounded-lg dark:text-yellow-500 text-blue-500 duration-200 '>
                    {post.category}
                  </div>
                </Link>
              </>
            )}
        {/* 标签 */}
        {post.tagItems && post.tagItems.length > 0 && (
          <div className='flex flex-wrap gap-2 items-center'>
            {post.tagItems.map((tag, index) => (
              <Link
                key={index}
                href={`/tag/${encodeURIComponent(tag.name)}`}
                className=`text-gray-600 hover:shadow-xl dark:border-gray-400 notion-{tag.color}_background dark:bg-gray-800`>
                {tag.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)
}
