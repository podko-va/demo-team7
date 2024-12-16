import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const { user, token, getAllUsers, updateUser, deleteUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Redirect if not logged in or not an organizer
/*   useEffect(() => {
    if (!token || user?.role !== "organizer") {
      navigate("/"); // Redirect to home page or login page
    }
  }, [user, token, navigate]); */

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers || []); // Fallback to empty array if fetchedUsers is null
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [getAllUsers]);


  // Handle user deletion
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
        alert("User deleted successfully!");
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete user.");
      }
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error fetching users: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      {users?.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                <Link
                    to={`/update-user/${user.id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                    >
                    Update
                </Link>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
