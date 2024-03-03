const API_URL = 'https://reqres.in/api/users';

export const fetchUsers = async (page: number = 1, perPage = 6) => {
    const response = await fetch(`${API_URL}?page=${page}&per_page=${perPage}`);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return await response.json();
};