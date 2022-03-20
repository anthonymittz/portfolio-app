import styles from '../../../styles/pages/blog/Article.module.sass'

export default function ArticlePage({ article }) {
  return <div id={styles.blog_article_page}>
    <h2>Article</h2>
    <p>{article}</p>
  </div>
}