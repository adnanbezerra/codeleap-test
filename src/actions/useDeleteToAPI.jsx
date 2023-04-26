import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function useDeleteToAPI(objectId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setLoading(true);

    axios.post(`${API_URL}/carrers/${objectId}/`, )
      .then(reponse => {
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });

  }, []);

  return { loading, error };
}

export default useDeleteToAPI;
