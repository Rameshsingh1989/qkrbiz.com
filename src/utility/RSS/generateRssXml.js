//generateRssXml.js
import { logos as ImagesUrl_logos } from "@/assets/images";

export const generateRssXml = ( siteUrl = "https://www.qkrbiz.com", blogs = []) => {

  /* Fix localhost */
  if (siteUrl.includes("localhost")) { siteUrl = "https://www.qkrbiz.com"; }
  /* XML escape */
  const escapeXml = (str = "") =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  /* Date */
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString();
  };
  /* Clean HTML */
  const cleanHtml = (html = "") => {
    return html
      // remove style (single + double quotes)
      .replace(/ style=["'][^"']*["']/gi, "")
      .replace(/ class=["'][^"']*["']/gi, "")
      // remove empty style=''
      .replace(/ style=''/gi, "")
      // fix relative URLs
      .replace(
        /(href|src)=["']\/(?!\/)/g,
        `$1="${siteUrl}/`
      );
  };
  /* Fix image filename */
  const fixImageUrl = (imageName) => {
    if (!imageName) return "";
    let url =`https://intec.qkrbiz.com:74//Documents/Blog/${imageName}`;
    // let url =`${siteUrl}/assets/${imageName}`;
    // remove brackets
    url = url.replace(/\(/g, "").replace(/\)/g, "");
    // encode spaces
    url = encodeURI(url);
    return url;
  };
  /* Create RSS items */
  const rssItems = (blogs || []).filter(b => b.Status === 1).sort((a, b) =>new Date(b.EditPublish) - new Date(a.EditPublish))
    .map(blog => {
      const blogUrl =`${siteUrl}/hrms-software/${blog.BlogURL}`;
      const pubDate = formatDate(blog.EditPublish);
      const description = cleanHtml(blog.BlogDescription || "");
      const cleanDesc = escapeXml(description.replace(/<[^>]+>/g, "").substring(0, 300));
      const imageUrl = fixImageUrl(blog.BlogImage);
      return `
      <item>
      <title>${escapeXml(blog.Title)}</title>
      <link>${escapeXml(blogUrl)}</link>
      <guid isPermaLink="true">${escapeXml(blogUrl)}</guid>
      <description><![CDATA[${cleanDesc}]]></description>
      <content:encoded><![CDATA[${description}]]></content:encoded>
      <dc:creator>${escapeXml(blog.Author || "QkrHR Team")}</dc:creator>
      <category>${escapeXml(blog.BlogCatName || "General")}</category>
      <pubDate>${pubDate}</pubDate>
      ${imageUrl? `<enclosure url="${imageUrl}" length="2048" type="image/jpeg" />` : ""}
      </item>`;
    })
    .join("\n");
  /* Channel */
  const channelLink = `${siteUrl}/hrms-software/qkrhr-blogs`;
  const rssLink = `${siteUrl}/hrms-software/qkrhr-blogs/rss.xml`;
  const logoUrl = `${siteUrl}${ImagesUrl_logos.QkrbizLogo}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>QkrHR Blog - HR Management Insights</title>
        <link>${channelLink}</link>
        <description>Latest insights on HR Management</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${rssLink}" rel="self" type="application/rss+xml" />
        <image>
          <url>${logoUrl}</url>
          <title>QkrHR Blog - HR Management Insights</title>
          <link>${channelLink}</link>
        </image>
        ${rssItems}
      </channel>
  </rss>`;

  };

