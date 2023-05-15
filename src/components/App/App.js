import React, { useState } from 'react';
import s from './app.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
import { Chat } from '../Chat/Chat';

const App = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const handleFormSubmit = (idInstance, apiTokenInstance) => {
    setIdInstance(idInstance.trim());
    setApiTokenInstance(apiTokenInstance.trim());
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>WhatsApp App</h1>

      {idInstance || apiTokenInstance ? (
        <Chat
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
        />
      ) : (
        <LoginForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
