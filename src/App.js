import { Provider } from 'react-redux';
import store        from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/Homepage/HomePage.component';
import Header   from './components/Header/Header.component';


function App() {
  return (
   <Router>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Provider>

   </Router>
  );
}

export default App;
