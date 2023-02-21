//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    //var searchText = ''; 
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState('');
    useEffect(() => {
       fetch('http://localhost:8000/search/?search='+searchText)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setResult(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
  
    function foSth(e){
      setSearchText(e.target.value)
      console.log(searchText)
    }

  return (
    <div class="s004">
    <form>
      <fieldset>
        <legend>Welcome to your personal space!</legend>
        <div class="inner-form">
          <div class="input-field">
            <input class="form-control" id="choices-text-preset-values" value={searchText} onChange={foSth} type="text" placeholder="Type to talk..." />
            <button class="btn-search" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="searchResult" class="suggestion-wrap">
          <span>{result}</span>
        </div>
      </fieldset>
    </form>
  </div>
  );

}



export default App;
