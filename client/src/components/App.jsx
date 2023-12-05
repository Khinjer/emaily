import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Route path="/" exact>
          <div>HELLO WORLD</div>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
