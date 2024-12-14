def app

pipeline {
    agent any

    environment {
        DOCKER_IMAGE_VERSION = 'v1.1'
        GITHUB_CREDENTIALS_ID = 'GITHUB_CREDENTIALS_ID'
        DOCKERHUB_USERNAME = 'michaelnguyen22'
        IMAGE_NAME = 'todolist-jenkins'
        DOCKERHUB_CREDENTIALS_ID = 'DOCKERHUB_CREDENTIALS_ID'
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
                sh 'docker build -t ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${DOCKER_IMAGE_VERSION} .'
            }
        }
    }
}