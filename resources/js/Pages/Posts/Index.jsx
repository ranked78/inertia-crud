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
        <div class="text-center">
            <br />
<h1 class="text-5xl font-extrabold dark:text-white">Posts</h1>

<br />
            
            
            <InertiaLink class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href="/posts/create">Create Post</InertiaLink>
            <ul class="mt-12">
                {posts.map(post => (
                    <li key={post.id}>
                        <InertiaLink class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 uppercase" href={`/posts/${post.id}/edit`}>{post.title}</InertiaLink>
                        <button onClick={() => handleDelete(post.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
