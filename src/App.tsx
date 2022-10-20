import { useState } from 'react';
import './App.css';
import {
  Challenge1,
  Challenge2,
  Challenge3,
  Challenge4,
  Congrats
} from './screens';

function App() {
  const [screenIndex, setScreenIndex] = useState<1 | 2 | 3 | 4 | 5>(1);

  const handleChangeToScreeen = (to: 1 | 2 | 3 | 4 | 5) => () => {
    setScreenIndex(to);
  };
  const screens = {
    1: <Challenge1 onSubmit={handleChangeToScreeen(2)} />,
    2: <Challenge2 onSubmit={handleChangeToScreeen(3)} />,
    3: <Challenge3 onSubmit={handleChangeToScreeen(4)} />,
    4: <Challenge4 onSubmit={handleChangeToScreeen(5)} />,
    5: <Congrats />
  };

  return screens[screenIndex];
}

export default App;
