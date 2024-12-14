import "./ReviewCard.scss";

const ReviewCard = () => {

  return (
    <>
      <div className="review-card">
        <section className="review-info">
          <p>Екатерина</p>
          <p>15.10.25</p>
          <img src="../../src/assets/5star.png"></img>
        </section>
        <p>Всем довольна! Еще вернусь.</p>
        <section className="review-pros">
          <p>Достоинства:</p>
          <p>Все великолепно!</p>
        </section>
        <section className="review-cons">
          <p>Недостатки:</p>
          <p>Не обнаружила</p>
        </section>
      </div>
      <div className="review-gallery">
        <img src="../../src/assets/lionhaha.png" alt="1" />
        <img src="../../src/assets/lionhaha2.jpeg" alt="2" />
        <button><img src="../../src/assets/right-arrow.png"></img></button>
      </div>  
    </>
    
  )
}

export default ReviewCard; 