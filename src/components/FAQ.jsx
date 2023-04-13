import React from "react";
import "../static/FAQ.css";

function FAQ() {
  return (
    <>
      <div className="pc">
        <div class="AboutUs">
          <div class="rasstoyanie">
            <h1 class="au">About us</h1>
            <h4 class="generalltext">
              This Privacy Statement explains our practices, including your
              choices, regarding the collection, use, and disclosure of certain
              information, including your personal information in connection
              with the Netflix service.
            </h4>
          </div>
          <div class="rasstoyanie">
            <h2 class="contactcollect">Contacting us</h2>
            <h4 class="generalltext">
              If you have general questions about your account or how to contact
              customer service for assistance, please visit our online help
              center at help.netflix.com. For questions specifically about this
              Privacy Statement, or our use of your personal information,
              cookies or similar technologies, please contact our Data
              Protection Officer/Privacy Office by email at privacy@netflix.com.
              The data controller of your personal information is Netflix
              International B.V. Please note that if you contact us to assist
              you, for your safety and ours we may need to authenticate your
              identity before fulfilling your request.
            </h4>
          </div>
          <div class="rasstoyanie">
            <h2 class="contactcollect">Collection of Information</h2>
            <h4 class="generalltext">
              <ul>
                We receive and store information about you such as: <br />
                <li>Information you provide to us:</li>
                <li>
                  We collect information you provide to us which includes: your
                  name, email address, payment method(s), telephone number, and
                  other identifiers you might use (such as an in-game name). We
                  collect this information in a number of ways, including when
                  you enter it while using our service, interact with our
                  customer service, or participate in surveys or marketing
                  promotions;
                </li>
                <li>
                  information when you choose to provide ratings, taste
                  preferences, account settings (including preferences set in
                  the "Account" section of our website), or otherwise provide
                  information to us through our service or elsewhere.
                </li>
                <li>
                  Information we collect automatically: We collect information
                  about you and your use of our service, your interactions with
                  us and our advertising, as well as information regarding your
                  network, network devices, and your computer or other Netflix
                  capable devices you might use to access our service (such as
                  gaming systems, smart TVs, mobile devices, set top boxes, and
                  other streaming media devices). This information includes:
                </li>
                <li>
                  your activity on the Netflix service, such as title
                  selections, shows you have watched, search queries, and
                  activity in Netflix games;
                </li>
                <li>
                  your interactions with our emails and texts, and with our
                  messages through push and online messaging channels;
                </li>
                <li>
                  details of your interactions with our customer service, such
                  as the date, time and reason for contacting us, transcripts of
                  any chat conversations, and if you call us, your phone number
                  and call recordings;
                </li>
                <li>
                  {" "}
                  device IDs or other unique identifiers, including for your
                  network devices (such as your router), and devices that are
                  Netflix capable on your network;
                </li>
                <li>
                  resettable device identifiers (also known as advertising
                  identifiers), such as those on mobile devices, tablets, and
                  streaming media devices that include such identifiers (see the
                  "Cookies and Internet Advertising" section below for more
                  information);
                </li>
                <li>
                  device and software characteristics (such as type and
                  configuration), connection information including type (wifi,
                  cellular), statistics on page views, referring source (for
                  example, referral URLs), IP address (which can be used to tell
                  us your general location, such as your city, state/province,
                  and postal code), browser and standard web server log
                  information;
                </li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
      <div className="mobile"></div>
    </>
  );
}

export default FAQ;
