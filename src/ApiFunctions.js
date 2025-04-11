async function sendProjectRequest(to, subject, message) {
    try {
        const response = await fetch('http://localhost:4000/send-project-req', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to, subject, message }),
        });
        
        if (!response.ok) {
            // This means the server responded with a status outside of the 200–299 range
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }

        const data = await response.text(); // or response.json() if your server responds with JSON
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error sending project request:', error);
        throw error;
    }
}

// export all functions
export { sendProjectRequest };