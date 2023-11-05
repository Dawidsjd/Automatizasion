import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";

const Settings = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Imię Nazwisko",
    email: "email@example.com",
    phoneNumber: "123-456-789",
    location: "Lokalizacja",
    profileImage: "", // Dodaj pole dla zdjęcia profilowego
  });

  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }

 
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setUserProfile({ ...userProfile, profileImage: event.target.result });
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = () => {
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, { displayName: displayName })
        .then(() => {
          console.log("Zaktualizowano nazwę użytkownika na serwerze Firebase");
        })
        .catch((error) => {
          console.error("Błąd podczas aktualizacji nazwy użytkownika:", error);
        });
    }
  };

  return (
    
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <h1 style={styles.h1}>Account settings</h1>
        <div style={styles.navigationContainer}>
          <a href="/profile" style={styles.navigationProfile}>Profil</a>
          <a href="/security" style={styles.navigationSecurity}>Security</a>
          <a href="/application" style={styles.navigationApplication}>Application</a>
        </div>
        <img
          src={userProfile.profileImage}
          alt="Profile"
          style={styles.profileImage}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <div>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userProfile.email}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Number telephone:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={userProfile.phoneNumber}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={userProfile.location}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        <button onClick={handleSaveClick} style={styles.buttonSave}>
          Save changes
        </button>
        <button onClick={handleNameChange} style={styles.button}>
          Change Display Name
        </button>
      </div>
    </div>
  );
};

export default Settings;