# deployment script for windows

# Start Minikube
minikube start --driver=docker

# Configure environment to use Docker inside Minikube
& minikube -p minikube docker-env --shell powershell | Invoke-Expression

# Apply database deployments
Write-Output "Applying PostgreSQL deployment..."
kubectl apply -f databases/postgres/postgres-pvc.yaml --validate=false
kubectl apply -f databases/postgres/postgres-deployment.yaml --validate=false
kubectl apply -f databases/postgres/postgres-service.yaml --validate=false

Write-Output "Applying MongoDB deployment..."
kubectl apply -f databases/mongodb/mongodb-pvc.yaml --validate=false
kubectl apply -f databases/mongodb/mongodb-deployment.yaml --validate=false
kubectl apply -f databases/mongodb/mongodb-service.yaml --validate=false

# Apply service deployments
Write-Output "Applying User Service deployment..."
kubectl apply -f services/user-service/k8s/user-deployment.yaml --validate=false
kubectl apply -f services/user-service/k8s/user-service.yaml --validate=false

#Write-Output "Applying Product Service deployment..."
#kubectl apply -f services/product-service/k8s/product-deployment.yaml --validate=false
#kubectl apply -f services/product-service/k8s/product-service.yaml --validate=false

# Add additional services as needed
Write-Output "Deployment script completed!"