// import { AllBlogData } from "../../module/Hrms/HrmsBlogs/AllBlogData";
// export const generateRssXml = (siteUrl = "https://www.qkrbiz.com") => {
//   const escapeXml = (str = "") =>
//     String(str)
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&apos;");
//   const formatDate = (dateStr) => {
//     try {
//       const date = new Date(dateStr);
//       return isNaN(date.getTime())
//         ? new Date().toUTCString()
//         : date.toUTCString();
//     } catch {
//       return new Date().toUTCString();
//     }
//   };
//   const getMimeType = (url = "") => {
//     if (url.endsWith(".png")) return "image/png";
//     if (url.endsWith(".jpg") || url.endsWith(".jpeg"))
//       return "image/jpeg";
//     if (url.endsWith(".webp")) return "image/webp";
//     return "image/jpeg";
//   };
//   const rssItems = AllBlogData
//     .filter((blog) => blog.Status === 1)
//     .sort((a, b) => {
//       const dateA = new Date(a.PublishDate).getTime();
//       const dateB = new Date(b.PublishDate).getTime();
//       return dateB - dateA;
//     })
//     .map((blog) => {
//       const blogUrl = `${siteUrl}/hrms-software/${blog.BlogUrl}`;
//       const pubDate = formatDate(blog.PublishDate);
//       const authorName = blog.Author || "QkrHR Team";
//       const description = blog.BlogDescription || "";
//       const cleanDesc = description
//         .replace(/\s+/g, " ")
//         .trim()
//         .substring(0, 300);     
//       // const contentHtml = description
//       //   .replace(/src="\/(?!\/)/g, `src="${siteUrl}/`)
//       //   .replace(/href="\/(?!\/)/g, `href="${siteUrl}/`);
//       const contentHtml = description.replace(
//         /(href|src)=["']\/(?!\/)/g,
//         `$1="${siteUrl}/`
//       );
//       const imageUrl = blog.BlogImage
//         ? `${siteUrl}${blog.BlogImage.replace(/^\/?src\/assets\/images/, "/assets/images")}`
//         : "";
//       const mimeType = getMimeType(imageUrl);
//       return `
//     <item>
//       <title>${escapeXml(blog.Title)}</title>
//       <link>${escapeXml(blogUrl)}</link>
//       <guid isPermaLink="true">${escapeXml(blogUrl)}</guid>
//       <description><![CDATA[${cleanDesc}]]></description>
//       <content:encoded><![CDATA[${contentHtml}]]></content:encoded>
//       <dc:creator>${escapeXml(authorName)}</dc:creator>
//       <category>${escapeXml(blog.BlogCatName || "General")}</category>
//       <pubDate>${pubDate}</pubDate>
//       ${imageUrl 
//           ? `<enclosure url="${escapeXml(imageUrl)}" type="${mimeType}" />
//              <media:content url="${escapeXml(imageUrl)}" medium="image" />`
//           : ""
//       }
//     </item>`;
//     })
//     .join("\n");
//   const channelLink = `${siteUrl}/hrms-software/qkrhr-blogs`;
//   const rssLink = `${siteUrl}/hrms-software/qkrhr-blogs/rss.xml`;
//   const logoUrl = `${siteUrl}/qkrbiz-logo.svg`;
//   return `<?xml version="1.0" encoding="UTF-8"?>
//   <rss version="2.0"
//       xmlns:atom="http://www.w3.org/2005/Atom"
//       xmlns:dc="http://purl.org/dc/elements/1.1/"
//       xmlns:content="http://purl.org/rss/1.0/modules/content/"
//       xmlns:media="http://search.yahoo.com/mrss/">
//     <channel>
//       <title>QkrHR Blog - HR Management Insights</title>
//       <link>${escapeXml(channelLink)}</link>
//       <description>Latest insights on HR Management, Payroll, Attendance, and Employee Management.</description>
//       <language>en-us</language>
//       <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
//       <ttl>60</ttl>
//       <atom:link href="${escapeXml(rssLink)}" rel="self" type="application/rss+xml"/>
//       <image>
//         <url>${escapeXml(logoUrl)}</url>
//         <title>QkrHR Blog - HR Management Insights</title>
//         <link>${escapeXml(channelLink)}</link>
//       </image>
//       ${rssItems}
//     </channel>
//   </rss>`;
// };