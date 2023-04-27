import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function usePatchToAPI(objectId, requestData) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setLoading(true);

    axios.post(`${API_URL}/carrers/${objectId}/`, requestData)
      .then(reponse => {
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });

  }, [requestData]);

  return { loading, error };
}

export default usePatchToAPI;
