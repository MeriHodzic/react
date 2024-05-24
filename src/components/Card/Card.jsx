import "./Card.css";

// function Greeting(props) {
//   return (
//     <div className="greeting-wraper">
//       <h1 className="greeting-title ">Dobro dosli na {props.appName} </h1>
//       <h2 className="greeting-subtitle">{props.fullName}</h2>
//     </div>
//   );
// }
// export default Greeting;

function Card(props) {
  return (
    <div className="card">
      <img
        src="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3-1640x1312.jpg"
        width={270}
      />
      <div className="card-title">{props?.title}</div>
      <div className="card-content">{props?.content}</div>
      <div className="card-text">{props?.text}</div>
      <div className="card-total">{props?.total}</div>
      <div className="card-price">{props?.card}</div>
    </div>
  );
}
export default Card;
