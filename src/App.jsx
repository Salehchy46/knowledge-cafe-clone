import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/Bookmarks/BookMarks'
import Header from './Components/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App
