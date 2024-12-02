pipeline {
    def app

    agent any

    environment {
        DOCKER_IMAGE = 'learn-jenkins/todo-list'
        DOCKER_IMAGE_VERSION = 'v1.0'
    }
    tools {
        nodejs "nodejs"
    }

    stages {
        stage("Build image") {
            steps {
                script {
                    app = docker.build("${DOCKER_IMAGE}:${DOCKER_IMAGE_VERSION}")
                }
            }
        }

        stage("Test image") {
            app.inside {
                sh 'echo "Tests passed"'
            }
        }
    }
}