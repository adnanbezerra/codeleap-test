import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function usePatchToAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function patchToApi(objectId, requestData) {
    setLoading(true);

    axios.post(`${API_URL}/carrers/${objectId}/`, requestData)
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });

  }

  return { loading, error, patchToApi };
}

export default usePatchToAPI;
