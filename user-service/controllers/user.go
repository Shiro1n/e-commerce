package controllers

import (
    "encoding/json"
    "net/http"

    "ecommerce/user-service/database"
    "ecommerce/user-service/models"
    "golang.org/x/crypto/bcrypt"
)

func GetUsers(w http.ResponseWriter, r *http.Request) {
    var users []models.User
    database.DB.Find(&users)
    json.NewEncoder(w).Encode(users)
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
    var user models.User
    json.NewDecoder(r.Body).Decode(&user)

    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
    if err != nil {
        http.Error(w, "Failed to hash password", http.StatusInternalServerError)
        return
    }
    user.Password = string(hashedPassword)

    result := database.DB.Create(&user)
    if result.Error != nil {
        http.Error(w, "Failed to create user", http.StatusInternalServerError)
        return
    }

    json.NewEncoder(w).Encode(user)
}
