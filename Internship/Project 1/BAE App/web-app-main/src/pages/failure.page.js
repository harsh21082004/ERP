import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FailurePage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Retrieve error message from query parameter
    const { message } = router.query;
    if (message) {
      setErrorMessage(message);
    }
  }, [router.query]);

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default FailurePage;
