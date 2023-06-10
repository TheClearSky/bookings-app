import './App.css'
import LeftSideBar from './components/LeftSideBar'
import HomePage from './pages/HomePage'

function App() {

    return (
        <div style={{ display: "flex" }}>
            <LeftSideBar />
            <HomePage />
        </div>
    )
}

export default App
