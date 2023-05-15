import React, { useState } from 'react';
import axios from 'axios';
import s from './receive-message-form.module.scss';

export const ReceiveMessageForm = ({ idInstance, apiTokenInstance }) => {
  const [messages, setMessages] = useState([]);

  const receiveUrl = `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`;

  async function getMessages() {
    await axios
      .get(receiveUrl)
      .then((response) => {
        setMessages((prevMessages) => [...prevMessages]);
        const receiptId = response.data.receiptId;
        const deleteUrl = `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`;

        return axios.delete(deleteUrl);
      })
      .catch((error) => {
        console.error('Ошибка: ', error);
      });
  }

  getMessages();

  return (
    <div className={s.inner}>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      ) : (
        <p>Нет полученных сообщений</p>
      )}
    </div>
  );
};
