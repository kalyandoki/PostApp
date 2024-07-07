import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PostList from './PostList'
import PostForm from './PostForm'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleEdit = index => {
    setEditIndex(index)
  }

  return (
    <Router>
      <div value={editIndex} className="app">
        <Switch>
          <Route exact path="/">
            <PostList posts={posts} onEdit={handleEdit} />
          </Route>
          <Route path={['/create', '/edit/:id']}>
            <PostForm posts={posts} setPosts={setPosts} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
