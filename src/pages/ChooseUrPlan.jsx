import React from "react";
import "../static/baielPlan.css";

function ChooseUrPlan() {
  return (
    <>
      <div className="pc">
        <div>
          <div className="textBox">
            <h1 className="Title">Choose Your Plan</h1>
            <h4 className="Subtitle">
              When Buying Any Subscription, After It's Expiration, One Movie Per
              Week Is Issued For Free
            </h4>
          </div>
          <div className="cardContainer">
            <div class="card_usd">
              <div className="textBox">
                <h3 className="h3">Week</h3>
                <h2 className="h2">$5</h2>
              </div>
              <ul className="ul_usd"> 
                <li className="li">Unlimited Watch</li>
                <li className="li">Pay movies</li>
                <li className="li">Own catalogue</li>
                <li className="li">Reviews</li>
                <li className="li">Free movies</li>
                <li className="li">4K ULTRA HD</li>
              </ul>
              <button className="btn">Get started</button>
            </div>
            <div class="card_usdTwo">
                {/* <div className="hat">Most popular</div> */}
              <div id="cardTwoContainer">
                <div className="textBox">
                  <h3 className="h3Two">Month</h3>
                  <h2 className="h2Two">$10</h2>
                </div>
                <ul className="ul_usd">
                  <li className="liTwo">Unlimited Watch</li>
                  <li className="liTwo">Pay movies</li>
                  <li className="liTwo">Own catalogue</li>
                  <li className="liTwo">Reviews</li>
                  <li className="liTwo">Free movies</li>
                  <li className="liTwo">4K ULTRA HD</li>
                </ul>
                <button className="btnTwo">Get started</button>
              </div>
            </div>
            <div class="card_usd">
              <div className="textBox">
                <h3 className="h3">Standart</h3>
                <h2 className="h2">Free</h2>
              </div>
              <ul className="ul_usd">
                <li className="li">Unlimited Watch</li>
                <li className="li">Pay movies</li>
                <li className="li">Own catalogue</li>
                <li className="li">Reviews</li>
                <li className="li">Free movies</li>
                <li className="li">1080p</li>
              </ul>
              <button className="btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div>
          <div className="textBox">
            <h1 className="Title">Choose Your Plan</h1>
            <h4 className="Subtitle">
              When Buying Any Subscription, After It's Expiration, One Movie Per
              Week Is Issued For Free
            </h4>
          </div>
          <div className="cardContainer">
            <div class="card_usd">
              <div className="textBox">
                <h3 className="h3">Week</h3>
                <h2 className="h2">$5</h2>
              </div>
              <ul className="ul_usd">
                <li className="li">Unlimited Watch</li>
                <li className="li">Pay movies</li>
                <li className="li">Own catalogue</li>
                <li className="li">Reviews</li>
                <li className="li">Free movies</li>
                <li className="li">4K ULTRA HD</li>
              </ul>
              <button className="btn">Get started</button>
            </div>
            <div class="card_usdTwo">
              <div id="cardTwoContainer">
                <div className="textBox">
                  <h3 className="h3Two">Month</h3>
                  <h2 className="h2Two">$10</h2>
                </div>
                <ul className="ul_usd">
                  <li className="liTwo">Unlimited Watch</li>
                  <li className="liTwo">Pay movies</li>
                  <li className="liTwo">Own catalogue</li>
                  <li className="liTwo">Reviews</li>
                  <li className="liTwo">Free movies</li>
                  <li className="liTwo">4K ULTRA HD</li>
                </ul>
                <button className="btnTwo">Get started</button>
              </div>
            </div>
            <div class="card_usd">
              <div className="textBox">
                <h3 className="h3">Standart</h3>
                <h2 className="h2">Free</h2>
              </div>
              <ul className="ul_usd">
                <li className="li">Unlimited Watch</li>
                <li className="li">Pay movies</li>
                <li className="li">Own catalogue</li>
                <li className="li">Reviews</li>
                <li className="li">Free movies</li>
                <li className="li">1080p</li>
              </ul>
              <button className="btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUrPlan;
