import Error from 'next/error';

function ErrorPage({ statusCode }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return <p>{'Something went wrong. Please reload the page.'}</p>;
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
