import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";
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

    // ...
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

  const handleSaveClick = () => {
    // Tutaj można dodać kod do zapisu zmian na serwerze
    // Następnie zaktualizuj stan aplikacji
    // ...

    // Przykład zapisu zmian na serwerze (przy użyciu fetch):
    // fetch("url_do_api_zapisujacego_dane_uzytkownika", {
    //   method: "POST",
    //   body: JSON.stringify(userProfile),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Zapisano zmiany na serwerze:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Błąd podczas zapisywania zmian na serwerze:", error);
    //   });
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
      <Link to="/HomeDashboard">
        <button
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: '#003366',
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5em",
            padding: "10px 30px",
          }}
        >
          <KeyboardBackspaceIcon />
        </button>
      </Link>
    </div>
  );
};

export default Settings;
