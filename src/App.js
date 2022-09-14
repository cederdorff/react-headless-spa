import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/posts/:slug" element={<PostPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
