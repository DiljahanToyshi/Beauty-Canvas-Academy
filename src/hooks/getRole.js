export const getRole = async email =>{
    const response = await  fetch(`https://assignment-12-server-delta-six.vercel.app/students/${email}`,
    )
    const user = await response.json();
    console.log(user);
    return user?.role
}