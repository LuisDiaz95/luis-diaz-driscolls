import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews, News } from "../../services/newsService";
import { useTranslation } from "react-i18next";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error("There was an error fetching the news!", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {t("newsList")}
      </Typography>
      <List>
        {news.map((newsItem) => (
          <ListItem
            key={newsItem.id}
            component={Link}
            to={`/news/${newsItem.id}`}
            button
          >
            <ListItemText primary={newsItem.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default NewsList;
