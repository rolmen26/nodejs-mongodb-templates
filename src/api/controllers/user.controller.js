const { createUserInteractor } = require('../../interactors/user.interactor');
const { createUserPersistence } = require('../../persistence/user.persistence');

exports.createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await createUserInteractor({
            createUserPersistence
        }, { username, password });
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};