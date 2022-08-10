import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import './css/App.css';
import TodoApp from './pages/todoApp';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <main className="App-content">
        <Nav />
        <section>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
