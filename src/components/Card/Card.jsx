import "./Card.css";
import { LiaHotelSolid } from "react-icons/lia";

// import { LiaHotelSolid } from "react-icons/lia";

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
      <img src={props?.imageUrl} width={270} height={170} />
      <div className="card-title">{props?.title}</div>
      <div className="card-content">{props?.content}</div>
      <div className="card-text">Per Night</div>
      <div className="card-total">Total ${props.total}</div>
      <div className="card-price">
        <LiaHotelSolid className="icon" />
        <p className="button-text">Show Hotel</p>
      </div>
    </div>
  );
}
export default Card;
