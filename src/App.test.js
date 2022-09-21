import { render, screen } from '@testing-library/react';
import App from './App';
import GithubCard from './GitHubCard';
import button from './button'

import renderer from 'react-test-renderer'
import ColorButton from './button';

// test('renders a snapshot',()=>{
//   const tree = renderer.create(<App/>).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('renders a snap shot of GitHubCard',()=>{
  const hub = renderer.create(<GithubCard/>).toJSON()
  expect(hub).toMatchSnapshot
})

test('renders a snap shot of button',()=>{
  const butt = renderer.create(<ColorButton/>).toJSON()
  expect(butt).toMatchSnapshot()
})