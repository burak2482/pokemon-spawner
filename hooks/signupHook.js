import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(null)

  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password) => {
    setisLoading(true)
    setError(null)

    const response = await axios.post('http://localhost:5000/user/signup', {
      email,
      password
    });

    

    const json = await response.data

    if (response.status >= 200 && response.status < 300) {
      if (json && json._id) {
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

  return {signup, isLoading, error}
}