import React from 'react';
import ReactDOM from 'react-dom';


// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );
//
//   return (
//     <div>
//       latitude:
//     </div>
//   )
// }

class App extends React.Component {

  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    console.log('*** componentDidMount, Good place to data loading');
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('*** componentDidUpdate, Good place to do more data loading when state/props change.')
  }

  componentWillUnmount() {
      console.log('Component will unmount, Good place to clean up resources');
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div>{this.state.latitude}</div>
    } else {
      return <div>Loading...</div>
    }
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);