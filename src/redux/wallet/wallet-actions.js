import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('wallet/openModal');
const closeModal = createAction('wallet/closeModal');
const ModalLogout = createAction('wallet/modalLogout');

// eslint-disable-next-line import/no-anonymous-default-export
export { ModalLogout, openModal, closeModal };
