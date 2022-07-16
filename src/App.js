
import { useState, useEffect } from "react";
import './App.css';
import RandomUser from './components/RandomUser';
import axios from 'axios';
import Footer from './components/footer/Footer';

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [table,setTable] = useState([])
  useEffect(() => {
    axiosUser();
  }, []);

  const axiosUser = async () => {
    setLoading(true);
   const response = await axios("https://randomuser.me/api/")
    // console.log(response);
    setUser(response.data.results);
    setLoading(false);
    console.log(response.data.results);
  };

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1>:<RandomUser user={user} axiosUser={axiosUser} table={table} setTable={setTable} />}
      <Footer/>
    </div>
  );
}

export default App;
