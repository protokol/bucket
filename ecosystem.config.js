module.exports = {
	apps: [
		{
			name: "bucket-server",
			script: "dist/main.js",

			// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
