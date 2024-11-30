pipeline {
    agent any

    tools {
        nodejs "nodejs"
        dockerTool "learn-jenkins"
    }

    stages {
        stage('Install dependencies') {
            steps: {
                sh 'npm install'
            }
        }
    }
}