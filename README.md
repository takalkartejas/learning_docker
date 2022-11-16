# learning_docker

Video link - https://www.youtube.com/watch?v=p28piYY_wv8&t=2869s

### Theroy-
1. Docker is a tool for running applications in an isolated enviornment
2. It is similar to virtual mahine
3. Standard for software deployment
4. If you create a package in docker it is sure to work in any system
5. Containers are an abstraction at the app layer that packages 'code' and 'dependencies' together. Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space.
6. A container does not require a full os it just shares the underlying os with other containers.
7. ![Screenshot from 2022-11-16 17-09-58](https://user-images.githubusercontent.com/67382565/202233330-61015c0e-c85c-44bc-8a1b-0aa59fd2cdc9.png)

### Learning steps:
1. Mounting a folder to the container-


### Usefull commands:

1. Image is a template for creating an environment of your choice
2. docker pull imageName
3. docker images :- see the list of images
4. docker run imagename
5. docker container ls :- docker ps
6. docker run -d imageName :- run in detached mode
7. docker stop containerID/container name
8. docker run -d -p 8080:80 imageName :-  80/TCP is the port no. of the container which can be seen in the docker ps, here we map the localhost 8080 to the port 80 of the container
   * We can access the image on webpage by entering localhost:8080
9. docker run -d -p 8080:80 -p 3000:80 imageName :- can map multiple ports
10. docker stop containerID/container name
11. docker ps -a :-  to show all the containers alongside that had stopped
12. docker rm containername/id
13. docker ps -aq :- give only ids of all the containers
14. docker rm $(docker ps -aq) :- delete the things given bt this command
15. docker run --name containerName imageName:- we can manually name container instead of the random name given by pc
16. docker exec -it website bash :- to execute in interactive mode
17. pwd :- gives the address of current directory (e.g.- /home/tejas/study/learning_docker) 
18. docker run -- name <userDefinedDockerName> -v <volume
