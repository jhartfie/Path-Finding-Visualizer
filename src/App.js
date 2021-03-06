import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Search/Search';
import Sort from './Sort/Sort';

export const CELLS_PER_ROW = 50;
export const CELLS_PER_COL = 50;

class App extends React.Component {

  state = {
    screen: "search"
  }

  componentDidMount(){

  }

  changeScreen = () => {
    this.setState({
      ...this.state,
      screen: (this.state.screen === "search") ? "sort" : "search"
    })
  }

  render() {
    return (
      <div>
        {(this.state.screen === "search") ? <Search change_screen={() => this.changeScreen() }/> : <Sort change_screen={() => this.changeScreen() }/>}
      </div>
    );
  }
}


export default App;
