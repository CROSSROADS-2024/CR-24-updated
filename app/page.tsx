"use client";
import { inter, mohave, poppins } from "./lib/fonts";
import "./home.css";
import Image from "next/image";
import LogoLanding from "../public/logo_landing.svg";
import Tiger from "../public/tiger.png";
import CountdownTimer from "./components/Countdown";
import Marquee from "react-fast-marquee";
import CollegeAnimate from "./components/CollegeAnimate";
import Link from "next/link";
import { RiInstagramLine, RiMailLine } from "react-icons/ri";
import OurLegacyVideo from "./components/OurLegacyVideo";
import AnimatedSponsor from "./components/AnimatedSponsor";
import CampusAmbassadorBox from "./components/CampusAmbassador";
import FestCard from "./components/FestCard";
import EventBox from "./components/EventBox";
import Camera from "./components/Camera";

export default function Home() {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <section
        id="landing"
        className="flex  min-h-[85vh] w-full flex-col py-10 pt-[90px]"
      >
        <div className="flex flex-1 flex-col items-center justify-center py-6 sm:flex-row sm:gap-10">
          <Image
            className="w-[200px] max-w-[300px] rotate-90 object-contain sm:w-[200px] sm:rotate-0 md:w-[200px] lg:w-[300px]"
            src={Tiger}
            alt="tiger image"
          />
          <Image
            className="w-[200px] max-w-[300px] object-contain md:w-[200px] lg:w-[300px]"
            src={LogoLanding}
            alt="logo image"
          />
          <Image
            className="w-[200px] max-w-[300px] rotate-90 scale-x-[-1] object-contain sm:w-[200px] sm:rotate-0 md:w-[200px] lg:w-[300px]"
            src={Tiger}
            alt="tiger image"
          />
        </div>
        <CountdownTimer />
      </section>
      <Marquee autoFill className="flex gap-3 border-y border-gray py-4">
        <div className="mx-5 h-3 w-3 rounded-full bg-pink" />
        <p className="text-xl">Techno-cultural fest of MBCET</p>
        <div className="mx-5 h-3 w-3 rounded-full bg-pink" />
        <p className="text-xl">#ChromaticChaos</p>
      </Marquee>
      <section className="relative mt-11 flex  flex-col items-center justify-between">
        <div className="flex h-full flex-1 flex-col items-center justify-end">
          <div className="relative flex flex-col items-center justify-center md:m-5">
            <Image
              src="/star.png"
              alt=""
              width={1080}
              height={1080}
              className="absolute -left-[40px] -top-[30px] h-[30px] w-[30px] "
              style={{ animationDuration: "4s" }}
            />

            <h1 className="heading">OUR LEGACY</h1>
            <h2 className="heading flex gap-1 text-3xl text-white">
              2005 - <Image width={60} height={60} src="/infinity.svg" alt="infinity" />
            </h2>
            <Image
              src="/star.png"
              alt=""
              width={1080}
              height={1080}
              className="absolute -bottom-[10px] -right-[20px] h-[30px] w-[30px] "
              style={{ animationDuration: "4s" }}
            />
          </div>
          <p className="prose mt-6 text-center text-white">
            The Techno-Cultural festival of MBCET aka, Crossroads has become an integral
            part of the cultural calendar of Trivandrum since its launch in 2005. From
            there it&rsquo;s centered to bring together students from different
            backgrounds and cultures to celebrate their shared passion for creativity and
            innovation.
          </p>
        </div>
        <CollegeAnimate />

        <Image
          src="/wave.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute  bottom-0 z-[1] w-full "
        />
      </section>
      <section className="relative h-full w-full">
        <OurLegacyVideo />
        <Image
          src="/wave.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute  bottom-0 z-[1] w-full  my-5"
        />
      </section>

      <section
        id="Events"
        className=" flex h-full w-full flex-col items-center justify-between gap-10 md:gap-[100px]"
      >
       
        <CampusAmbassadorBox />
        <EventBox />
      </section>
      <section className="relative flex flex-col items-center justify-center gap-16">
      <Image
          src="/wave.png"
          alt=""
          width={1080}
          height={1080}
          className="absolute  top-0 z-[1] w-full rotate-180 mt-5"
        />
        <div className="w-full max-w-screen-md">
          <Camera />
        </div>
        <Marquee autoFill className="flex gap-3 border-y border-gray py-4">
          <div className="mx-5 h-3 w-3 rounded-full bg-pink" />
          <p className="text-xl">#ThrowbackCR</p>
          <div className="mx-5 h-3 w-3 rounded-full bg-pink" />
        </Marquee>
      </section>
      <section
        id="home_dept_fests"
        className="mt-10 flex flex-col items-center justify-between"
      >
        <div className="relative my-4">
          <Image
            className="absolute -left-4 top-0"
            src="/star.png"
            width={24}
            height={24}
            alt="star"
          />
          <p className="w-[100px] -skew-y-6 text-center font-pecita text-2xl">
            coming soon!
          </p>
          <Image
            className="absolute -right-4 bottom-0"
            src="/star.png"
            width={24}
            height={24}
            alt="star"
          />
        </div>
        <h1 className="heading">DIVE INTO</h1>
        <p>the technical fests of MCBET</p>
        <div className="my-10 mt-[150px] flex h-full flex-col gap-8 md:flex-row">
          <FestCard
            src="/hash.png"
            name="CSE Dept. Tech Fest"
            primary="#FF6B01"
            secondary="#CC3272"
          />
          <FestCard
            src="/adharva.png"
            name="ECE Dept. Tech Fest"
            primary="#CC3272"
            secondary="#FF6B01"
          />
          <FestCard
            src="/trydan.png"
            name="EEE Dept. Tech Fest"
            primary="#FF6B01"
            secondary="#CC3272"
          />
          <FestCard
            src="/utbav.png"
            name="CE Dept. Tech Fest"
            primary="#CC3272"
            secondary="#FF6B01"
          />
        </div>
      </section>
      <section className="h-full w-full">
        <AnimatedSponsor />
      </section>

      <div>
        <section className="home_footer bg-[#A7295E]">
          <div className="text-area">
            <div className={`${poppins.className} getintouch`}>Get in touch</div>
            <div className={`${poppins.className} email`}>crossroads@mbcet.ac.in</div>

            <div className="icon-area">
              <div className="icons">
                <Link href="https://www.instagram.com/crossroadsmbcet/?hl=en">
                  <RiInstagramLine color="white" size={"50px"} />
                </Link>
                <Link href="mailto:crossroads@mbcet.ac.in">
                  <RiMailLine color="white" size={"50px"} />
                </Link>
              </div>
              <div className="seperator" />
              <div className="nav">
                <a href="/" className="text">
                  HOME
                </a>
                <a href="#events" className="text">
                  EVENTS
                </a>
              </div>
            </div>
            <div className="copyright">
              <h3>© 2024 CROSSROADS</h3>
              <h4>All Rights Reserved</h4>
            </div>
          </div>
          <div className="rainbow">
            <Image src="/tiger_footer.png" alt="tiger footer" height={442} width={337} />
          </div>
        </section>
      </div>
    </main>
  );
}
