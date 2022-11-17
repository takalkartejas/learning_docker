# learning_docker

Video link - https://www.youtube.com/watch?v=p28piYY_wv8&t=2869s

### Theroy-
1. Docker is a tool for running applications in an isolated enviornment
2. It is similar to virtual mahine
3. Standard for software deployment
4. If you create a package in docker it is sure to work in any system
5. Containers are an abstraction at the app layer that packages 'code' and 'dependencies' together. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space.
6. A container does not require a full os it just shares the underlying os with other containers.
 ![Screenshot from 2022-11-16 17-09-58](https://user-images.githubusercontent.com/67382565/202233330-61015c0e-c85c-44bc-8a1b-0aa59fd2cdc9.png)
7. Image - 
* Image is a template for creating an enviornment of your choice.
* Image has everything needed to run your Apps.
* OS, Software, App Code
8. Container is a running instance of image
9. Volume:- allows sharing data between host and container, and also between containers
10. If we add files and folders in this volume in host - they will show up in containers and vice versa
11. Dockerfile :- allows us to build a new image, contains list of steps on how to create images
12. .dockerignore:- when we are doing ADD . ., it will add all the files in the docker. We can exclude some files by editing .dockerignore

### Learning steps:
1. We go to docker hub and explore images
2. Here we download ngnix image using :- docker pull nginx
3. Check the image using :- docker images
4. Run the image using :- (docker run nginx:latest)  here 'latest' is a tag - can be 1.0, 2.0 etc.
5. Check the container using the command - (docker ps) in other container
6. run in detached mode :- refer command 6.
7. We notice the port name as - '80/tcp' in docker ps
8. We want to map the port 8080 of our local host to the port 80 of the container :- refer command 8.
9. We verify by going on browser and typing localhost:8080
10. We map another port to the port 'tcp' refer command 9.
11. we verify by tyoing both ports on browser
12. The old container does not get deleted after stopping, we can do 'docker start <containername/id>' to start the container
13. The container will automatically get a random name everytime unless you specify it 
14. We can delete all containers at once :- refer cmd 14
15. we can delete containers forcefully if they are running or some other issue shows up :1 refer cmd 18
16. We can name a container while starting using:- refer cmd 15
17. We write a big command using all the things mentioned earlier as - docker run --name website -d -p 3000:80 -p 8080:80 nginx:latest :-
* '-d' for detached mode
* '-p' for port
* '--name' for name
* 'ngnix:latest: image name and tag
18. Create the FORMAT variable in bashrc and give it a column format to make it easy to see
19. We can use the command (docker ps --format=FORMAT) to see the container info in better format 
20. Volume :- refer theory 9 to 10
21. Now we have created a folder called website in the directory
22. Create index.html inside the folder and mount the folder as a volume in /usr/share/nginx/html
23. We use the command :- docker run --name website -v $(pwd):/usr/share/nginx/html:ro -d -p 8080:80 nginx :- refer cmd 17 and 20 :- dont use the ro flag if you wish to modify the directory
24. We go on browser and do localhost:8080 and see the html page that we created
25. We do docker exec -it website bash to go inside container
26. We remove the ro flag while running the container again and we go inside the html folder in address mentioned at 23. and touch a about.html file 
27. The last step creates a file also at host refer theory 10
28. search for a theme on bootstrap single page template, download, copy the content and paste in the website folder and delete all old files
29. run docker and check the website on localhost:8080 
30. Sharing volumes between containers- 
31. using command :- docker run --name website_2 --volumes-from website -d -p 8000:80 nginx :- refer cmd 21
32. We create new container called website_2 and mount the volume from the container website into website_2.
33. We give it a different port no. and check if the website is running
34. Dockerfile :- refer theory 11
35. We create a docker file with the base image nginx, we add the files from the website folder in the container adresss :- /usr/share/nginx/html, and this is not a volume mount, its static content  
36. refer Dockerfile for comments
37. build the image using :- docker build -t website:latest .
38. The comments should be placed on newline in Dockerfile
39. Run the container using new image:-docker run --name website -p 8080:80 -d website:latest
40. check if website is running
41. Install node.js and express
42. Create a dir. called user_service_api and do npm init
43. copy the helloworld example from the getting started page of express.js and create index.js
44. Run the file and check output in browser
45. Modify the file to send a json object and check on browser check commits
46. Modify to return json array
47. We have created a simple API!
48. Now we have to dockerize this api
49. Create a Dockerfile in user_service_api folder, refer comment
50. Run docker using :- docker run --name user-api -d -p 3000:3000 usr-service-api:latest
51. Express js listens to port 3000 by default, we map port 3000 of host to port 3000 of docker
52. .dockerignore:- when we are doing ADD . ., it will add all the files in the docker. We can exclude some files by editing .dockerignore


### Usefull commands:

1. Image is a template for creating an environment of your choice
2. docker pull <imageName>
3. docker images :- see the list of images
4. docker run <imagename>:<tag>
5. docker container ls :- docker ps
6. docker run -d <imageName> :- run in detached mode
7. docker stop <containerID/containername>
8. docker run -d -p 8080:80 <imageName> :-  80/TCP is the port no. of the container which can be seen in the docker ps, here we map the localhost 8080 to the port 80 of the container
   * We can access the image on webpage by entering localhost:8080
9. docker run -d -p 8080:80 -p 3000:80 <imageName> :- can map multiple ports
10. docker stop <containerID/containername>
11. docker ps -a :-  to show all the containers alongside that had stopped
12. docker rm <containername/id>
13. docker ps -aq :- give only ids of all the containers
14. docker rm $(docker ps -aq) :- delete the things given bt this command
15. docker run --name <containerName> <imageName>:- we can manually name container instead of the random name given by pc
16. docker exec -it website bash :- to execute in interactive mode
17. pwd :- gives the address of current directory (e.g.- /home/tejas/study/learning_docker) 
18. docker rm -f <containerid/name>
19. docker ps --format=FORMAT :- to see the container info in better format
20. docker run -v <addressOfTheFolderInHOST>:<addressOfTheFolderInDocker> <imageName> - mount the volume while running the images
21. docker run --name <toBeCreatedContainerName> --volumes-from <containerNameWhoseVolumeWeNeed>  <image_name> :- to mount the volumes from one container to other 
22. docker build -t <name>:<tag> <locatiomOfDockerFile> :- build image using DockerFile
23. docker image rm
24. In this case we do not need to add node_modules as they will be installed in docker due to 'npm install' commands
25. Create the .dockerignore file
