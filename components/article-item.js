import Link from 'next/link'

import { parseISO, format } from 'date-fns'

export default function ArticleItem({ title, publishedAt, slug }) {
  const url = `/blog/${slug}`
  const date = parseISO(publishedAt)

  return (
    <li>
      <Link href={url}>
        <a>
          <div className="ml-[-20px] w-[calc(100%+40px)]">
            <div className="flex cursor-pointer items-center justify-between py-[10px] px-[20px] decoration-night decoration-2 underline-offset-2 hover:underline">
              <div className="flex items-center">
                <h3 className="mr-4 inline text-xl">{title}</h3>
              </div>

              <span className="item-end text-sm text-neutral-500">
                <code>
                  <time dateTime={publishedAt}>{format(date, 'LLL dd')}</time>
                </code>
              </span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}
