import ReactMarkdown from 'react-markdown'

export default function Text({ className, data }) {
	return <ReactMarkdown className={className} children={data} />
}
