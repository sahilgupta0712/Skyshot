
// import './App.css';  
// import './home.css';

import SimpleSlider from "./slideshow";

// import './sky.js';

function App() {
  return (
    <div className="App">
      <div className="maindoc">
        <div id="home1">
          <div className="home1_1">
            <h1>Invest in <span className="autochange" /> </h1>
            <p> Trusted by Millions of Indians. Start Investing Today </p>
            <button className="GetStarted">Get Started</button>
          </div>
        </div>
        <div className="home2">
          <div className="home2_1">
            <h1>One platform. Multiple investment opportunities.</h1>
            
            <p>
            <pre  style={{fontcolor: "white"}}>Long term investors, pro traders or part-time traders can{"\n"} choose across various asset classes and create your{"\n"}{"   "}customised portfolio. All from one platform.</pre>
            </p>
          </div>
          <br />
          <SimpleSlider />
        </div>
        <div className="home3">
          <br /><br />
          <nav className="section3">
            <h1>Don't let brokerage eat into your profits!</h1>
            <br />
            <img src={require("./images/home3_1.jpg")} />
            <img src={require("./images/home3_2.jpg")} />
            <img src={require("./images/home3_3.jpg")} />
            <p> ₹0<br /><b style={{fontSize: 'x-large'}}>Brokerage*</b><br />On investing in Mutual Funds and IPOs
            </p>
            <p>₹0*<br /><b style={{fontSize: 'x-large'}}>AMC Charges*</b><br />Demat account maintenance charges!
            </p>
            <p>₹0<br /><b style={{fontSize: 'x-large'}}>Charges</b><br />For opening an account online with Skyshot
            </p>
          </nav>
        </div>
        
      </div>
    



    

       
  




    </div>


    
  );
}






export default App;
