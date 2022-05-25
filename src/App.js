import { Provider }     from 'react-redux';
import store            from './store';
import { 
  BrowserRouter as Router, Route, Routes 
}                               from 'react-router-dom'
import HomePage                 from './components/Homepage/HomePage.component';
import Header                   from './components/Header/Header.component';
import SecondSection            from './components/Sections/SectionTwo.component';
import ThirdSection             from './components/Sections/SectionThird.component';
import FourSectionDatetime      from './components/Sections/SectionFourDatetime.component';
import InitReport               from './components/Report/InitReport.component';
import MyReports                from './components/Report/MyReports.component';
import ViewReport               from './components/Report/ViewReport.component';


function App() {
  return (
   <Router>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/'                         element={<HomePage/>} />
          <Route path='/second_section'           element={<SecondSection/>} />
          <Route path='/third_section'            element={<ThirdSection/>} />
          <Route path='/four_section_datetime'    element={<FourSectionDatetime/>} />
          <Route path='/create_report'            element={<InitReport/>} />
          <Route path='/my_reports'               element={<MyReports/>} />
          <Route path='/view_report'              element={<ViewReport/>} />
        </Routes>
      </Provider>

   </Router>
  );
}

export default App;
