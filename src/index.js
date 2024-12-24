import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from "./HemisphereDisplay";


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

class App extends Component {

  state = { latitude: null, errorMessage: '' };

  // This gets rendered once the component finished loading up on the screen
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // This gets called any time this.setState is called
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
      return <div><HemisphereDisplay latitude={this.state.latitude} /></div>
    } else {
      return <div>Loading...</div>
    }
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);