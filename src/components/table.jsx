import React from 'react';

class Table extends React.Component {
  render() {
    //const { wordList, tableHeader } = this.props;
    //console.log(tableHeader);
    console.log(this.props);

    return(
      <div id="myTable" className="table-responsive">
        <table id="word-table" className="table table-bordered">
            <thead id="thead">

            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
      </div>
    );
  }
}

module.exports = Table;

// <tr>
//   {tableHeader.map((tableHeader) =>
//   <td key={tableHeader}>{tableHeader}</td>
// )}
// </tr>
//
// <tr>
//   {Object.keys(wordList).map((index, value) =>
//     <td key={index}>{wordList[value]}</td>
//   )}
// </tr>
