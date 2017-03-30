import React, { Component } from 'react';
import Header from './components/header';
import Input from './components/input';
import Counter from './components/counter';
import Table from './components/table';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      value: ''
      // numWarning: false,
      // wordWarning: false
    });
    this.onUpdate = this.onUpdate.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onUpdate (value) { this.setState({ value }); }
  onClear (value) { this.setState({ value }); }

  // numberWarning(props) {
  //   if (this.state.value.match(/\d+/g)) {
  //     return <h1>No Numbers Allowed</h1>;
  //   }
  // }
  //
  // wordWarning(props) {
  //   if (this.state.value.match(/\d+/g)) {
  //     return <h1>Minimum of 5 word required</h1>;
  //   }
  // }
  //
  // warning(props) {
  // const numWarning = props.numWarning;
  // const wordWarning = props.wordWarning;
  //   if (numWarning) {
  //      <numberWarning />;
  //   }
  //
  //   if (wordWarning) {
  //      <wordWarning />;
  //   }
  // }

  // onRestriction(value){
  //
  // }

  render() {
    const {value} = this.state
    return (
      <div className="app row">
        <Header />
        <div className="warning" >{value}</div>
        <Input {...this.state}
          onUpdate={this.onUpdate}
          onClear={this.onClear}
        />
        <Counter {...this.state}/>
        <Table {...this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
