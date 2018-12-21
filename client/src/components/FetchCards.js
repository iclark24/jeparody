import React from 'react';
import { connect, } from 'react-redux';
import { getCards, } from '../reducers/cards';

import { Container, Segment, Dimmer, } from 'semantic-ui-react';

class FetchCards extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCards());
  }

  render() {

      return (
          <div></div>
      )
    
    
  }
}

export default connect()(FetchCards);