import { useCallback } from "react";
import { Image } from "react-bootstrap";

const BlogDetailComponent = ({blogData}) => {
    
    const sanitizeHtml = useCallback((html) => {
        return { __html: html || "" };
    }, []);

  return (
    <>
        <div className="blog-container" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            {blogData.map((blog) => (
                <article key={blog.RId} style={{ borderBottom: '1px solid #ccc', marginBottom: '30px', paddingBottom: '20px' }}>
                    <h1>{blog.Title?.trim()}</h1>
                    <Image fluid src={blog.BlogImage?.trim()} loading="eager" width="800" height="600" alt={blog.AltImage} fetchPriority="high" />

                    <p>{blog.BlogDescription?.trim()}</p>

                    {/* Nested Blog Contents Section */}
                    {blog.BlogContents && blog.BlogContents.length > 0 && (
                        // Removed the extra curly braces that were here
                        blog.BlogContents.map((contentItem) => (
                        <div key={contentItem.Id} id={`blog-content-${contentItem.Id}`} style={{background: '#f9f9f9', padding: '10px', marginTop: '10px' }}>
                                <h2>{contentItem.Title?.trim()}</h2>
                                <div dangerouslySetInnerHTML={sanitizeHtml(contentItem.Content?.trim())} />
                        </div>
                        ))
                    )}
                </article>
            ))}
        </div>
    </>
  )
}

export default BlogDetailComponent;
