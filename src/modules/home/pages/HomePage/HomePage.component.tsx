import React, { FunctionComponent, useEffect, useState } from 'react';
import { API } from '../../../../utils/api';

export const HomePage: FunctionComponent = () => {
  const [user, setUser] = useState();
  const fetchUsers = async () => {
    const res = await API.get(`/users`, 'admin');
  };
  // Fetch the users once, after the first render
  useEffect(() => {
    if (!user) {
      fetchUsers();
    }
  }, []);

  return <div>home</div>;
};
