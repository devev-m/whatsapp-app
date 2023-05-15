import React from 'react';
import s from './phone-input-form.module.scss';

export const PhoneInputForm = ({ phoneNumber, handleSubmitFormPhone, handleChangePhone }) => {
  return (
    <form
      className={s.form}
      onSubmit={handleSubmitFormPhone}>
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
  );
};
