import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";
import Button from "./Button";

const Services = () => {
  return (
    <Section id="softwares">
      <div className="container">
        <Heading
          title="Our Softwares"
          text="Swift Bills - Smartest AI Auditor"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Swift Bills - Smart Auditor AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[25rem] ml-auto">
              <h4 className="h4 mb-4 text-n-1">
                Swift Bills - Smartest AI Auditor
              </h4>
              <p className="body-2 mb-[3rem] text-n-2">
                Revolutionizing audits with intelligent automation. Swift Bills:
                The future of auditing is here.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              <Button className="w-full" href="swiftbills">
                Book Now
              </Button>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Help Desk</h4>
                <p className="body-2 mb-[3rem] text-cyan-500">
                  Experience seamless convenience with our daily services,
                  including plumbers, electricians, cleaners, HVAC technicians,
                  and handymen. Whether its a minor repair or a major
                  installation, our trusted professionals handle all your needs
                  efficiently, ensuring top-quality service every time.
                </p>
                <Button className="relative top-10" href="helpdesk">
                  Book Now
                </Button>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">
                  Cafes, Resturants & Hotels Management
                </h4>
                <p className="body-2 mb-[2rem] text-cyan-500">
                  Streamline your cafe, restaurant, or hotel with our all-in-one
                  management system. Handle reservations, orders, inventory, and
                  staff efficiently to enhance guest satisfaction and simplify
                  daily tasks.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
              </div>
              <Button className="w-full mt-5" href="helpdesk">
                Book Now
              </Button>
            </div>
          </div>
          <div className="md:max-w-md max-w[50rem] mx-auto mb-12 lg:mb-20 mt-10 flex justify-center">
            <Button href="explore" white>
              Explore More
            </Button>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
