const User = require("../../models/User");
const EventProject = require("../../models/EventProject");

const authCheck = require("../functions/authCheck");

const removeEventProject = async (parent, args, context, info) => {
	authCheck(context);
	try {
		const user = await User.findOne({ _id: context.userId });
		if (!user) throw new Error("User does not exist");

		let eventProject = await EventProject.findOne({ _id: args.id });
		if (!eventProject) throw new Error("Event Project not found");

		if (!(eventProject.creator !== context.userId)) {
			throw new Error("User cannot delete project they didn't create");
		}

		await EventProject.deleteOne({ _id: args.id });
		return eventProject;
	} catch (e) {
		throw e;
	}
};

module.exports = removeEventProject;
