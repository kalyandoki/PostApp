import {Link} from 'react-router-dom'
import './App.css'

const PostList = props => {
  const {posts, onEdit} = props
  return (
    <div className="post-list">
      <h1 className="head">Posts</h1>
      <ul className="ul-con">
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button type="button" onClick={() => onEdit(post.id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <Link to="/create">
        <button type="button">Create New Post</button>
      </Link>
    </div>
  )
}

export default PostList
