import React from 'react';
import { Briefcase, GraduationCap, Award, Code, Download } from 'lucide-react';
import resumePdf from '../assets/downloads/CesarHerreraResume2025.pdf';
import transcriptPdf from '../assets/downloads/CesarHTranscript.pdf';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand">
      <main className="pt-20">
        <section className="max-w-4xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-teal mb-4">Resume</h1>
            <p className="text-lighterBlue text-lg">A snapshot of my professional journey</p>
            <a href={resumePdf} download className="mt-6 inline-flex px-6 py-3 bg-coral hover:bg-teal text-navy rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto">
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-teal" />
              <h2 className="text-3xl font-bold text-lightBlue">Work Experience</h2>
            </div>
            
            <div className="space-y-8">
              {/* Tommy Bahama */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-teal shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy">Assistant Store Manager</h3>
                  <span className="text-lighterBlue font-medium">July 2023 - Present</span>
                </div>
                <p className="text-teal font-medium mb-3">Tommy Bahama</p>
                <ul className="list-disc list-inside space-y-2 text-navy">
                  <li>Lead daily operations and team of associates in a high-volume retail setting</li>
                  <li>Trained staff on POS systems, SOP compliance, and inventory control procedures</li>
                  <li>Oversaw cash handling, prepared daily deposits, and maintained accurate tills while completing change orders</li>
                  <li>Implemented visual merchandising strategies to enhance customer experience and drive sales</li>
                  <li>Collaborated with management to analyze sales data and develop strategies for achieving targets</li>
                </ul>
              </div>

              {/* DKNY */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-coral shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy">Manager In Training</h3>
                  <span className="text-lighterBlue font-medium">February 2020 - June 2023</span>
                </div>
                <p className="text-teal font-medium mb-3">DKNY</p>
                <ul className="list-disc list-inside space-y-2 text-navy">
                  <li>Supervised team performance and led sales training</li>
                  <li>Assisted with hiring, onboarding, and training to maintain consistent customer service</li>
                  <li>Improved stockroom organization and inventory managment by implementing consistent BOH policies</li>
                  <li>Top seller for 4 months prior to promotion from Sales Associate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-teal" />
              <h2 className="text-3xl font-bold text-lightBlue">Education</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-lightBlue shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy">Bachelor of Science in CS & Software Engineering</h3>
                  <span className="text-lighterBlue font-medium">Graduation: December 2025</span>
                </div>
                <p className="text-teal font-medium mb-2">University of Washington Bothell</p>
                <p className="text-navy">Dean's List Recipient: Autumn 2022 - Winter 2023 - Spring 2023 - Autumn 2023</p>
                <p className="text-navy">Cumulative GPA: 3.77</p>
                <a href={transcriptPdf} download className="mt-4 inline-flex px-4 py-2 bg-lightBlue hover:bg-teal text-white rounded-lg font-medium transition-colors items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Transcript
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-teal" />
              <h2 className="text-3xl font-bold text-lightBlue">Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-teal mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">C++</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">Git</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">Microsoft Word</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">Microsoft Excel</span>
                  <span className="px-3 py-1 bg-coral text-navy rounded-full text-sm font-medium">Microsoft PowerPoint</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-teal mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Leadership</span>
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Communication</span>
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Problem Solving</span>
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Teamwork</span>
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Time Management</span>
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Coaching</span>
                  <span className="px-3 py-1 bg-lightBlue text-white rounded-full text-sm font-medium">Technical Communication</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications/Awards Section */}
          
        </section>
      </main>
    </div>
  );
};

export default Resume;