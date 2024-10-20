import Card from "../card/card.component";
import './cardList.styles.css'

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);



export default CardList;
