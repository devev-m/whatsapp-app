import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import s from './send-message-form.module.scss';

export const SendMessageForm = ({ phoneNumber, idInstance, apiTokenInstance }) => {
  const [messageText, setMessageText] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const messageTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSubmitFormMessage = async (event) => {
    event.preventDefault();

    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    const body = {
      chatId: `${phoneNumber}@c.us`,
      message: `${messageText}`,
    };

    axios
      .post(url, body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setMessageText('');
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmitFormMessage}>
      <input
        className={s.input}
        type="text"
        ref={inputRef}
        placeholder="Введите сообщение"
        value={messageText}
        onChange={messageTextChange}
      />
      <button
        className={s.button}
        type="submit">
        Отправить
      </button>
    </form>
  );
};
