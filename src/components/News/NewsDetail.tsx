import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews, News } from "../../services/newsService";

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getSingleNews(Number(id));
        setNews(newsData);
      } catch (error) {
        console.error("There was an error fetching the news item!", error);
      }
    };

    fetchNews();
  }, [id]);

  if (!news) return <div>Loading...</div>;

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetail;
