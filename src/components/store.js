
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../redux/reducer/rootReducer'
import createMiddlewareSaga from 'redux-saga';
import rootSaga from '../redux/saga/rootSaga'


const sagaMiddleware = createMiddlewareSaga();

const store =compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

(createStore)(rootReducer);


 sagaMiddleware.run(rootSaga);




export default store;