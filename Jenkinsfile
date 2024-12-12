def app

pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'learn-jenkins/todo-list'
        DOCKER_IMAGE_VERSION = 'v1.0'
    }
    tools {
        nodejs "nodejs"
    }

    stages {
        stage("Clone git repo") {
            steps {
                git url: 'https://github.com/Michael2258/todolist-jenkins', branch: "master"
            }
        }
    }
}