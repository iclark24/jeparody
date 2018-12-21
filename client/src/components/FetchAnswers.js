import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';
import Categories from './Categories';
import { getCategories, } from '../reducers/categories';
import CategoryForm from "./CategoryForm"

import { Container, Segment, Dimmer, } from 'semantic-ui-react';

class FetchCategories extends React.Component {
  state = { loaded: false, };

  componentDidMount() {
    this.props.dispatch(getCategories(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  render() {
    const { loaded, } = this.state;

      return (
        <Container>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/new" component={CategoryForm}/>
        </Container>
      )
    
    
  }
}

export default connect()(FetchCategories);