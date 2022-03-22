export default function Error({ statusCode }) {
  return (
    <div>
      {
        statusCode
          ? `[Next._error] An error ${statusCode} occured on server`
          : `[Next._error] An error occured in client`
      }
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  console.log('[Next._error] Error: ', res.statusCode);
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}