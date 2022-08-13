module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        const generalchat = client.channels.cache.get('742014050115911702');
        generalchat.send('Battlecruiser Operational!');
	},
};