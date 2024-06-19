import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ post }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/posts/${post.id}`, { title, content });
    };

    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;
