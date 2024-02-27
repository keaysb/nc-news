import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AllArticles from "./components/AllArticles/AllArticles";
import ArticlePage from "./components/SingleArticle/ArticlePage";
import errorHandlerStyles from "./components/ErrorHandler/errorHandler.module.scss";
import AllUsers from "./components/Login/AllUsers";

function App() {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [stopScroll, setStopScroll] = useState("scrollTrue");

  return (
    <>
      <Header currentTopic={currentTopic} stopScroll={stopScroll} />
      <main className={errorHandlerStyles[stopScroll]}>
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
                setStopScroll={setStopScroll}
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
