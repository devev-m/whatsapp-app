import React, { useState } from 'react';
import s from './app.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { ChatForm } from '../ChatForm/ChatForm';

const App = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const handleFormSubmit = (idInstance, apiTokenInstance) => {
    setIdInstance(idInstance);
    setApiTokenInstance(apiTokenInstance);
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>WhatsApp App</h1>

      {idInstance || apiTokenInstance ? <ChatForm /> : <LoginForm onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default App;
