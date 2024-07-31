// src/News.tsx
import React from "react";
import styles from "./style.module.css";

interface NewsProps {
  news: {
    title: string;
    description: string;
    url: string;
  }[];
}

const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className={styles.newsContainer}>
      <ul>
        {news?.map((article, index) => (
          <li key={index} className={styles.card}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
