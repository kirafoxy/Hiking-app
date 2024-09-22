import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import { articles } from '../Blog/ArticlesDetails';

export default function Articles(){
    return(
        <div>
            {articles.map((article)=>{
                return(
            <Link to={`/article/${article.id}`} key={article.id}>
                <ArticleCard 
                id={article.id}
                preview={article.preview}
                description={article.description}
                title={article.title}
                image={article.image}
        
                />
            </Link>
                )
            
      }) }
        </div>
    )
}

Articles()
