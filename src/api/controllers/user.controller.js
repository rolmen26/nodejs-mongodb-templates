class UserController {
    constructor(createUser) {
        this.createUser = createUser;
    }

    async create(req, res) {
        try {
            const { name, email } = req.body;
            const user = this.createUser.execute(name, email);
            console.log("safffsf");
            return res.status(201).json(user);

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;