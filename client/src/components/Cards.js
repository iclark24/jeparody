import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getCards, deleteCard, } from '../reducers/cards';
import { Button, Header, Card, Icon, Grid } from 'semantic-ui-react';


class Cards extends React.Component {
  state ={
    editing: false
  }

  componentDidMount() {
    this.props.dispatch(getCards(this.props.category.id))
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  handleDelete = (id) => {
    const { dispatch, history: { push, }, } = this.props;
    dispatch(deleteCard(id));
    push("/categories");
  }

  cards = () => {
    return this.props.cards.map( card =>
      <Card textAlign="center" key={ card.id }>
        {card.question}
        {this.state.editing ?
        <Button icon size="mini" color="red" onClick={() => this.handleDelete(card.id)}>
          <Icon name="trash"/>
        </Button>
        :
        <div></div>
        }
      </Card>
    )
  }

  // category = () => {
  //   return this.props.cards.map (category =>
  //     <Grid.Column textAlign="center" key={category.id}>
  //     </Grid.Column>
  //     )
  // }

  render() {
    debugger
    return (
      <div>
      {/* <Button color="orange" onClick={this.toggleEdit}>
        Toggle Edit
      </Button> */}
      hellow
                { this.cards() }

      </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { cards: state.cards, };
  }

export default connect(mapStateToProps)(Cards);