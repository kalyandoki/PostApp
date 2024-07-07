import {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import './App.css'

const PostForm = ({posts, setPosts}) => {
  const {id} = useParams()
  const history = useHistory()
  const isEdit = id !== undefined
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (isEdit) {
      const post = posts[Number(id)]
      setTitle(post.title)
      setContent(post.content)
    }
  }, [id, posts, isEdit])

  const handleSubmit = e => {
    e.preventDefault()
    const newPosts = [...posts]
    const newPost = {title, content}
    if (isEdit) {
      newPosts[Number(id)] = newPost
    } else {
      newPosts.push(newPost)
    }
    setPosts(newPosts)
    history.push('/')
  }

  return (
    <div className="post-form">
      <h1>{isEdit ? 'Edit Post' : 'Create your Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="enter-data">
          <label htmlFor="title" className="label">
            Enter Title
          </label>
          <input
            id="title"
            type="text"
            className="title"
            placeholder="Enter Your Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="enter-data">
          <label htmlFor="con" className="label">
            Enter Content
          </label>
          <textarea
            placeholder="Enter Your Post"
            rows="10"
            className="text"
            id="con"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">
          {isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  )
}

export default PostForm
