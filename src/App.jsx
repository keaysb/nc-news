import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AllArticles from "./components/AllArticles/AllArticles";
import ArticlePage from "./components/SingleArticle/ArticlePage";
import AllUsers from "./components/Login/AllUsers";

function App() {
  const [currentTopic, setCurrentTopic] = useState(null);

  return (
    <>
      <Header currentTopic={currentTopic} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<AllArticles setCurrentTopic={setCurrentTopic} />}
          />
          <Route
            path="/articles/:article_id"
            element={
              <ArticlePage
                setCurrentTopic={setCurrentTopic}
              />
            }
          />
          <Route path="/users" element={<AllUsers setCurrentTopic={setCurrentTopic}/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
