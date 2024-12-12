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
                git credentialsId: 'GITHUB_CREDENTIAL_KEY', url: 'https://github.com/Michael2258/todolist-jenkins'
                sh "ls -lart ./*"
                sh "git branch -a"
                sh "git checkout master"
            }
        }
    }
}