import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Typography, Link } from "@mui/material";
import CustomButton from "../buttons/Button";
import "./messagingNews.css";

function MessagingNews({ newsApiUrl, newsApiKey, newsPageSize, newsCategory }) {
  // On utilise le hook useState pour initialiser notre state newsItems avec un tableau vide.
  const [newsItems, setNewsItems] = useState([]);

  // On utilise le hook useState pour initialiser notre state currentNewsIndex avec la valeur 0.
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    // On utilise le hook useEffect pour exécuter une fonction asynchrone lors du montage du composant.
    async function getBasketballNews() {
      try {
        const response = await axios.get(
          // On envoie une requête GET à l'API News pour récupérer les articles liés au basket-ball et on les stocke dans notre state newsItems.
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
    // On met à jour notre state currentNewsIndex en fonction de la taille de notre tableau newsItems.
    setCurrentNewsIndex((currentNewsIndex + 1) % newsItems.length);
  }

  return (
    <>
      {newsItems.length > 0 && (
        // On affiche les articles sous forme de carousel.
        <Card className="card_caroussel">
          <CardContent className="card_content_caroussel">
            <Typography variant="h2">Actualité</Typography>

            <img
              // On affiche l'image de l'article en cours.
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
