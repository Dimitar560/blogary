import { NextResponse } from 'next/server';

import newUsers from '../userData/newUsers.json';
import userData from '../userData/users.json';
import wrongConfirmPass from '../userData/wrongConfirmPass.json';
import userExists from '../userData/userExists.json';
import emptyFields from '../userData/emptyFields.json';
import passExists from '../userData/passwordExists.json';


export async function POST(request) {

    // Register new user

    const { username, password, cpassword } = await request.json();

    const newUser = {
        username,
        password,
        status: 'ok'
    };

    let checkConfirmPass;
    let checkLength;
    let errorData;

    // Checks if the user already exists and if the confirm password and password match

    const checkUsername = userData.find(el => el.username === username);

    const checkPassword = userData.find(el => el.password === password);

    if (checkUsername) {
        errorData = userExists;
    }

    if (checkPassword) {
        errorData = passExists;
    }

    if (cpassword.length < 3 && password.length < 3 || username.length < 3) {
        checkLength = true;
        errorData = emptyFields;
    }

    if (cpassword !== password) {
        checkConfirmPass = true;
        errorData = wrongConfirmPass;
    }

    if (!checkUsername && !checkPassword && !checkConfirmPass && !checkLength) {
        userData.push(newUser);
        console.log(newUsers);
        return NextResponse.json({ status: 'ok', userData });
    } else {
        return NextResponse.json(errorData);
    }

}