import { NextResponse } from 'next/server';

import userData from '../userData/users.json';
import wrongData from '../userData/wrongLogin.json';


export async function GET(request) {
    return NextResponse.json(userData);
}

export async function POST(request) {

    // Login root 

    const { username, password } = await request.json();

    let singleUser;

    // Checks all user data and passwords if they match

    const checkUsername = userData.find(el => el.username === username);

    const checkPassword = userData.find(el => el.password === password);

    if (checkUsername && checkPassword) {

        for (let i in userData) {

            let el = userData[i];

            if (el.username === username) {
                if (el.password === password) {
                    singleUser = el;
                } else {

                    // If password and user are true ,but from diffrent objects

                    singleUser = { status: 'error', message: 'Wrong password' };
                }
            }

        }

        return NextResponse.json(singleUser);
    } else {
        return NextResponse.json(wrongData);
    }

}