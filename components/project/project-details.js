import Image from 'next/image'
import { nanoid } from 'nanoid'
import Tag from './Tag'

export default function ProjectDetails({
  className,
  img,
  projectName,
  tagline,
  tags,
  descriptions,
  link,
}) {
  return (
    <div className={className}>
      <div className="text-lg flex">
        <Image src={img.src} alt={img.alt} height={32} className="mr-2" />
        <span>
          <span className="font-bold">{projectName}</span>
          <span> - {tagline}</span>
        </span>
      </div>
      {/* tags */}
      <div className="mt-2">
        {tags.map((tag) => (
          <Tag key={nanoid()}>{tag}</Tag>
        ))}
      </div>
      {descriptions.map((desc) => (
        <p key={nanoid()} className="mt-6 text-lg">
          {desc}.
        </p>
      ))}
      <p className="mt-6 text-lg">
        Try it out,{' '}
        <a
          className="underline decoration-orange decoration-2 underline-offset-2 hover:bg-orange hover:text-white hover:no-underline"
          href={link.href}
          target="_blank"
        >
          {link.name}
        </a>
        .
      </p>
    </div>
  )
}
