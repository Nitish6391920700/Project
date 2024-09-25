import React from "react";
import { FaInstagram } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 2,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 3,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 4,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 5,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 6,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 7,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  {
    id: 8,
    name: "Maxwell Doe",
    position: "Instructor",
    image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
    socialLinks: {
      twitter: "http://www.twitter.com/",
      facebook: "http://www.facebook.com/",
      instagram: "http://www.instagram.com/",
      email: "http://www.gmail.com/"
    }
  },
  
];

const InstructorCard = () => {
  return (
    <div className="flex flex-wrap justify-evenly bg-blue-50 py-10 px-4"
    style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold  text-cyan-400 mb-4">Meet Our Expert Instructors</h2>
        <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div key={instructor.id} className=" p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-48 h-48 mb-4">
              <img className="rounded-full object-cover w-full h-full" src={instructor.image} alt={instructor.name} />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700">{instructor.name}</h3>
            <p className="text-xl  text-cyan-400">{instructor.position}</p>
            <div className="flex mt-4 space-x-4">
              <a href={instructor.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <img  className="w-5 pt-1" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" />
              </a>
              <a href={instructor.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <img className="w-5 pt-1" src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" />
              </a>
              <a href={instructor.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <img className="w-5 pt-1" src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="Email" />
              </a>
              <a href={instructor.socialLinks.email} target="_blank" rel="noopener noreferrer">
                <img className="w-5 pt-1" src="https://www.svgrepo.com/show/223047/gmail.svg" alt="Email" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCard;
