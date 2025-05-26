import React from 'react';
import '../styles/ArticleDetail.css';

const ArticleDetail = ({ articleId }) => {
  // Sample article data - in real app, fetch based on articleId
  const article = {
    id: 1,
    date: '29 Jun 2022',
    author: 'John Wright',
    title: 'From Traditional Banking to Digital Disruption',
    subtitle: 'How modern fintech is reshaping the financial landscape',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
    tags: ['Finance', 'News', 'Digital Banking'],
    readTime: '5 min read',
    content: `
      <p>The financial services industry is undergoing a fundamental transformation. Traditional banks, once the unchallenged pillars of financial services, now face unprecedented disruption from innovative fintech companies that are redefining how we think about money, payments, and banking.</p>
      
      <p>This digital revolution didn't happen overnight. It's the result of converging technologies, changing consumer expectations, and regulatory shifts that have created the perfect storm for innovation in financial services.</p>
      
      <h2>The Rise of Digital-First Banking</h2>
      
      <p>Digital-first banks, also known as neobanks or challenger banks, have emerged as formidable competitors to traditional financial institutions. These companies leverage technology to offer streamlined, user-friendly banking experiences that traditional banks often struggle to match.</p>
      
      <p>Unlike traditional banks that were built on legacy systems and physical infrastructure, digital banks are designed from the ground up with modern technology stacks. This gives them several advantages:</p>
      
      <ul>
        <li><strong>Lower operational costs:</strong> Without the burden of maintaining physical branches, digital banks can operate with significantly lower overhead costs.</li>
        <li><strong>Faster innovation cycles:</strong> Modern technology stacks allow for rapid development and deployment of new features.</li>
        <li><strong>Better user experience:</strong> Native mobile apps and intuitive interfaces that customers expect in the digital age.</li>
        <li><strong>Data-driven insights:</strong> Advanced analytics and AI capabilities for personalized financial services.</li>
      </ul>
      
      <h2>Key Technologies Driving Change</h2>
      
      <p>Several key technologies are at the heart of this transformation:</p>
      
      <p><strong>Artificial Intelligence and Machine Learning:</strong> These technologies enable banks to provide personalized recommendations, detect fraud in real-time, and automate customer service through chatbots and virtual assistants.</p>
      
      <p><strong>Blockchain and Cryptocurrency:</strong> While still emerging, these technologies promise to revolutionize payments, reduce transaction costs, and enable new forms of digital assets.</p>
      
      <p><strong>Open Banking APIs:</strong> Regulatory changes have forced banks to open their data through APIs, enabling third-party providers to build innovative services on top of traditional banking infrastructure.</p>
      
      <h2>The Customer Experience Revolution</h2>
      
      <p>Perhaps the most significant change is in customer expectations. Today's consumers, particularly younger generations, expect banking to be as seamless and intuitive as other digital services they use daily.</p>
      
      <p>This means instant account opening, real-time notifications, personalized insights, and 24/7 customer support. Traditional banks are investing heavily to meet these expectations, but they face the challenge of modernizing legacy systems while maintaining regulatory compliance and security.</p>
      
      <h2>Looking Forward</h2>
      
      <p>As we look to the future, the lines between traditional banks and fintech companies continue to blur. We're seeing increased collaboration through partnerships and acquisitions, as well as traditional banks launching their own digital-only subsidiaries.</p>
      
      <p>The winners in this new landscape will be those who can successfully combine the trust and regulatory expertise of traditional banking with the innovation and agility of fintech startups.</p>
    `
  };

  const popularArticles = [
    {
      id: 2,
      title: 'Top 10 Finance Apps for Modern Money Management',
      author: 'Harold Rogers',
      date: '25 Jun 2022',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=180&fit=crop',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'The 10 Best Banking Apps You Need to Know',
      author: 'David Simmons',
      date: '22 Jun 2022',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=180&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: '10 Finance Banking Apps Changing the Game',
      author: 'Brian Garcia',
      date: '20 Jun 2022',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=180&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Finance Apps to Streamline Your Financial Journey',
      author: 'Daniel Harris',
      date: '18 Jun 2022',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=180&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'The Road to Financial Independence',
      author: 'Charles Garcia',
      date: '15 Jun 2022',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=180&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 7,
      title: 'Understanding Credit Scores and Reports',
      author: 'Jerry Turner',
      date: '12 Jun 2022',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=180&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Digital Payments: The Future is Here',
      author: 'Sarah Johnson',
      date: '10 Jun 2022',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=180&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 9,
      title: 'Cryptocurrency Regulations: What You Need to Know',
      author: 'Mike Chen',
      date: '08 Jun 2022',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=180&fit=crop',
      readTime: '9 min read'
    }
  ];

  const handlePopularArticleClick = (articleId) => {
    console.log(`Navigating to article: ${articleId}`);
    // Implement navigation to article detail
    // navigate(`/article/${articleId}`);
  };

  const handleBackClick = () => {
    console.log('Going back to news page');
    // Implement back navigation
    // navigate('/news');
  };

  return (
    <div className="article-detail-container">
      <div className="article-content">
        <div className="article-header">
          <button className="back-button" onClick={handleBackClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to News
          </button>
          
          <div className="article-meta">
            <span className="article-date">{article.date}</span>
            <span className="article-author">by {article.author}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          {article.subtitle && (
            <p className="article-subtitle">{article.subtitle}</p>
          )}
          
          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="article-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      <div className="sidebar">
        <div className="popular-articles">
          <h3>Popular Articles</h3>
          <div className="popular-articles-list">
            {popularArticles.map((popularArticle) => (
              <article 
                key={popularArticle.id} 
                className="popular-article-card"
                onClick={() => handlePopularArticleClick(popularArticle.id)}
              >
                <div className="popular-article-image">
                  <img src={popularArticle.image} alt={popularArticle.title} />
                </div>
                <div className="popular-article-content">
                  <h4 className="popular-article-title">{popularArticle.title}</h4>
                  <div className="popular-article-meta">
                    <span className="popular-article-author">{popularArticle.author}</span>
                    <span className="popular-article-date">{popularArticle.date}</span>
                  </div>
                  <span className="popular-article-read-time">{popularArticle.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;