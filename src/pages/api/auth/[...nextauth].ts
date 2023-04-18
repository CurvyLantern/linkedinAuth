import NextAuth, { AuthOptions } from 'next-auth';
// import GithubProvider from "next-auth/providers/github"
import LinkedInProvider from 'next-auth/providers/linkedin';

const linkedInClientId = process.env.LINKEDIN_CLIENT_ID;
const linkedInClientSecret = process.env.LINKEDIN_CLIENT_SECRET;

if (!linkedInClientId || !linkedInClientSecret) {
  throw new Error('env variables undefined');
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    LinkedInProvider({
      clientId: linkedInClientId,
      clientSecret: linkedInClientSecret,
    }),
  ],
};
export default NextAuth(authOptions);
