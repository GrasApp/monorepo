import { forgotPassword, getUserSession, login, signup } from '../auth/supertokens';
/* =================================
UserController - controller class for user actions

members:
login
signup
forgotPassword
getUserSession

================================= */

export default class UserController {
    static async login(req, res) {
        try {
            let { email, password } = req.body;
            const user = await login({ email, password });
            res.status(200).json(user);
        } catch (error) {
            console.log('API error: ', error);
            res.status(500).json({ error });
        }
    }

    static async signup(req, res) {
        try {
            const user = await signup();
            res.status(200).json(user);
        } catch (error) {
            console.log('API error: ', error);
            res.status(500).json({ error });
        }
    }
    static async forgotPassword(req, res) {
        try {
            const user = await forgotPassword();
            res.status(200).json(user);
        } catch (error) {
            console.log('API error: ', error);
            res.status(500).json({ error });
        }
    }
    static async getUserSession(req, res) {
        try {
            const user = await getUserSession();
            res.status(200).json(user);
        } catch (error) {
            console.log('API error: ', error);
            res.status(500).json({ error });
        }
    }
}
