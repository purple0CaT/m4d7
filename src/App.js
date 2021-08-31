import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import Library from './components/Library'
function App() {
  return (
    <>
    <MyNav />
    <MyJumbotron />
    <Library/>
    <MyFooter />
    </>
  );
}

export default App;
