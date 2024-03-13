class UserController {

    constructor(createUser, findAllUsers) {
        this.createUser = createUser;
        this.findAllUsers = findAllUsers;
    }

    async create(req, res) {
        try {
            const { name, email } = req.body;
            const user = await this.createUser.execute(name, email);
            return res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async index(req, res) {
        try {
            const users = await this.findAllUsers.execute();
            return res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;