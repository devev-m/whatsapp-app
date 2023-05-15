import React from 'react';
import s from './send-receive-message-form.module.scss';

import { ReceiveMessageForm } from './ReceiveMessageForm/ReceiveMessageForm';
import { SendMessageForm } from './SendMessageForm/SendMessageForm';

export const SendReseiveMessageForm = ({ phoneNumber, idInstance, apiTokenInstance }) => {
  return (
    <div className={s.inner}>
      <div className={s.navigation}>
        <h4 className={s.title}>"{phoneNumber}"</h4>
      </div>
      <div className={s.messages}>
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
    </div>
  );
};
