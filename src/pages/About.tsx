import React from 'react';
import profileImage from '../assets/travel/IMG_3770.jpg';

import honkaiImage from '../assets/favorites/games/Honkai Star Rail.png'
import stardewImage from '../assets/favorites/games/Stardew Valley.jpg'
import luigiImage from '../assets/favorites/games/Luigis Mansion.jpg'
import pokemonImage from '../assets/favorites/games/Pokemon Alpha Sapphire.jpg'

import eeaaoImage from '../assets/favorites/movies/EEAAO.jpg'
import parasiteImage from '../assets/favorites/movies/Parasite.jpeg'
import killBillImage from '../assets/favorites/movies/Kill Bill.webp'
import silentVoiceImage from '../assets/favorites/movies/A Silent Voice.webp'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand">
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-teal mb-4">About Me</h1>
            <p className="text-xl text-lighterBlue max-w-3xl mx-auto">
              Not everything has to be so boring. Find out what makes me, me and what I find fun!
            </p>
          </div>

          {/* Main About Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Image and Quick Facts */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-teal shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Cesar J. H."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-white p-6 rounded-xl border-2 border-coral shadow-lg">
                <h3 className="text-2xl font-bold text-lightBlue mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-navy">
                  <li className="flex items-start gap-3">
                    <span className="text-teal font-bold">📍</span>
                    <span>Based in Seattle, WA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal font-bold">💼</span>
                    <span>Assistant Store Manager @ Tommy Bahama</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal font-bold">🎓</span>
                    <span>New Grad CS from UW Bothell</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Intro */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border-2 border-coral shadow-lg">
                <h2 className="text-3xl font-bold text-lightBlue mb-6">CJH 100: Intro</h2>
                <div className="space-y-4 text-navy leading-relaxed">
                  <p>
                    Hello and Welcome! If you've made it this far I give you many thanks. 
                    Hats off to you for clicking on another page of mine.
                    It means a lot to me that you're interested in someone un-uniquely unique like myself.
                  </p>
                  <p>
                    Now on to the main point of this section. Who am I? Who is Cesar? What is a '<i>Cesar</i>'?
                    What will I have for lunch tomorrow? 
                  </p>
                  <p>
                    Great questions all around! 
                    <small><i> (Except for the last one, I don't even remember what I had for breakfast this morning).</i></small>
                  </p>
                  <p>
                    To keep it short, I'm simply a free-spirited individual who loves living life to the fullest.
                    I don't believe that there's a 'right' way to do anything. There is no set path to success or happiness.
                    I've made it this far by being 'wrong' and stumbling around in the dark.
                  </p>
                </div>
              </div>
            </div>

          {/* Bottom - Info */}
          <div className="bg-white p-8 rounded-xl border-2 border-coral shadow-lg mb-20">
            <h2 className="text-3xl font-bold text-lightBlue text-center mb-8">A Little About Me</h2>
            <div className="space-y-4 text-navy leading-relaxed">
              <p>
                Originally I was born and raised in California for 2/3rds of my life.
                I loved the people and culture and still reminisce about it often
              <p></p>
                <small><i>(I still think about the palateros on street corners selling raspados).</i></small>
              </p>
              <p>
                I moved to Washington during my high school years and have been here ever since.
                The change of pace and scenery was refreshing and eye-opening. The pitter-patter of rain
                and the lush greenery was so relaxing. 
                I've come to love the Pacific Northwest for its natural beauty and laid-back lifestyle.
              </p>
              <p>
                Now that I've graduated from UW, I'm finding myself back with a lot more free time on my hands.
                I'm trying to pick up some of my older hobbies up again like reading, gaming, and traveling.
                I find myself imagining what could be and where I could go now that I have more freedom.

              </p>
            </div>
          </div>

          </div>

          {/* Favorites Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-lightBlue text-center mb-12">My Favorites</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Favorite Games */}
              <div className="bg-white p-6 rounded-xl border-2 border-coral shadow-lg">
                <h3 className="text-2xl font-bold text-teal mb-6 flex items-center gap-3">
                  🎮 Favorite Games
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={honkaiImage}
                        alt="Honkai Star Rail"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Honkai Star Rail</h4>
                    <p className="text-xs text-lighterBlue">Only gacha I've spent money on</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={pokemonImage} 
                        alt="Pokémon Alpha Sapphire"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Pokémon Alpha Sapphire</h4>
                    <p className="text-xs text-lighterBlue">#1 Beautifly User</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={stardewImage}
                        alt="Stardew Valley"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Stardew Valley</h4>
                    <p className="text-xs text-lighterBlue">Most Time Spent Fishing</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-square rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={luigiImage} 
                        alt="Luigi's Mansion"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Luigi's Mansion</h4>
                    <p className="text-xs text-lighterBlue">Most Replayed</p>
                  </div>
                </div>
              </div>

              {/* Favorite Movies */}
              <div className="bg-white p-6 rounded-xl border-2 border-coral shadow-lg">
                <h3 className="text-2xl font-bold text-teal mb-6 flex items-center gap-3">
                  🎬 Favorite Movies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={silentVoiceImage} 
                        alt="A Silent Voice"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">A Silent Voice</h4>
                    <p className="text-xs text-lighterBlue">Most Rewatched</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={parasiteImage} 
                        alt="Parasite"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Parasite</h4>
                    <p className="text-xs text-lighterBlue">Most Attention-Grabbing</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={eeaaoImage} 
                        alt="Everything, Everywhere, All At Once"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Everything, Everywhere, All At Once</h4>
                    <p className="text-xs text-lighterBlue">Most Prone to Tears</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src={killBillImage} 
                        alt="Kill Bill"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Kill Bill</h4>
                    <p className="text-xs text-lighterBlue">The Only Action Movie I Always Recommend</p>
                  </div>
                </div>
              </div>

              {/* Favorite TV Shows */}
              <div className="bg-white p-6 rounded-xl border-2 border-coral shadow-lg">
                <h3 className="text-2xl font-bold text-teal mb-6 flex items-center gap-3">
                  📺 Favorite TV Shows
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src="" 
                        alt="Haunting of Hill House"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Haunting Of Hill House</h4>
                    <p className="text-xs text-lighterBlue">Favorite Horror</p>
                  </div>

                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src="" 
                        alt="Fullmetal Alchemist: Brotherhood"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Fullmetal Alchemist: Brotherhood</h4>
                    <p className="text-xs text-lighterBlue">Favorite Anime</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src="" 
                        alt="Avatar: The Good Place"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">The Good Place</h4>
                    <p className="text-xs text-lighterBlue">Profoundly good</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="aspect-[2/3] rounded-lg overflow-hidden mb-2 border-2 border-coral">
                      <img 
                        src="" 
                        alt="Frieren: Beyond Journey's End"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-navy text-sm">Frieren: Beyond Journey's End</h4>
                    <p className="text-xs text-lighterBlue">Favorite Ongoing</p>
                  </div>
                </div>
              </div>

              {/* Favorite Music/Artists */}
              <div className="bg-white p-8 rounded-xl border-2 border-coral shadow-lg">
                <h3 className="text-2xl font-bold text-teal mb-6 flex items-center gap-3">
                  🎵 Favorite Songs
                </h3>
                <ul className="space-y-3 text-navy mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-lightBlue font-bold">•</span>
                    <div>
                      <span className="font-semibold"></span>
                      <p className="text-sm text-lighterBlue"></p>
                    </div>
                  </li>
                </ul>
                <a
                  href="https://open.spotify.com/user/vjasf8whixiqy2gv1bz3jos00?si=LzMwTwGBRtejHX_yLchdvQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Follow me on Spotify
                </a>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="bg-white p-8 rounded-xl border-2 border-coral shadow-lg mb-20">
            <h2 className="text-3xl font-bold text-lightBlue text-center mb-8">Skills & Interests</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-teal mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">JavaScript</span>
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">TypeScript</span>
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">React</span>
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">Node.js</span>
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">HTML/CSS</span>
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">Tailwind</span>
                  <span className="px-4 py-2 bg-coral text-navy rounded-full font-medium">Git</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal mb-4">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-lightBlue text-white rounded-full font-medium">Travel</span>
                  <span className="px-4 py-2 bg-lightBlue text-white rounded-full font-medium">Gaming</span>
                  <span className="px-4 py-2 bg-lightBlue text-white rounded-full font-medium">Reading</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-teal to-lightBlue p-12 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Connect!</h2>
            <p className="text-white text-lg mb-6">
              Interested in working together or just want to chat? I'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-teal rounded-lg font-bold text-lg hover:bg-coral hover:text-white transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;