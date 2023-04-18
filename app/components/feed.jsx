import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const FacebookFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const parser = new Parser();

        parser.parseURL('https://zapier.com/engine/rss/15071765/facebook-page-feed')
            .then((feed) => {
                // Get only the first post
                feed.items = feed.items.slice(0, 1);

                setPosts(feed.items);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.guid}>
                    <p>{post.title}</p>

                    <a href={post.link} className="mt-4 inline-block"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 inline mr-1 relative -top-0.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                    </svg>
                        Se inlägget på Facebook</a> ({post.pubDate})
                </div>
            ))}
        </div>
    );
};

export default FacebookFeed;
