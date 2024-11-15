'use server';

export async function signUp(prevState, formData) {
    const data = {
        name: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
    }

    console.log(data);

    return data;
}