import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews, News } from "../../services/newsService";

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>News List</h1>
      <ul>
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <Link to={`/news/${newsItem.id}`}>{newsItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
