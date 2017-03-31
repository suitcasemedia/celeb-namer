module.exports = {
  apps: [{
    name: 'celeb-namer',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-165-128-28.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/jimmy-studio-desktop.pem',
      ref: 'origin/master',
      repo: 'git@github.com:suitcasemedia/celeb-namer.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
