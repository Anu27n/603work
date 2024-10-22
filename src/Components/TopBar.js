import React from 'react';

const TopBar = () => (
  <div className="topbar">
    <div className="container">
      <address className="topbar-item">
        <div className="icon">
          <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
        </div>
        <span className="span">
          Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
        </span>
      </address>
      <div className="separator"></div>
      <div className="topbar-item item-2">
        <div className="icon">
          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
        </div>
        <span className="span">Daily : 8.00 am to 10.00 pm</span>
      </div>
      <a href="tel:+11234567890" className="topbar-item link">
        <div className="icon">
          <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
        </div>
        <span className="span">+91 9136036603</span>
      </a>
      <div className="separator"></div>
      <a href="mailto:sales@603thecoworkingspace.com" className="topbar-item link">
        <div className="icon">
          <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
        </div>
        <span className="span">sales@603thecoworkingspace.com</span>
      </a>
    </div>
  </div>
);

export default TopBar;