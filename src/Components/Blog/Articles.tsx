
import { Link } from 'react-router-dom';
import { articles } from '../Blog/ArticlesDetails';

export default function Articles() {
    return (
      <div>
        {articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <div>
              <h2>{article.title}</h2>
              <p>{article.preview}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }


Articles()
