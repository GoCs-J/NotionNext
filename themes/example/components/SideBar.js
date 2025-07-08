import Live2D from '@/components/Live2D'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import CONFIG from '../config'
import Announcement from './Announcement'
import Catalog from './Catalog'
const ExampleRecentComments = dynamic(
  () => import('./RecentCommentListForExample')
)

/**
 * 侧边栏
 */
export const SideBar = props => {
  const { locale } = useGlobal()
  const { latestPosts, categoryOptions, notice, post } = props
  // 评论相关
  const COMMENT_WALINE_SERVER_URL = siteConfig(
    'COMMENT_WALINE_SERVER_URL',
    false
  )
  const COMMENT_WALINE_RECENT = siteConfig('COMMENT_WALINE_RECENT', false)

  // 文章详情页特殊布局
  const HIDDEN_NOTIFICATION =
    post && siteConfig('EXAMPLE_ARTICLE_HIDDEN_NOTIFICATION', false, CONFIG)

  // 文章详情页左右布局改为上下布局
  const LAYOUT_VERTICAL =
    post && siteConfig('EXAMPLE_ARTICLE_LAYOUT_VERTICAL', false, CONFIG)

  return (
    <>
      {/* 目录 */}
      {post?.toc && post?.toc.length > 2 && (
        <aside className='w-full rounded shadow overflow-hidden mb-6 pb-4'>
          <h3 className='text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b'>
            {locale.COMMON.TABLE_OF_CONTENTS}
          </h3>
          <Catalog toc={post?.toc} />
        </aside>
      )}

      {/* 最近评论 */}
      {COMMENT_WALINE_SERVER_URL && COMMENT_WALINE_RECENT && (
        <aside className='w-full rounded shadow overflow-hidden mb-6'>
          <h3 className='text-sm bg-gray-100 text-gray-700 dark:bg-hexo-black-gray dark:text-gray-200 py-3 px-4 dark:border-hexo-black-gray border-b'>
            {locale.COMMON.RECENT_COMMENTS}
          </h3>

          <div className='p-4'>
            <ExampleRecentComments />
          </div>
        </aside>
      )}

      {/* 宠物挂件 */}
      <aside
        className={`rounded overflow-hidden mb-6 ${LAYOUT_VERTICAL ? 'hidden md:fixed right-4 bottom-20' : ''}`}>
        <Live2D />
      </aside>
    </>
  )
}
