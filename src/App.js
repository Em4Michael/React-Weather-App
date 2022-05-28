import React from "react";

const api = {
  key: '249d2b45b68604e242df127efa28caa5',
  link : 'https://api.openweathermap.org/data/2.5/weather'
}
function App() {
  return (
    <div class="container">
      <div class="row center">
        <div class="Box">

          <div className="menu">
            <span className="Menu"><i class="fa-solid fa-bars"></i></span>
            <div className="title">
              <span><i className="fa-solid fa-location-dot"></i></span>
              <h2 id="cityname">City</h2>

            </div>

          </div>
          <div className="main">
            <div className="heading">
              <h2>Today's Report</h2>
            </div>

          </div>
          <div className="search-bar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <form className="Search">
              <input type="text"
                id="cityInput"
                placeholder="Search for City"
                autocomplete="off" />
            </form>
          </div>
          <main id="pp">
                    <div className="mid">

                        <div className="image"><img src="./images/warm.jpg"/></div>

                        <h3 className="weather" id="day1">Cloudy</h3>

                    </div>
                    <div className="temp">
                        <div className="left">
                            <h2 className="minValues" id="day1Min">29 <span className="value">&deg;C</span> </h2>

                            <h2 className="maxValues" id="day1Max">33 <span className="value">&deg;C</span> </h2>
                        </div>
                        <div className="right">
                            <h1 className="maxValues" id="day1Max">32 <span className="value">&deg;C</span> </h1>
                        </div>
                    </div>

                    <div className="conditions">
                        <div className="one space">
                            <img src="./images/Sunny.png" alt=""/>
                            <h4 className="speed">23km/h</h4>
                            <h3>Speed</h3>

                        </div>
                        <div className="two space">
                            <img src="./images/humidity.png" alt=""/>
                            <h4 className="humidity">30%</h4>
                            <h4>Humidity</h4>

                        </div>
                        <div className="three space">
                            <img src="./images/Rain.png" alt=""/>
                            <h4 className="rain">23km/h</h4>
                            <h3>Gust</h3>

                        </div>
                    </div>
                </main>
                <div className="icon-flex">
                    <a href=""><span><i className="fa-solid fa-house"></i></span></a>
                    <a href=""><span><i className="fa-solid fa-magnifying-glass"></i></span></a>
                    <a href=""><span><i className="fa-regular fa-compass"></i></span></a>
                    <a href=""><span><i className="fa-regular fa-user"></i></span></a>
                </div>

        </div>


      </div>
    </div>
  );
}

export default App;
