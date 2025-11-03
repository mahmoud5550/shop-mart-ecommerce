'use server'

export default async function forgetPassword(email: string) {
    const response = await fetch(`${process.env.URL_API}/auth/forgotPasswords`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}