package main

import (
    "log"
    "net/http"

    "github.com/gorilla/mux"
    "ecommerce/user-service/database"
    "ecommerce/user-service/routes"
)

func main() {
    database.Connect()

    r := mux.NewRouter()

    routes.RegisterUserRoutes(r)

    log.Println("Starting server on :8000")
    log.Fatal(http.ListenAndServe(":8000", r))
}
