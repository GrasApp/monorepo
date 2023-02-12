import { UserWithDetails } from '@cd/data-access';
import {
    createResetPasswordToken, getUserByEmail, resetPasswordUsingToken,
    signIn,
    signUp
} from 'supertokens-node/recipe/emailpassword';

export async function login({ email, password }) {
    try {
        const signInUser = await signIn(email, password);
        return signInUser;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export async function signup(user: UserWithDetails) {
    try {
        const signUpUser = await signUp(user);
        if (signUpUser.status !== 'OK') throw new Error(signUpUser.status);
        return signUpUser;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export async function forgotPassword() {
    try {
        await createResetPasswordToken();
        await resetPasswordUsingToken();
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export async function getUserSession() {
    try {
        await getUserByEmail()
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}
