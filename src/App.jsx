import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Root } from './components/Root';
import { Home } from './components/homepage/Home';
import { SocialPostContainer } from './features/SocialPostContainer';
import { DraftPostContainer } from './features/social_posts/DraftPostContainer';
import { SocialPostHashtagsContainer } from './features/social_posts_hashtags/SocialPostHashtagsContainer';
import { DraftPostHashtagsContainer } from './features/social_posts_hashtags/DraftPostHashtagsContainer';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home />} />
      <Route path='social-post-emojis' element={<SocialPostContainer />} />
      <Route path='social-post-emojis/demo' element={ <DraftPostContainer /> } />
      {/*<Route path='demo' element={ <DraftPostContainer /> } />*/}
      <Route path='social-post-hashtags' element={<SocialPostHashtagsContainer />}/>
      <Route path='social-post-hashtags/demo' element={<DraftPostHashtagsContainer />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
