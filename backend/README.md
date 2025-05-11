How to host nest app in aws ec2 : 
================================================



Here’s a step-by-step checklist to fix it:
Build the new Docker image locally (with code changes):

docker build -t annurdev/nest-api:v1 .



Push the new image to Docker Hub:
docker push annurdev/nest-api:v1



AWS EC2 instances create: 

Under security inbound rules configure: 

rules: http - anywhere



commnad : 

sudo apt update
sudo apt install -y docker.io
sudo usermod -aG docker $USER
newgrp docker




docker version



docker pull annurdev/nest-api:v1


docker run -d -p 80:5000 your-dockerhub-username/your-image-name:tag



http://65.0.45.43:80/games