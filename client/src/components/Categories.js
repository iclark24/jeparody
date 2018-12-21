import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getCategories, deleteCategory, } from '../reducers/categories';
import { getCards, deleteCard, } from '../reducers/cards';

import { Button, Header, Table, Icon, Grid } from 'semantic-ui-react';
import Cards from "./Cards"


class Categories extends React.Component {
  state ={
    editing: false
  }

  componentDidMount() {
    this.props.dispatch(getCategories())

  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  handleDelete = (id) => {
    const { dispatch, history: { push, }, } = this.props;
    dispatch(deleteCategory(id));
    push("/categories");
  }

  categories = () => {
    return this.props.categories.map( category =>
      <Table.HeaderCell textAlign="center" key={ category.id }>
        {category.title}
        {this.state.editing ?
        <Button icon size="mini" color="red" onClick={() => this.handleDelete(category.id)}>
          <Icon name="trash"/>
        </Button>
        :
        <div></div>
        }
      </Table.HeaderCell>
    )
  }

  category = () => {
    this.props.dispatch(getCards(this.props.category.id))
    return this.props.categories.map (category =>

      <Grid.Column textAlign="center" key={category.id}>
        <Cards category={category}/>
      </Grid.Column>
      )
  }

  render() {
    return (
      <div>
      <Button color="orange" onClick={this.toggleEdit}>
        Toggle Edit
      </Button>
        <Header as="h3" textAlign="center">Categories</Header>
        <Table celled>
            <Table.Header>
              <Table.Row>
                { this.categories() }
              </Table.Row>
            </Table.Header>
          </Table>
            <Grid columns="4">
              {this.category}
            </Grid>
      </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { categories: state.categories, };
  }

export default connect(mapStateToProps)(Categories);