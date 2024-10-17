import onboard01 from '@/assets/images/onboard01.png';
import onboard02 from '@/assets/images/onboard02.jpg';
import onboard03 from '@/assets/images/onboard03.jpg';
import signUpCar from '@/assets/images/signup-car.png';
import email from "@/assets/icons/email.png";
import check from "@/assets/images/check.png";
import lock from "@/assets/icons/lock.png";
import person from "@/assets/icons/person.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";

export const images = {
    onboard01,
    onboard02,
    onboard03,
    signUpCar,
    check
}

export const icons = {
    email,
    lock,
    person,
    google,
    home
  };

  
export const onboarding = [
  {
    id: 1,
    title: "The perfect ride is just a tap away!",
    description:
      "Your journey begins with Ryde. Find your ideal ride effortlessly.",
    image: images.onboard01,
  },
  {
    id: 2,
    title: "Best car in your hands with Ryde",
    description:
      "Discover the convenience of finding your perfect ride with Ryde",
    image: images.onboard02,
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest.",
    image: images.onboard03,
  },
];

export const data = {
  onboarding,
};