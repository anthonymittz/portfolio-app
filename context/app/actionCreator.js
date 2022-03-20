import actions from './actionTypes'
// import api from '../../app/api/api'

export default function ActionCreator(dispatch) {
  this.dispatch = dispatch;

  this.app = {
    fetchInitialState: async () => {
      try {
        // const res = await api.app.fetchInitialState();
        // dispatch({type: actions.setInitialState, payload: res})
      } catch (error) {
        dispatch({type: actions.failedToSetInitialState})
      }
    }
  }

  this.drawer = {
    toggle: () => dispatch({type: actions.toggleDrawer}),
    open: () => dispatch({type: actions.openDrawer}),
    close: () => dispatch({type: actions.closeDrawer}),
  }

  this.alert = {
    show: message => dispatch({type: actions.addAlert, payload: message}),
    hide: id => dispatch({type: actions.removeAlert, payload: id}),
  }
}