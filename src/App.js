import { Provider } from 'react-redux';
import store        from './store';


function App() {
  return (
   <div>
     <Provider store={store}>
       <h1>Proyectos</h1>
     </Provider>
   </div>
  );
}

export default App;
