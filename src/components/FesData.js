import React from 'react'


const FesData = () => {

  // const getFesData = async () => {
  //   const response = await fetch("http://countdownjapan.jp/1920/lineup/artists/", {
  //     made: "cors",
  //     credentials: 'include'
  //   });
  //   const data = await response.json();
  //   console.log(data)
  // }
  // getFesData();

  function createElementFromHTML(html) {
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    // return tempEl.querySelectorAll(".c-artist__title")[0].innerHTML
    const lineupContent = tempEl.querySelectorAll(".c-lineup-content .c-lineup-date")
    return lineupContent
  }

  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://countdownjapan.jp/1920/lineup/artists/'
  fetch(proxyUrl + targetUrl) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(contents => console.log(createElementFromHTML(contents)[0].innerHTML))
    // .then(contents => console.log(contents))
    // .then(response => console.log(response))
    .catch(() => console.log("Can’t access " + targetUrl + " response. Blocked by browser?"))

  return (
    <div>
      <h1>{}</h1>
    </div>
  )
}

export default FesData

