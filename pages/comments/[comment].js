import { loadComment, loadComments } from '../../lib/api'

export default function Comment({ comment }) {
  return <>
    <h1>Comment: { comment }</h1>
  </>
}

export async function getStaticPaths() {
  const ids = await loadComments();
  const paths = [];
  ids.forEach(id => paths.push(`/comments/${id}`));
  return { paths, fallback: true };
}

export async function getStaticProps({ params, notFound }) {
  const comment = await loadComment(params.comment);
  let output = comment ? { props: { comment } } : { notFound: true };
  return output;
}