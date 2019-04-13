import React, { Component } from 'react';

import './Footer.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        Все права защищены.
      </section>
    );
  }
}

export default Footer;