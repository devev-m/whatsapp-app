import React, { useState } from 'react';
import s from './chat.module.scss';

import { PhoneInputForm } from '../PhoneInputForm/PhoneInputForm';
import { SendReseiveMessageForm } from '../SendReseiveMessageForm/SendReseiveMessageForm';

export const Chat = ({ idInstance, apiTokenInstance }) => {
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
        <PhoneInputForm
          phoneNumber={phoneNumber}
          handleSubmitFormPhone={handleSubmitFormPhone}
          handleChangePhone={handleChangePhone}
        />
      ) : (
        <SendReseiveMessageForm
          phoneNumber={phoneNumber}
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
        />
      )}
    </div>
  );
};
