//依赖
import React from 'react'
import ReactDOM from 'react-dom'
import{HashRouter,Switch,Route} from 'react-router-dom'
import { Provider } from "react-redux";
//组件
import Login from './container/login/login'
import Register from './container/register/register'
import Main from './container/main/main'
import store from './redux/store'

// ReactDOM.render((
//   <Provider store={store}>
//     <HashRouter>
//       <Switch>
//         <Route path='/login' component={Login}/>
//         <Route path='/register' component={Register}/>
//         <Route component={Main}/>{/*默认组件*/}
//       </Switch>
//     </HashRouter>
//   </Provider>
// ), document.getElementById('root'))
ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>
),document.getElementById('root'))
