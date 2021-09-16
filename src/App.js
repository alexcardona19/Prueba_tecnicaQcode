import React from 'react';
import Value from './Components/Value';
import List from './Components/List';
class App extends React.Component {
  state = {
    data: []
  }

  handleSubmit = (newVal) => {
    
    this.setState({ data: [...this.state.data, newVal] })

  }

  componentDidUpdate() {
    localStorage.setItem('dataStore', JSON.stringify(this.state.data))
  }

  componentDidMount() {
    const dataStore = JSON.parse(localStorage.getItem('dataStore'));
    if (dataStore != null) {
      this.setState({ data: dataStore });
    }
  }
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <h1>formulario</h1>
        <Value onSubmit={this.handleSubmit} />
        <List todo={data} />
      </div>
    );
  };
}
export default App;
