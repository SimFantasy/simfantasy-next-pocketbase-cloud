import { marked } from 'marked'

const MarkdownContent = ({ source }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked.parse(source) }}
      className='prose dark:prose-invert prose-pre:bg-gray-200 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-400'
    />
  )
}

export default MarkdownContent
