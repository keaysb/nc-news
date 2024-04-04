import { createContext, useState } from 'react';

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [currentArticlesTopic, setCurrentArticlesTopic] = useState("");

  return (
    <TopicContext.Provider value={{ currentArticlesTopic, setCurrentArticlesTopic }}>
      {children}
    </TopicContext.Provider>
  );
};