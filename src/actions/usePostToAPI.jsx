import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function usePostToAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function postToApi(requestData) {
    setLoading(true);

    axios.post(`${API_URL}/carrers/`, requestData)
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
    }

  return { loading, error, postToApi };
}

export default usePostToAPI;
