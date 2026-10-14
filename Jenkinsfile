pipeline {
    agent any

    tools {
        // Manage Jenkins → Tools → NodeJS installations ішінде аты "node20" болуы керек
        nodejs 'node20'
    }

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'node -v && npm -v'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test:ci'
            }
            post {
                always {
                    junit 'test-results.xml'
                }
            }
        }
    }

    post {
        success {
            echo 'Build — SUCCESS, Test — SUCCESS, Pipeline — SUCCESS'
        }
        failure {
            echo 'Pipeline — FAILED. Console Output ішінен қатені тексеріңіз.'
        }
    }
}
