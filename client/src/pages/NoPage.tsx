import frog from "../assets/frog.png";

import "../css/NoPage.css"

export default function NoPage() {
  return (
    <div className="no-page">
      <img className="image" src={frog}/>
      Sorry this page does not exist yet
    </div>
  )
};