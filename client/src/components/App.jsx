import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <div>HELLO WORLD</div>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
