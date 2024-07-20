package routes

import (
    "github.com/gorilla/mux"
    "ecommerce/user-service/controllers"
)

func RegisterUserRoutes(r *mux.Router) {
    r.HandleFunc("/users", controllers.GetUsers).Methods("GET")
    r.HandleFunc("/users", controllers.CreateUser).Methods("POST")
}
