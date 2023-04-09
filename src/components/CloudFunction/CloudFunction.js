import React, {useState} from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import '../../App.css';


const CloudFunction = () => {

  // State to store jokes retrieved from the API
  const [jokes, setJokes] = useState([]);

  // Variable which website URL address or link of Khiem's personal cloud function
  const apiLink = "https://us-east1-nguyen-cis680-cloudappdev.cloudfunctions.net/cloud-function-assignment-18-658"

  // Functions to fetch data from the api via HTTP get request
  // We use async function declaration and the await keyword to enable and ensure the fetchData method will run asynchronously 
  const fetchData = async () => {
    const response = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
    
    // Create a shallow copy of the array of jokes
    const tempJokesList = [...jokes];

    // Add the joke retrieved from API response and add it to the temporary Jokes list.
    tempJokesList.push(response.data.joke);

    // Update the jokes state variable and set the updated temporary jokes list as the new jokes state
    setJokes(tempJokesList);
  }
  
  return (
    <div>
      <div className="title-container">
        <h1>Dad Jokes: Cloud Function Edition!</h1>
      </div>
      {/* Fetch data from Jokes API */}
      <div className="button-container">
        <Button className="joke-button" onClick={fetchData} variant='success'>Retrieve A Joke</Button>
        <div className="joke-container"> 
          {jokes.length > 0 ? (<><b>Newest Joke: </b><span> {jokes && jokes[jokes.length-1]}</span></>) : <><div>Nothing to show, Please retrieve a joke!</div></>}
        </div>
      </div>

      <div className="jokes-container">
        {jokes.length > 0 ? 
          <>
          <h2>Jokes Collection</h2>
          <Table className="jokes-table" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Jokes</th>
              </tr>
            </thead>

            <tbody>
              {/* Display jokes */}
              {jokes && jokes.map((j, index) => {
                return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="joke"> {j} </td>
                    </tr>
                )
              })}
            </tbody>
          </Table>
        </> : <><div>No collection, yet! Retrieve a joke!</div></>}
      </div>
      
    </div>
  );
}

export default CloudFunction;