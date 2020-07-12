import { useState, useEffect, useRef } from 'react';


export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true, erro: null });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setState({
      error: null,
      loading: true,
      data: null
    });
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        // console.log('data', data);
        if (isMounted.current) {
          setState({
            error: null,
            loading: false,
            data
          });
        }
      });
  }, [url]);
  return state;
};
