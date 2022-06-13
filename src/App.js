import logo from './logo.svg';
import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import './App.css';

const quoteList = {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right',
  };

function App() {
  const [ShowQuoteSim, setShowQuoteSim] = React.useState(quoteList);

  const getQuote = () => {
    // Send the request
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    // Extract the DATA from the received response
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
      setShowQuoteSim(data[0]);
    });
  };


  return (
    <div className="App">
        <QuoteCard ShowQuoteSim={ShowQuoteSim} />
        <button type="button" onClick={getQuote}>Simpson quote</button>
    </div>
  );
}

export default App;
