import Link from 'next/link'
import { useRouter } from 'next/router'
import { loadComments } from '../../lib/api'

export default function Comments({ comments }) {
  const { asPath } = useRouter();

  return <ul>
    {comments.map((c,i) => (<Item key={i} path={asPath} text={c} />))}
  </ul>
}

function Item({ path, text }) {
  return <li><Link href={`${path}/${text}`}>{text}</Link></li>
}

export async function getStaticProps(context) {
  const res = await loadComments();
  let comments = Array.isArray(res) ? res : [];
  return { props: { comments } };
}