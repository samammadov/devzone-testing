// src/UserProfile.tsx
import React from "react";
import { useUser } from "../../providers/UserProvider";

const UserProfile: React.FC = () => {
  const { user, setUser, clearUser } = useUser();

  const handleLogin = () => {
    setUser({
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    });
  };

  const handleLogout = () => {
    clearUser();
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Guest</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
