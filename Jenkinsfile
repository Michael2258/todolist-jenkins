def app

pipeline {
    agent any

    environment {
        DOCKER_IMAGE_VERSION = 'v1.1'
        GITHUB_CREDENTIALS_ID = 'GITHUB_CREDENTIALS_ID'
        DOCKERHUB_USERNAME = 'michaelnguyen22'
        DOCKER_IMAGE = 'todolist-jenkins'
        DOCKERHUB_CREDENTIALS_ID = 'DOCKERHUB_CREDENTIALS_ID'
        GITHUB_NAME = 'Michael2258'
        SERVER_USER = 'root'
        SERVER_IP = '172.18.0.3'
        SERVER_CREDENTIALS_ID = 'SERVER_CREDENTIALS_ID'
    }
    tools {
        nodejs "nodejs"
    }

    stages {
        // Why? to make sure directory ownership matches current user -> secure env
        // directory ownership: 'ls -ld'
        // current user: 'whoami'
        stage("Configure Git Safe Directory") {
            steps {
                script {
                    sh 'git config --global --add safe.directory /var/jenkins_home/workspace/learn-jenkins-todo-list'
                }
            }
        }

        stage("Clone git repo") {
            steps {
                git credentialsId: "${GITHUB_CREDENTIALS_ID}",
                url: 'https://github.com/Michael2258/todolist-jenkins',
                branch: "master"
            }
        }

        stage("Create Docker image") {
            steps {
                sh 'docker build -t ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION} .'
            }
        }

        stage("Push Docker Image to Github Registry") {
            steps {
                script {
                    docker.withRegistry('https://ghcr.io', 'GITHUB_CREDENTIALS_ID') {
                        sh 'docker tag ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION} ghcr.io/${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION}'
                        sh 'docker push ghcr.io/{Michael2258}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION}'
                    }
                }
            }
        }

        stage("SSH to Server and Deploy") {
            steps {
                script {
                    sshagent([SERVER_CREDENTIALS_ID]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << EOF
                            docker stop ${DOCKER_IMAGE} || true
                            docker rm ${DOCKER_IMAGE} || true
                            docker rmi ${DOCKER_IMAGE} || true
                            docker rmi ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION} || true
                            docker pull ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION}
                            docker run -d --name ${DOCKER_IMAGE} -p 8084:80 ${DOCKERHUB_USERNAME}/${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION}
                        """
                    }
                }
            }
        }
    }
}