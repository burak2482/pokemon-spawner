import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(null)

  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setisLoading(true)
    setError(null)

    const response = await axios.post('http://localhost:5000/user/login', {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.data

    if (response.status >= 200 && response.status < 300) {
      if (json && json.email && json.token) {
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
      } else {
        setError('User data is incomplete');
      }      
      setisLoading(false);
    } else {
      setisLoading(false);
      setError(json.error);
    }
    
  }

  return {login, isLoading, error}
}