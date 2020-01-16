import React from 'react';
import ReactDom from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import {render, cleanup} from '@testing-library/react'
import SearchField from './components/SearchField';

afterEach(cleanup);

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDom.render(<SearchField />,div)
})

it("renders search field correctly", ()=>{
  const {getByTestId} = render(<SearchField />)
  expect(getByTestId("gifsearcher").value).toEqual("")
})