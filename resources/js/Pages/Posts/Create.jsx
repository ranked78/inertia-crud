import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/posts', { title, content });
    };

    return (
        <div>
            <h1 class="text-5xl font-extrabold dark:text-white text-center">Create Post</h1>

<br />

            <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} required ></textarea>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </form>


        </div>
    );
};

export default Create;
