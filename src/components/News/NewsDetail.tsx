import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews, News } from "../../services/newsService";
import { useTranslation } from "react-i18next";
import { Typography, Card } from "@mui/material";

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<News | null>(null);
  const { t } = useTranslation();

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

  if (!news) return <div>{t("loading")}</div>;

  return (
    <div>
      <Card elevation={3} sx={{ padding: "20px" }}>
        <Typography variant="h4">{news.title}</Typography>
        <Typography variant="body1">{news.content}</Typography>
      </Card>
    </div>
  );
};

export default NewsDetail;
