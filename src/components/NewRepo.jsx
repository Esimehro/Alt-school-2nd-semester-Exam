import React, { useState } from 'react';

function NewRepo({ onClose, onAddRepo }) {
    const [repoName, setRepoName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (repoName.trim() !== '') {
            onAddRepo(repoName);
            onClose();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Create a new repository</h2>
                <div>
                    <p>A repository contains all project files, including the revision history. Already have a project repository elsewhere?</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="repoName" className="block text-sm font-medium text-gray-700">
                            Repository Name
                        </label>
                        <input
                            type="text"
                            id="repoName"
                            value={repoName}
                            onChange={(e) => setRepoName(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewRepo;
