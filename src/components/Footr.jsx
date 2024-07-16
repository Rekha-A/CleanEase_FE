import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-dark py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3>About CleanEase</h3>
            <p>Clean Ease provides world-class Home cleaning services with a flexible pricing option. We have a group of certified Home cleaners in Bangalore and Chennai. Our main aim is to ensure your convenience.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact</h3>
            <p>Phone: 084538 58578</p>
           <p>Email: <a href="mailto: cleanease@gmail.com className="text-dark"> cleanease@gmail.com</a></p>
            <p>Website: <a href="https://www.cleanease.ca" className="text-dark">www.cleanease.ca</a></p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <p>&copy; {currentYear} CleanEase. All rights reserved.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-dark">Terms of Use</a></li>
              <li className="list-inline-item mx-2">|</li>
              <li className="list-inline-item"><a href="#" className="text-dark">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
