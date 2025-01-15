import profilePic from './assets/gigachad.jpg';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="gigachad"></img>
      <h2 className="card-title">Mstyslav</h2>
      <p className="card-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default Card;
