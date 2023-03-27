import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Typography, Link } from "@mui/material";
import CustomButton from "../buttons/Button";
import "./messagingNews.css";

function MessagingNews({ newsApiUrl, newsApiKey, newsPageSize, newsCategory }) {
  const [newsItems, setNewsItems] = useState([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    async function getBasketballNews() {
      try {
        const response = await axios.get(
          `${newsApiUrl}/top-headlines?country=us&category=${newsCategory}&q=basketball&pageSize=${newsPageSize}`,
          {
            headers: {
              Authorization: newsApiKey,
            },
          }
        );
        setNewsItems(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    getBasketballNews();
  }, [newsApiUrl, newsApiKey, newsPageSize, newsCategory]);

  function handleNextNews() {
    setCurrentNewsIndex((currentNewsIndex + 1) % newsItems.length);
  }

  return (
    <>
      {newsItems.length > 0 && (
        <Card className="card_caroussel">
          <CardContent className="card_content_caroussel">
            <Typography variant="h2">Actualité</Typography>

            <img
              className="card_caroussel_image"
              alt={newsItems[currentNewsIndex].title}
              src={newsItems[currentNewsIndex].urlToImage}
            />

            <Typography variant="h5">
              {newsItems[currentNewsIndex].title} Date de publication :{" "}
              {newsItems[currentNewsIndex].publishedAt}
            </Typography>
            <Typography variant="h6">
              {newsItems[currentNewsIndex].description}
            </Typography>
            <Typography>
              <Typography>{newsItems[currentNewsIndex].content}</Typography>
              <Typography className="card_caroussel_link">
                <Link
                  variant="body1"
                  underline="hover"
                  href={newsItems[currentNewsIndex].url}
                >
                  Click pour voir l'article
                </Link>
              </Typography>
            </Typography>
          </CardContent>
          <CustomButton
            backgroundColor="#f47b06"
            textColor="#ffffff"
            onClick={handleNextNews}
          >
            news suivantes{" "}
          </CustomButton>
        </Card>
      )}
    </>
  );
}

export default MessagingNews;
