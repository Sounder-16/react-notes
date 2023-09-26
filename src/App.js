import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { DataProvider } from './context/DataContext';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="React Icons"/>
        <Main />
        <Footer />
      </DataProvider>
    </div>
  );
}
export default App;