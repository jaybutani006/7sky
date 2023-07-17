import React from "react";
import Download from "../../Components/Download/Download";
import Hero from "../../Sections/Home/Hero/Hero";
import HowDoesItWorks from "../../Sections/Home/HowDoesItWorks/HowDoesItWorks";
import LatestProfiles from "../../Sections/Home/LatestProfiles/LatestProfiles";
import WhyChooseUs from "../../Sections/Home/WhyChooseUs/WhyChooseUs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <HowDoesItWorks />
      <LatestProfiles />
      <Download />
      <div className="home__content">
        <h3>Best Matrimony Website and App in India </h3>
        <p>
          Finding an ideal, compatible life partner is a struggle. It always has
          been. Pawan Gupta and Rahul Namdev, MIT Alums and co-founders of
          Betterhalf, learned it the hard way. Both were searching for their
          life partner in 2016 when they were corporate employees. That’s when
          they thought of launching Betterhalf – A matrimony app that can work
          as a matchmaker for Indians without any interference from relatives
          and employees.
          <br />
          Betterhalf uses the power of Artificial Intelligence to help people
          meet compatible matches with whom they can spend their life.
          Headquartered in Bengaluru, Betterhalf has more than 15 lakh users and
          facilitates around two lakh new connections per month. Since our
          inception in 2016, we have made more than 10,000 marriages possible;
          soulmates who met on our app only. In 2021, our overall revenue
          touched the number of INR 5.5 crore which was a 300% increase from the
          number in the year 2020 when we earned INR 1.4 crore.
          <br />
          In May 2021, we did our Pre-series A Round where we raised $3 million
          from VC Firms such as Quiet Capital and S2 Capital. Our other
          investors include names like Kunal Shah, founder of CRED, and Saurabh
          Garb, Founder and CBO of NoBroker.
          <br />
          At Betterhalf, we believe that individuals should take charge of their
          marriage decision, as per their preferences, instead of their parents
          and relatives. With every service, we ensure you find the perfect
          match. Apart from AI Matchmaking, you can also enjoy several features
          on our matrimony website and app. To know more, keep reading!
          <br />
          Want to know more about the features, benefits, and different
          marriage-related services of Betterhalf? Well, read on and you will be
          able to know everything about the best matrimony app in India.
        </p>
        <h3> Features of Betterhalf Matrimony Website and App </h3>
        <p>
          If you are searching for your life partner, both the Betterhalf
          matrimony website and application (available both on Android and iOS)
          can be of great help to you. Several features provide people the
          much-needed flexibility to find their marriage partner. One of the
          most crucial things that we provide to our users is a safe space where
          they can put their preferences in the front and meet their compatible
          Shaadi partner soon! Besides, you can find your betterhalf as per your
          religion, marital status, mother tongue, caste, state, and even city.
          Let’s have a look at some of the prominent features of the best
          matrimony website in India mentioned below.
        </p>
        <h3>Find Your Marriage Partner by Religion</h3>
        <p>
          One of the many specialties of our country is that people from
          different religions live together in harmony. So, if you are searching
          for your partner from a particular religion, Betterhalf can help you.
          We have Buddhist, Jain, Hindu, Muslim, Christian, Parsi, and Sikh
          Matrimony pages where you can find your ideal groom or bride without
          making any compromise with your preferences.
        </p>
        <h3>Meet Your Soulmate by Caste</h3>
        <p>
          Same as different religions in our country, different people come from
          different castes who are looking for their life partners. And some
          people want to marry someone from their caste only or in a particular
          one. We, at Betterhalf matrimony, understand their needs. That’s why
          we have separate matrimony pages for different castes — Brahmin,
          Agarwal, Patel, Kshatriya, Jat, Gupta, Nair, Kayastha, etc. — where
          you can find your life partner as per your caste.
        </p>
        <h3>Search for Your Life Partner by Your Mother Tongue</h3>
        <p>
          Language plays a crucial role in any kind of matrimony. Like, it would
          be difficult for you to marry someone from Kolkata, whose mother
          tongue is Bengali whereas your mother tongue is Malayalam or Hindi.
          We’re not saying that it would be impossible for two people with
          different mother tongues. However, people usually prefer to marry
          someone with the same mother tongue.
        </p>
        <p>
          With Betterhalf matrimonial app, you can find a compatible Shaadi
          partner with a particular mother tongue. We have different matrimonial
          pages based on different mother tongues - Tamil, Telugu, Marathi,
          Kannada, Punjabi, Bengali, Urdu, Hindi, Sindhi, Malayalam, etc. Choose
          your soulmate from the desired mother tongue with one of the best
          matrimony apps in India.
        </p>
      </div>
    </div>
  );
};

export default Home;
