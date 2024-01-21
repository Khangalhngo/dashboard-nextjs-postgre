import React from 'react';
import Image from 'next/image';
import bgimage from "../../assets/loginback.jpg"
const Login = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">

        <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image src={bgimage} alt="" className="w-full h-full object-cover" width={1000} height={1000} draggable={false} quality={100} />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

          <div className="w-full h-100">

            <h1 className="text-xl font-bold">Socialense</h1>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Нэвтрэх</h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Нэвтрэх нэр</label>
                <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete='' required />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Нууц үг</label>
                <input type="password" name="" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Нууц үгээ мартсан?</a>
              </div>

              <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">Нэвтрэх</button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />
            <div className="text-center">
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-center">
                Бүртгүүлэх
              </a>
            </div>


            <p className="text-sm text-gray-500 mt-12">&copy; 2024 Gukhan - All Rights Reserved.</p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Login;
