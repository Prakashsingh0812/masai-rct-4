import React, { useState, useEffect } from 'react';

const UpdateTitle = () => {
  const [title, setTitle] = useState('Default Title');

  useEffect(() => {
    // Update document title whenever the title state changes
    document.title = title;
  }, [title]); // Re-run the effect whenever title changes

  return (
    <div>
      <h2>Update Document Title</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter new title"
      />
    </div>
  );
};

export default UpdateTitle;
