import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  debug: true,
  providers: [
    Credentials({
      name: 'App Invitacion Digital',
      credentials: {
        password:{
          label: 'Password',
          type: 'password'
        }
      },
      authorize(credentials) {
        console.log(credentials);
        return {
          id:2,
          name: 'Alfred'
        }
      }
    })
  ],

})