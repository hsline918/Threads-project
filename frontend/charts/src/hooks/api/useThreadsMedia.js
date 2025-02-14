// hooks/useThreadsMedia.js
import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../config/endpoints";

export const useThreadsMedia = (options = {}) => {
  const [mediaObjects, setMediaObjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(ENDPOINTS.MEDIA_OBJECTS);
        const data = await response.json();
        setMediaObjects(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { mediaObjects, loading, error };
};
