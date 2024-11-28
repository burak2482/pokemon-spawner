import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/user/signup', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);

      const json = response.data;

      if (response.status >= 200 && response.status < 300) {
        if (json && json.email && json.token) {
          localStorage.setItem('user', JSON.stringify(json));
          dispatch({ type: 'LOGIN', payload: json });
        } else {
          setError('User data is incomplete');
        }
      } else {
        setError(json.error || 'There is a error while signup');
      }
    } catch (error) {
      if (error.response) {
        console.log('Error:', error.response.data.error);
        setError(error.response.data.error || 'A mistake happened');
      } else if (error.request) {
        console.log('There is no request:', error.request);
        setError('There is no request in the server');
      } else {
        console.log('Axios Error:', error.message);
        setError('A mistake happened');
      }
    }
     finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
