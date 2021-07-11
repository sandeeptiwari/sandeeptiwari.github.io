import React from 'react';


const classes = {
  wrapper: 'background-color:#222f3e width:100%  bottom:height:100px bottom:0',
  footer: 'margin: 0 auto max-width:100% height: 100px line-height: 100px color:#ffffff' +
    '      font-family: Verdana, Geneva, Tahoma, sans-serif' +
    '      padding: 0px 20px 0px 20px;',
};

const Footer = ({ children = {}, noBlog = false }) => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        {children}
      </div>
    </footer>
  );
};

export default Footer;
