class Users{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPwd(){
        return `${this.password}encrypted`
    }

    login(){
        if(this.username==='wasi' && this.password ==='123'){
            return 'Logged In!'
        }else{
            return 'User not found'
        }
    }

}

const user = new Users('wasi','wasi@mail.com','123')
console.log(user.login())