import React from "react";
import "./ContactsCard.css";

const contactsCard = (props) => {
    return (
        <div class="card mb-3 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: 33.75 + 'em'}}>
  <div className="row no-gutters">
    <div class="col-md-4">
      <img src={props.placeholder} class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.bio}</p>
        <p class="card-text"><small class="text-important">Email: {props.email}</small></p>
      </div>
    </div>
  </div>
</div>

    )
}
export default contactsCard;