import { Router } from 'express';
import { userCtrl } from '../controllers';
const router = Router();
/* =================================
User Routes

"/login"                login

"/signup"               signup

"/forgot-password"      forgotPassword

"/get-user"             getUserSession

================================= */

router.route('/login').post(userCtrl.login);
router.route('/signup').post(userCtrl.signup);
router.route('/forgot-password').post(userCtrl.forgotPassword);
router.route('/get-user').post(userCtrl.getUserSession);

export default router;
