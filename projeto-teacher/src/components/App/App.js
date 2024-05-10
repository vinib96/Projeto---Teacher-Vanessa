import { Route, Switch, withRouter, useHistory } from 'react-router';
import Main from '../Main/Main';
import Header from '../Header/Header';
function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
export default App;
