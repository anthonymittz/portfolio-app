function Error({ statusCode }) {
  return (
    <div>
      {
        statusCode
          ? `An error ${statusCode} occured on server`
          : `An error occured in client`
      }
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}