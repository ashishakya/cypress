pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave Node1'){
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url:'https://github.com/ashishakya/cypress.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run cypress:headless_test_for_autoStore_dashboard'
                    }
                }
                stage('Slave Node2'){
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url:'https://github.com/ashishakya/cypress.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run cypress:headless_test_for_autoStore_dashboard'
                    }
                }
            }
        }
    }
}
