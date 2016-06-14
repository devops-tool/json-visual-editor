
import SampleJson   from 'raw!../samples/simple.json';

const initialState =  {
  data: null,
  text: '',
  autoFormat: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case 'UPDATE_DATA':
    return Object.assign({}, state, {
      data: action.newData
    });

  case 'SET_TEXT': {
    let text = action.newText || ''
    let data = state.data
    if (text.length > 0) {
      try {
        // set data
        data = JSON.parse(text);
        // format
        if (state.autoFormat) {
          text = JSON.stringify(data, null, 2);
        }
      } catch(e) {
        data = null
      }
    }
    else {
      data = null
    }
    // return new state
    return Object.assign({}, state, {
      text: text,
      data: data
    });
  }

  case 'UPDATE_TEXT': {
    return Object.assign({}, state, {
      text: action.newText
    });
  }

  case 'CLEAR_TEXT':
    return Object.assign({}, state, {
      text: '',
      data: null
    });

  case 'COPY_TEXT':
    return state;

  case 'PASTE_SAMPLE':
    return Object.assign({}, state, {
      text: SampleJson,
      data: JSON.parse(SampleJson)
    })

  case 'SET_AUTO_FORMAT':
    return Object.assign({}, state, {
      autoFormat: action.enabled
    });

  default:
    return state;
  }
}

export default reducer
