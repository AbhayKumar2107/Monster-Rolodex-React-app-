import { Component } from "react";
import Card from "../card/card.component";
import './cardList.styles.css'

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="card-list">
        {monster.map((monster) => {
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;
