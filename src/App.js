import './App.css';
import Body1 from './Components/Body1';
import Body2 from './Components/Body2';
import Body3 from './Components/Body3';
// import Footer from './Components/footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<><div className='App'>
                <div className="compo">
                  <div className="Body1"><Body1 /></div>
                </div>
              </div></>}>
          </Route>
          <Route path='/parameters'
            element={<><div className='App'>
                <div className="compo">
                  <div className="Body2"><Body2 /></div>
                </div>
              </div></>}>
          </Route>
          <Route path='/dataset'
            element={<><div className='App'>
                <div className="compo">
                  <div className="Body3"><Body3 /></div>
                </div>
              </div></>}>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
