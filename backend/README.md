 ✅Build the Docker image:

 docker build -t annurdev/kub-first-app:latest .



3️⃣ Push the image to Docker Hub:

docker push annurdev/kub-first-app:latest



✅ That’s it. You just pushed annurdev/kub-first-app:latest to Docker Hub!

Now you can use it in Kubernetes like:

kubectl create deployment first-app --image=annurdev/kub-first-app:latest


