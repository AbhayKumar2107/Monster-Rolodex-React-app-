import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList.component";
import SearchBox from "./components/searchBox/searchBox.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;





// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => this.setState({ monsters: users }))
//       .catch((error) => console.error("Error fetching users:", error));
//   }

//   onSearchChange = (event)=>
//     {
//       const searchField = event.target.value.toLocaleLowerCase();

//       this.setState(()=>{
//         return { searchField };
//       })
//     };

//   render() {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const fillteredMonster = monsters.filter((monsters)=>{
//       return monsters.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='main-title'> Monster ChutiyapA</h1>
//         <SearchBox eventHandler={onSearchChange} placeholder='search monster' className='monster-search-box'/>
//         <CardList monster={fillteredMonster} />
//       </div>
//     );
//   }
// }
