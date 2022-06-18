import "./SingleCard.css";
const baseURL = import.meta.env.BASE_URL;
const Card = ({ card, handleChoice, flipped }) => {
  const handlerChoice1 = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        {flipped ? (
          <img src={`${baseURL}${card.src}`} className="front" alt="card-front" />
        ) : (
          <img
            src={`${baseURL}img/cover.png`}
            onClick={handlerChoice1}
            className="back"
            alt="card-back"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
