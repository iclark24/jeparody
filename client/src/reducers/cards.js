import axios from 'axios'

const CARDS = 'CARDs'
const ADD_CARD = 'ADD_CARD'
const UPDATE_CARD = 'UPDATER_CARD'
const DELETE_CARD = 'DELETE_CARD'

// REDUX ACTIONS.

export const getCards = (category) => {
  return (dispatch) => {
    axios.get(`/api/jcards/${category}`)
      .then( res => dispatch({ type: CARDS, cards: res.data }))
  }
}

export const addCard = (jcard) => {
  return (dispatch) => {
    axios.post('/api/jcards', {jcard})
      .then( res => dispatch({ type: ADD_CARD, card: res.data }))
  }
}

export const updateCard = (jcard) => {
  return (dispatch) => {
    axios.put(`/api/jcards/${jcard.id}`, {jcard})
      .then( res => dispatch({ type: UPDATE_CARD, card: res.data }))
  }
}

export const deleteCard = (id) => {
  return (dispatch) => {
    axios.delete(`/api/jcards/${id}`)
      .then( () => dispatch({ type: DELETE_CARD, id }))
  }
}



//REDUX REDUCER

export default (state = [], action) => {
  switch(action.type) {
    case CARDS:
      return action.cards
    case ADD_CARD:
      return [action.card, ...state]
    case UPDATE_CARD:
      return state.map( c => {
        if (c.id === action.card.id)
          return action.card
        return c
      })
    case DELETE_CARD:
      return state.filter( c => c.id !== action.id)

    default:
      return state
  }
}