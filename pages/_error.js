export default function Error({ statusCode }) {
  return (
    <div>
      {
        statusCode
          ? `[Next._error] An error ${statusCode} has occured on the server`
          : `[Next._error] An error has occured on the client side`
      }
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  console.log('[Client._error] Error: ', res.statusCode);

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}