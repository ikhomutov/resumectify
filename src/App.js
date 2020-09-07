import React from 'react';
import ReactGA from 'react-ga';
import yaml from 'js-yaml';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Loader from './components/Loader';
import Resume from './Resume';

import { theme } from './theme';
import { googleAnalytics, resumeUrl } from './config';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      data: null,
    };
    if (googleAnalytics) {
      ReactGA.initialize(googleAnalytics);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  onYamlRead(doc) {
    const requiredFields = ['name', 'title', 'contacts'];
    const fieldMissing = [];

    requiredFields.forEach((field) => {
      if (!(field in doc)) {
        fieldMissing.push(field)
      }
    });

    if (fieldMissing.length) {
      this.setState({
        isLoading: false,
        error: `Following fields are required: ${fieldMissing.join(', ')}`,
      })
    } else {
      this.setState({
        isLoading: false,
        data: doc
      })
    }
  }

  componentDidMount() {
    fetch(resumeUrl)
      .then(response => {
        return response.text()})
      .then(function(data) {
        const doc = yaml.safeLoad(data);
        this.onYamlRead(doc)}.bind(this))
      .catch(function(error) {
        console.log('failed to load yaml', error.stack);
        this.setState({isLoading: false, isError: true})
      }.bind(this))
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Loader />
      )
    } else if (this.state.error) {
      return <div>{this.state.error}</div>
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Resume data={this.state.data}/>
        </ThemeProvider>
      )
    }
  };
}

export default App;
