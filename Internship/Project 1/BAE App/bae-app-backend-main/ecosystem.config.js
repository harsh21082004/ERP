module.exports = {
  apps: [
    {
      name: 'bae-app-backend',
      script: 'npm',
      args: 'run start',
      watch: false,
      cwd: '/home/ubuntu/bae-app-backend',
      out_file: '/home/ubuntu/bae-app-backend/app/out.log',
      err_file: '/home/ubuntu/bae-app-backend/app/err.log',
      merge_logs: true,
      instances: 1,
      exec_mode: 'cluster',
    },
  ],
};
