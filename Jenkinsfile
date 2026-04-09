pipeline{
  agent any 
  
  stages
  {
    stage('Clone a repo'){
      steps{
        
      git url:'https://github.com/pillailakshmi099-ops/docker-practical.git', branch:'main'
      }
    }
    
    stage('Build a image'){
      steps{
        bat 'docker build -t my-app .'
      }
    }

    stage('Remove old containers'){
      steps{
        bat 'docker rm my-container || exit 0'
          }
        }

    stage('Run the Container'){
      steps{
        bat 'docker run -d -p 5050:3000 --name my-container my-app'
      }
    }
    
  }
}
