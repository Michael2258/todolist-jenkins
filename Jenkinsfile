def app

pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'learn-jenkins/todo-list'
        DOCKER_IMAGE_VERSION = 'v1.0'
        GITHUB_CREDENTIALS_ID = "GITHUB_CREDENTIALS_ID"
    }
    tools {
        nodejs "nodejs"
    }

    stages {
        stage("Clone git repo") {
            steps {
                echo "Hello GITHUB ${GITHUB_CREDENTIALS_ID}"
            }
        }
    }
}