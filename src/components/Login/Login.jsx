import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const {signIn,signWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSign = () =>{
      signWithGoogle()
      .then(result =>{
        console.log(result.user)
      })
      .catch(error =>{
        console.error(error , 'invalid message')
      })
    }

    const handleSignIn = (e) =>{
        e.preventDefault()

        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password)

        // sign in user 
        signIn(email,password)
        .then(res =>{
            console.log(res.user)
            e.target.reset()
            navigate('/')

        })
        .catch(error =>{
            console.log(error,"invalid error")
        })
    } 
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"
                name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" 
                name="password"   className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New here ? please register <Link to='/register'>Register</Link></p>
             <p>
             <button onClick={handleGoogleSign} className="btn btn-ghost">Google</button>
             </p>
         
          </div>
        </div>
      </div>
    );
};

export default Login;