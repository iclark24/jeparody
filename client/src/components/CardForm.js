import React from 'react';
import { connect, } from 'react-redux'
import { updateCard, addCard, } from '../reducers/cards'
import { Form, Header, Container} from 'semantic-ui-react';
import {getCategories} from "../reducers/categories"

class CardForm extends React.Component {
  initialState = { 
    question: '', 
    points: 0, 
    category_id: '',
  };

  state = {...this.initialState};

  componentDidMount() {
    this.props.dispatch(getCategories())
    if (this.props.id) 
      this.setState({ ...this.props, });
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, })


  handleSubmit = (e) => {
    e.preventDefault();
    const card = { ...this.state, };
    const {  dispatch, } = this.props;
    const func = this.props.id ? updateCard : addCard;
    dispatch(func(card));
    this.props.history.push("/categories")

  }



  render() {
    const { question, points, category_id } = this.props;
    
    return (
      <Container>
        <Header textAlign="center">Card</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="question"
            required
            defaultValue={question}
            onChange={this.handleChange}
            label="question"
            />
          <Form.Input
            name="points"
            type="number"
            required
            defaultValue={points}
            onChange={this.handleChange}
            label="points"
            />
          <Form.Select
            label="category_id"
            name="category_id"
            value={category_id}
            onChange={this.handleChange}
            options={createOptions(this.props.categories)}
            />
          <Form.Button>Save</Form.Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

function createOptions(categories){
  const selections = categories.map( category => {
  const key = category.id
    const text = category.title
    const value = category.id
    const option = {key, text, value}
    return option
  })
  return selections
}

export default connect(mapStateToProps)(CardForm);