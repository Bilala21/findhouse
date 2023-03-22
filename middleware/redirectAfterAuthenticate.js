
const redirectAfterAuthenticate = (user,router) => {
    console.log(user);
    if(Number(user.data.role) === 1){
        router.replace("/login")
    }
    else if(Number(user.data.role) === 0){
        router.replace("/")
        console.log(user.data.role,'user.data.role');
    }
};

export default redirectAfterAuthenticate;