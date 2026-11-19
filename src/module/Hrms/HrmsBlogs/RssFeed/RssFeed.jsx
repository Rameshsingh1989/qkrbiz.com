import { useEffect, useState } from 'react';
import { getBlogs } from '../../../../services/blogService';
import { generateRssXml } from '../../../../utility/RSS/generateRssXml';

const RssFeed = () => {

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.qkrbiz.com";

  const [rssXml, setRssXml] = useState('');
  const [publishedBlogs, setPublishedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getBlogs();

        const published = blogs.filter(blog => blog.Status === 1);
        setPublishedBlogs(published);

        const xml = generateRssXml(siteUrl, blogs);
        setRssXml(xml);

      } catch (error) {
        console.error("RSS fetch error:", error);
      }
    };

    fetchBlogs();
  }, [siteUrl]);

  const downloadRss = () => {
    const blob = new Blob([rssXml], { type: 'application/rss+xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rss.xml';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rssXml)
      .then(() => alert('RSS feed copied to clipboard!'))
      .catch(() => alert('Failed to copy RSS feed'));
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'monospace', 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header */}
        <div style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
          <h1 style={{ margin: 0, color: '#333', fontSize: '28px' }}>
            📡 RSS Feed - QkrHR Blog
          </h1>

          <p style={{ margin: '10px 0 0 0', color: '#666', fontSize: '14px' }}>
            Subscribe to our RSS feed:
            <a 
              href={`${siteUrl}/hrms-software/qkrhr-blogs/rss.xml`}
              style={{ 
                marginLeft: '10px', 
                color: '#007bff', 
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              {siteUrl}/hrms-software/qkrhr-blogs/rss.xml
            </a>
          </p>

          <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
            📝 Total Published Posts: <strong>{publishedBlogs.length}</strong>
          </p>
        </div>

        {/* Actions */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          
          <button onClick={downloadRss}>
            📥 Download RSS Feed
          </button>

          <button onClick={copyToClipboard}>
            📋 Copy to Clipboard
          </button>

          <a href="/hrms-software/qkrhr-blogs">
            🏠 Back to Blog
          </a>
        </div>

        {/* Info */}
        <div style={{
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffc107',
          borderRadius: '5px',
          color: '#856404'
        }}>
          <strong>ℹ️ How to use this RSS feed:</strong>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Copy the RSS feed URL above</li>
            <li>Paste it into your RSS reader (Feedly, Inoreader, etc.)</li>
            <li>Get notified when new blog posts are published</li>
          </ul>
        </div>

        {/* Preview */}
        <div style={{
          marginBottom: '15px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <span>📄 RSS Feed XML Preview:</span>
          <span style={{ fontSize: '12px' }}>
            {new Date().toLocaleString()}
          </span>
        </div>

        <pre style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '5px',
          maxHeight: '600px',
          overflow: 'auto'
        }}>
          {rssXml || 'Loading RSS feed...'}
        </pre>

      </div>
    </div>
  );
};

export default RssFeed;