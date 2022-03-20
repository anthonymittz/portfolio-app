import actions from './actionTypes'

export default function reducer(state, action) {
  switch(action.type) {
    
    /* App */
    case actions.setInitialState:
      return {...state, blog: {...state.blog, categories: action.payload, isFetched: true}};
    case actions.failedToSetInitialState:
      return {...state, blog: {...state.blog, isFetched: false} }

    /* Drawer */
    case actions.openDrawer:
      return {...state, drawerVisible: true};
    case actions.closeDrawer:
      return {...state, drawerVisible: false};
    case actions.toggleDrawer:
      return {...state, drawerVisible: !state.drawerVisible};

    /* Alerts */
    case actions.addAlert:
      return {...state, alerts: [...state.alerts, action.payload]};
    case actions.removeAlert:
      return {...state, alerts: state.alerts.filter(a => a.id !== action.payload)};

    /* Default */
    default:
      return state;
  }
}