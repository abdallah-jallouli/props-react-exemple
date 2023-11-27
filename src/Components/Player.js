import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="playerComponent">
      <Card style={{ width: "18rem"}}>
        <Card.Img id="image-card" variant="top" src= {imageUrl} />
        <Card.Body>
          <Card.Title style={{fontWeight:"700"}}>{name}</Card.Title>
          <Card.Text className="body-card">
            <span>Team Name : </span>{team}
            <br />
            <span>Nationality : </span>{nationality}
            <br />
            <span>JerseyNumber : </span>{jerseyNumber}
            <br />
            <span>Age : </span>{age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
