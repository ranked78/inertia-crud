import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

const Index = ({ posts }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure?')) {
            Inertia.delete(`/posts/${id}`);
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            <InertiaLink href="/posts/create">Create Post</InertiaLink>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <InertiaLink href={`/posts/${post.id}/edit`}>{post.title}</InertiaLink>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
