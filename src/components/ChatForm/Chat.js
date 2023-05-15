import React, { useState } from 'react';
import s from './chat-form.module.scss';

import { ReceiveMessageForm } from '../ReceiveMessageForm/ReceiveMessageForm';
import { SendMessageForm } from '../SendReseiveMessageForm/SendMessageForm/SendMessageForm';

export const ChatForm = ({ idInstance, apiTokenInstance }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleSubmitFormPhone = (e) => {
    e.preventDefault();
    setIsChatVisible(true);
  };

  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={s.inner}>
      {!isChatVisible ? (
        <form onSubmit={handleSubmitFormPhone}>
          <label>
            <h4 className={s.title}>Введите номер телефона получателя в формате 7xxxxxxxxxx"</h4>
            <input
              className={s.input}
              type="text"
              value={phoneNumber}
              onChange={handleChangePhone}
            />
          </label>
          <button
            className={s.button}
            type="submit">
            Добавить
          </button>
        </form>
      ) : (
        <div>
          <h4 className={s.title}>"{phoneNumber}"</h4>
          <ReceiveMessageForm
            idInstance={idInstance}
            apiTokenInstance={apiTokenInstance}
          />
          <SendMessageForm
            idInstance={idInstance}
            apiTokenInstance={apiTokenInstance}
            phoneNumber={phoneNumber}
          />
        </div>
      )}
    </div>
  );
};
