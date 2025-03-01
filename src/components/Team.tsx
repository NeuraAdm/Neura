import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Juan Pablo Arias',
    role: 'CEO & Founder - Ingeniero de Software',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    bio: 'Juan Pablo es un ingeniero de software con más de 5 años de experiencia en desarrollo de software y liderazgo de equipos.',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: '#',
      github: '#',
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nuestro Equipo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Conoce nuestro equipo de expertos.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nuestro equipo de expertos en tecnología y negocios trabajan juntos para ofrecer soluciones digitales de vanguardia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-4 sm:grid-cols-2">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="space-y-4">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-gray-900">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </a>
                    </li>
                    <li>
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </li>
                    <li>
                      <a href={member.social.github} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-5 w-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;