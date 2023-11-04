import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import LeftPanelDashboard from "../../Components/features/LeftPanelDashboard/LeftPanelDashboard";

const Settings = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Imię Nazwisko",
    email: "email@example.com",
    phoneNumber: "123-456-789",
    location: "Lokalizacja",
    profileImage: "", // Dodaj pole dla zdjęcia profilowego
  });

  useEffect(() => {
    // Tutaj możesz wykonać zapytanie do serwera, aby pobrać dane użytkownika i zdjęcie profilowe
    // ...

    // Przykład użycia fetch:
    // fetch("url_do_api_pobierajacego_dane_uzytkownika")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUserProfile(data);
    //   })
    //   .catch((error) => {
    //     console.error("Błąd podczas pobierania danych użytkownika:", error);
    //   });
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

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.h1}>Account settings</h1>
        <img
          src={userProfile.profileImage}
          alt="Profile"
          style={styles.profileImage}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userProfile.name}
            onChange={handleInputChange}
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
        <button onClick={handleSaveClick} style={styles.button}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
