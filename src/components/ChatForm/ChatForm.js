import React, { useState } from 'react';

import { ReceiveMessageForm } from '../ReceiveMessageForm/ReceiveMessageForm';
import { SendMessageForm } from '../SendMessageForm/SendMessageForm';

export const ChatForm = ({ idInstance, apiTokenInstance }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleSubmitFormPhone = (e) => {
    e.preventDefault();
    setIsChatVisible(true);
    setPhoneNumber('');
  };

  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmitFormPhone}>
        <input
          type="text"
          placeholder="Введите номер телефона получателя"
          value={phoneNumber}
          onChange={handleChangePhone}
        />
        <button type="submit">Создать</button>
      </form>
      {isChatVisible && (
        <>
          <SendMessageForm
            idInstance={idInstance}
            apiTokenInstance={apiTokenInstance}
            phoneNumber={phoneNumber}
          />
          <ReceiveMessageForm
            idInstance={idInstance}
            apiTokenInstance={apiTokenInstance}
          />
        </>
      )}
    </>
  );
};
