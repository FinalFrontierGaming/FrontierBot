const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eventcreate')
		.setDescription('Create an event and notify the server')
		.addStringOption(option =>
			option.setName('eventname')
			.setDescription('The Name of the Event')
			.setRequired(true))
		.addStringOption(option =>
			option.setName('eventdescr')
			.setDescription('Describe the event')
			.setRequired(true)),
	async execute(interaction) {
		const eventname = data.eventname;
		const eventdescr = data.eventdescr;
		await interaction.reply(`${eventname} and  ${eventdescr}`);
	},
};