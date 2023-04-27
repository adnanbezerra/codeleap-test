import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function useGetFromAPI() {
  const [data, setData] = useState([{}]);
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

export default useGetFromAPI;
