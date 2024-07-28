import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/store';


import EditWidget from './features/widget/editWidget';
import WidgetPages from './features/widget/widgetPages';
import CreateWidget from './features/widget/editWidget';
import CreatePage from './features/pages/editPage';
import PageList from './features/pages/pageList';

//import EditPage from './features/pages/editPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/widget" element={<WidgetPages />} />
          <Route path="/widget/create" element={<CreateWidget />} />
          <Route path="/widget/edit/:id" element={<EditWidget />} />
          <Route path="/pages/edit/:id" element={<CreatePage />} />
          <Route path="/pages/create" element={<CreatePage />} />
          <Route path="/pages" element={<PageList />} />
          <Route path="/" element={<PageList />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;