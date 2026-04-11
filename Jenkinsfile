pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/pillailakshmi099-ops/docker-practical.git', branch 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t my-html-app .'
            }
        }

        stage('Remove Old Container') {
            steps {
                bat 'docker rm -f html-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 8000:80 --name html-container my-html-app'
            }
        }
    }
}
