import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        langSwitcher: {
          title: "Page Not Found",
          subtitle:
            "The page you are looking for doesn't exist or another error occurred. Go back, or remove your current url until / to choose a new direction.",
        },
        title: "Humans Search Engine",
        counterMatch:
          "To load the username and his company must be not less than 1 and no more than 10",
        findBtn: "Find",
        welcomeUser: "Welcome",
        userExist: "already exists",
        homePage: {
          title: "Home Page",
          titleLink: "Home",
        },
        notLogIn: "You are not logged in",
        signOut: "Sign Out",
        username: "Username",
        password: "Password",
        formError: {
          loginLength: "Username must contain 5 characters",
          loginInvalid: "Username is invalid",
          passLength: "Password must contain 5 characters",
          passInvalid: "Password is invalid",
        },
        hintAccountData: "Login: admin, pass: 12345",
        loginBtn: "Login",
        newsPage: {
          title: "News Page",
          titleLink: "News",
          loadMoreBtn: "Load more",
          noQuotes: "It looks like you don't want to see any quotes.",
          oops: "Oops ;)",
          noMatchAuthor: "No matches found.",
          searchPlaceholder: "Search",
          modalPlaceholder: "Search author",
        },
        gamesPage: {
          namePlayer: "Enter your name.",
          nameOpponent: "Enter the name of your opponent.",
          title: "The Showdown",
          titleLink: "Games",
          fightDescription:
            "The winner is the one who presses the button the most times.",
          fightControl: {
            enter: "start the game.",
            escape: "finish the game.",
            keyA: "left player control.",
            keyL: "right player control.",
            press: "Press",
          },
          winner: "Winner",
        },
        profilePage: {
          title: "Profile Page",
          titleLink: "Profile",
          logInToViewProfilePage: "You must log in to view the page at",
          description:
            "Any of your confidential information could be accessible on this page.",
        },
      },
    },
  },
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
