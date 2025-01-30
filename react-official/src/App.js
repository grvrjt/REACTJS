import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import MyButton from './components/MyButton';
import Gallery from './components/Gallery';
import Profile from './components/Files/Profile';
import ProfileOne from './components/ProfileOne';
import Filter from './components/Filter';
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
      <Counter />
      <Counter />
      <h1>Profile file </h1>
      <Profile />
      <h1>From Gallery component</h1>
      <Gallery />
      <Gallery />
      <ProfileOne/>
      <Filter/>
    </div>
  );
}

export default App;
