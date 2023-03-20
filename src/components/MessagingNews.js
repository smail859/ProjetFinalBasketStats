import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardContent,
  Typography,
  ImageList,
  ImageListItem,
  Link,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";

function MessagingNews() {
  const [newsItems, setNewsItems] = useState([]);

  async function getBasketballNews() {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=sports&q=basketball",
        {
          headers: {
            Authorization: "1c64b8ade7234a84aa4d543c7d4530bc",
          },
        }
      );
      setNewsItems(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBasketballNews();
  }, []);

  return (
    <>
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
      >
        {newsItems.map((newsItem) => (
          <div className="Carousel">
            <Card key={newsItem.url}>
              <CardContent>
                <Typography variant="h5">
                  {newsItem.title} Date de publication : {newsItem.publishedAt}{" "}
                </Typography>
                <Typography variant="h6">{newsItem.description}</Typography>
                <Typography>
                  <ImageList>
                    <ImageListItem>
                      <img alt={newsItem.title} src={newsItem.urlToImage} />
                    </ImageListItem>
                  </ImageList>
                  <p>{newsItem.content}</p>
                  <Typography>
                    <Link variant="body1" underline="hover" href={newsItem.url}>
                      Click pour voir l'article
                    </Link>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default MessagingNews;
