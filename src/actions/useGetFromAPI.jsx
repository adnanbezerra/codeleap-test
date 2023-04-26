import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function usePostToAPI() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get(`${API_URL}/careers/`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
      
  }, []);

  return { data, error };
}

export default usePostToAPI;
