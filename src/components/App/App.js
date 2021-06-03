//#region ⬇⬇ All document setup below:
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GuestList from "../GuestList/GuestList";
import DinnerSupplies from "../DinnerSupplies/DinnerSupplies";
import GuestForm from "../GuestForm/GuestForm";
import PartyLeader from "../PartyLeader/PartyLeader";
//#endregion ⬆⬆ All document setup above. 


function App() {
  //#region ⬇⬇ All state variables & app load below:
  // ⬇ State variables:
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  // ⬇ On load, get guests:
  useEffect(() => {
    getGuests()
  }, [])
  //#endregion ⬆⬆ All state variables & app load above. 

  //#region ⬇⬇ All CRUD routes below:
  // ⬇ getGuests GET request:
  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  // ⬇ addGuest POST request:
  const addGuest = () => {
    axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };
  //#endregion ⬆⬆ All CRUD routes above. 

  // ⬇ handleSubmit: 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  console.log(newGuestMeal)

  //#region ⬇⬇ All rendering below:
  return (
    <div className="App">
      <Header />
      <PartyLeader leader={guestList[0]} />
      <GuestForm 
        newGuestName={newGuestName}
        setNewGuestName={setNewGuestName}
        newGuestMeal={newGuestMeal}
        setNewGuestMeal={setNewGuestMeal}
        handleSubmit={handleSubmit}
      />
      <GuestList guestList={guestList} />
      <DinnerSupplies guestList={guestList} />
      <Footer />
    </div>
  ); // End return
  //#endregion ⬆⬆ All rendering above. 
} // End App()


export default App;
