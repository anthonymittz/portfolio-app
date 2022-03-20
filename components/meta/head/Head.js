import HTTPHead from 'next/head'

export default function Head({title = "Web Application"}) {
  return <HTTPHead>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
  </HTTPHead>
}