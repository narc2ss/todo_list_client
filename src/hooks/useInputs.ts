import React, { useCallback, useState } from 'react';

function useInputs<T>(initialState: T) {
  const [inputs, setInputs] = useState(initialState);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  return [inputs, onChange] as [T, () => void];
}

export default useInputs;
