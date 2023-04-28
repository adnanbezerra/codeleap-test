import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function useDeleteToAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function deleteToApi(objectId) {
    setLoading(true);

    axios.post(`${API_URL}/carrers/${objectId}/`, )
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });

  }

  return { loading, error, deleteToApi };
}

export default useDeleteToAPI;
