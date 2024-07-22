
import { useState } from "react";
import { Modal } from "react-bootstrap";

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://usercontent.one/wp/www.e-travelmag.com/wp-content/uploads/2018/08/Biblioteca-di-Archeologia-4.jpg?media=1704922323",
    title: "Bookstore",
    content: "A small bookstore website.",
    github: "https://github.com/dan-begaliev/books.git",
    goLive: "https://dan-begaliev.github.io/books/",
  },
  {
    id: 2,
    imageUrl:
      "https://egqusrjtrmt.exactdn.com/wp-content/uploads/2022/12/temperature-converter.webp?strip=all&lossy=1&ssl=1",
    title: "Temperature Converter",
    content:
      "A temperature converter for Fahrenheit (°F) to Celsius (°C) and back allows users to convert temperatures between these two commonly used units. ",
    github: "https://github.com/dan-begaliev/first-app",
    goLive: "https://dan-begaliev.github.io/first-app/",
  },
  {
    id: 3,
    imageUrl:
      "https://www.posist.com/restaurant-times/wp-content/uploads/2023/07/How-To-Start-A-Coffee-Shop-Business-A-Complete-Guide.jpg",
    title: "Coffee Shop",
    content: "A coffee shop website.",
    github: "https://github.com/dan-begaliev/Coffee-Shop",
    goLive: "https://coffee-shop-hazel-seven.vercel.app",
  },
  {
    id: 4,
    imageUrl:
      "https://d107mjio2rjf74.cloudfront.net/sites/res/home/common/header.png",
    title: "To-do List",
    content: "",
    github: "https://github.com/dan-begaliev/To-do-list-app",
    goLive: "https://dan-begaliev.github.io/To-do-list-app/",
  },
  {
    id: 5,
    imageUrl:
      "https://usercontent.one/wp/www.e-travelmag.com/wp-content/uploads/2018/08/Biblioteca-di-Archeologia-4.jpg?media=1704922323",
    title: "Bookstore 5",
    content: "Content for Bookstore 5 modal.",
    github: "https://github.com/dan-begaliev/books.git",
    goLive: "",
  },
  {
    id: 6,
    imageUrl:
      "https://usercontent.one/wp/www.e-travelmag.com/wp-content/uploads/2018/08/Biblioteca-di-Archeologia-4.jpg?media=1704922323",
    title: "Bookstore 6",
    content: "Content for Bookstore 6 modal.",
    github: "https://github.com/dan-begaliev/books.git",
    goLive: "",
  },
];

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setShowModal(true);
    setSelectedCard(cardId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const handleGitHubButtonClick = () => {
    const githubUrl = cardData.find((card) => card.id === selectedCard)?.github;
    if (githubUrl) {
      window.open(githubUrl, "_blank");
    }
  };

  const handleGoLiveButtonClick = () => {
    const goLiveUrl = cardData.find((card) => card.id === selectedCard)?.goLive;
    if (goLiveUrl) {
      window.open(goLiveUrl, "_blank");
    }
  };

  return (
    <div id="projects-grid">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects:</h1>
      <div className="big-container">
        <div className="card-container">
          {cardData.map((card) => (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card.id)}
            >
              <img src={card.imageUrl} alt={card.title} />
              <h1>{card.title}</h1>
            </div>
          ))}
        </div>

        {selectedCard !== null && (
          <Modal show={showModal} onHide={handleCloseModal} centered scrollable>
            <Modal.Header closeButton>
              <Modal.Title>
                {cardData.find((card) => card.id === selectedCard).title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={cardData.find((card) => card.id === selectedCard).imageUrl}
                width="100%"
                height="auto"
                alt={cardData.find((card) => card.id === selectedCard).title}
              />
              <p className="moveTop">
                {cardData.find((card) => card.id === selectedCard).content}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn btn-outline-dark"
                onClick={handleGitHubButtonClick}
              >
                <i className="fa-brands fa-github"></i>
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={handleGoLiveButtonClick}
              >
                <i className="fa-solid fa-podcast"></i> Go Live
              </button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Projects;
