import React from 'react';
import { connect, } from 'react-redux'
import { updateCategory, addCategory, } from '../reducers/categories'
import { Form, Header} from 'semantic-ui-react';

class CategoryForm extends React.Component {
  initialState = { 
    title: '', 
  };

  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id) 
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const category = { ...this.state, };
    const {  dispatch, } = this.props;
    const func = this.props.id ? updateCategory : addCategory;
    dispatch(func(category));
    this.props.history.push("/categories")

  }

  render() {
    const { title, } = this.props;

    return (
      <div>
        <Header textAlign="center">Category</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name="title"
            required
            defaultValue={title}
            onChange={this.handleChange}
            label="Title"
            />
          <Form.Button>Save</Form.Button>
        </Form>
      </div>
    )
  }
}

export default connect()(CategoryForm);