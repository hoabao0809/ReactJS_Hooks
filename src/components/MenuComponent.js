import React, { useRef, useReducer, useState, createContext } from 'react';
import { Content } from './content/Content';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function MenuComponent() {
  const getContext = useContext(ThemeContext);

  return (
    <>
      <div className="container">
        <button onClick={getContext.handleToggle}>Toggle</button>
        <Content />
      </div>
    </>
  );
}
