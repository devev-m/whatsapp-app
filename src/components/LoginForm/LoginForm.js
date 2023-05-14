import React, { useState } from 'react';
import s from './login-form.module.scss';

export const LoginForm = ({ onSubmit }) => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(idInstance, apiTokenInstance);
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      <label className={s.label}>
        <span>Введите idInstance:</span>
        <input
          className={s.input}
          type="text"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
        />
      </label>
      <label className={s.label}>
        <span>Введите apiTokenInstance:</span>
        <input
          className={s.input}
          type="text"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
        />
      </label>
      <button
        className={s.button}
        type="submit"
      >
        Сохранить
      </button>
    </form>
  );
};
