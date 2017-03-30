import React from 'react';

class Counter extends React.Component {

  render() {
    const { value } = this.props;
    const wordCounter = (value.replace(/\d+/g, '').match(/\S+/g) || []).length;
    const numberCounter = (value.match(/\d+/g) || []).length;
    const commaCounter = (value.match(/,/g) || []).length;
    const fullstopCounter = (value.match(/\./g) || []).length;
    return(
      <div className="counter col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="counter-results">
          <div className="counter-results">
            <span> Words: <span> {wordCounter} |</span></span>
            <span> Numbers: <span> {numberCounter} |</span></span>
            <span> Commas: <span> {commaCounter} |</span></span>
            <span> Fullstops: <span> {fullstopCounter} </span></span>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Counter;
