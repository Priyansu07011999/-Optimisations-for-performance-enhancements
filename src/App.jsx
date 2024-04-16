import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleOrderHandler = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder);
  }, []);

  const listItems = useMemo(() => [1, 3, 5, 9, 10], []);

  const sortedItems = useMemo(() => {
    return ascendingOrder ? [...listItems].sort((a, b) => a - b) : [...listItems].sort((a, b) => b - a);
  }, [listItems, ascendingOrder]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        {ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order'}
      </Button>
    </div>
  );
}

export default App;
