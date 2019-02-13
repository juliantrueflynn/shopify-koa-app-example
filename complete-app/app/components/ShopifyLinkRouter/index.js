import React from 'react';

class ShopifyLinkRouter extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();

    console.log('THIS SHOULD SHOW WHEN CLICKING TITLE BAR LINK', e);

    const { url, history } = this.props;
    history.push(url);
  }

  render() {
    const { children, url, history, ...props } = this.props;

    return (
      <a href="#" {...props} onClick={this.handleOnClick}>
        {children}
      </a>
    );
  }
}

export default ShopifyLinkRouter;
