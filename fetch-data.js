// Define the asynchronous function to fetch and display user data
async function fetchUserData() {
    // API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where user data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if response is OK (status code 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold user names
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> for each name
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear existing content and display an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});
