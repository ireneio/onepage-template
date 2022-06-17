import store from '..';

interface LayoutState {
  navigation: {
    path: string;
  };
  snackbar: {
    title: string;
    text: string;
    show: boolean;
    timeoutId: NodeJS.Timeout | null;
  };
  header: {
    style: string;
    item: string;
  };
}

const initialState: LayoutState = {
  navigation: {
    path: '',
  },
  snackbar: {
    title: 'Alert',
    text: '',
    show: false,
    timeoutId: null,
  },
  header: {
    style: 'dark',
    item: '#entry',
  },
};

type Action =
  | {
      type: 'SET_NAVIGATION_PATH';
      payload: string;
    }
  | {
      type: 'SHOW_SNACKBAR';
      payload: { title: string; text: string };
    }
  | {
      type: 'CLOSE_SNACKBAR';
    }
  | {
      type: 'SET_HEADER_STYLE';
      payload: 'light' | 'dark';
    }
  | {
      type: 'SET_HEADER_ITEM';
      payload: string;
    }
  | {
      type: 'INIT_HEADER';
    };

export default function layoutReducer(
  state: LayoutState = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'SET_NAVIGATION_PATH':
      return {
        ...state,
        navigation: {
          path: action.payload,
        },
      };
    case 'SHOW_SNACKBAR':
      if (state.snackbar.timeoutId) {
        clearTimeout(state.snackbar.timeoutId);
      }
      const tid = setTimeout(() => {
        clearTimeout(tid);
        store.dispatch({ type: 'CLOSE_SNACKBAR' });
      }, 2500);

      return {
        ...state,
        snackbar: {
          text: action.payload.text,
          title: action.payload.title,
          show: true,
          timeoutId: tid,
        },
      };
    case 'CLOSE_SNACKBAR':
      if (state.snackbar.timeoutId) {
        clearTimeout(state.snackbar.timeoutId);
      }
      return {
        ...state,
        snackbar: {
          title: '',
          text: '',
          show: false,
          timeoutId: null,
        },
      };
    case 'SET_HEADER_STYLE':
      window.localStorage.setItem('header_style', action.payload);
      return {
        ...state,
        header: {
          ...state.header,
          style: action.payload,
        },
      };
    case 'SET_HEADER_ITEM':
      window.localStorage.setItem('header_item', action.payload);
      return {
        ...state,
        header: {
          ...state.header,
          item: action.payload,
        },
      };
    case 'INIT_HEADER':
      const item = window.localStorage.getItem('header_item');
      const style = window.localStorage.getItem('header_style');
      let _item = '#entry';
      let _style = 'light';
      if (item) {
        _item = item;
      }
      if (style) {
        _style = style;
      }
      return {
        ...state,
        header: {
          ...state.header,
          item: _item,
          style: _style,
        },
      };
    default:
      return state;
  }
}
