import React from 'react';
import CustomNotify from './NotificationMessage.styled';

const NotificationMessage = ({ message }) => {
  return <CustomNotify>{message}</CustomNotify>;
};

export default NotificationMessage;
