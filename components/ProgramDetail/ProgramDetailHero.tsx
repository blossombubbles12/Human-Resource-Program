"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProgramDetailHeroProps {
  program: any;
}

const ProgramDetailHero = ({ program }: ProgramDetailHeroProps) => {
  // Early return if program is not loaded
  if (!program) {
    return (
      <section className="relative py-20 lg:py-25 xl:py-30 overflow-hidden bg-gradient-to-br from-primary to-blue-600">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Most Popular":
        return "bg-gradient-to-r from-orange-500 to-orange-600";
      case "Executive Track":
        return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "Degree Program":
        return "bg-gradient-to-r from-red-500 to-red-600";
      case "Hot Topic":
        return "bg-gradient-to-r from-green-500 to-green-600";
      case "Industry Focused":
        return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Legal Focus":
        return "bg-gradient-to-r from-gray-600 to-gray-700";
      default:
        return "bg-gradient-to-r from-primary to-blue-600";
    }
  };

  return (
    <section className={`relative py-20 lg:py-25 xl:py-30 overflow-hidden bg-gradient-to-br ${program?.color || 'from-primary to-blue-600'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/images/shape/shape-dotted-light.svg')] opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-16 h-32 w-32 rounded-full bg-white/5 backdrop-blur-sm"
        />
      </div>

      <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="text-white"
            >
              {/* Badge */}
              <div className="mb-6">
                {program?.badge && (
                  <div className={`inline-block rounded-full px-4 py-2 text-sm font-semibold text-white ${getBadgeColor(program.badge)}`}>
                    {program.badge}
                  </div>
                )}
              </div>

              {/* Program Type */}
              <span className="mb-4 block font-medium uppercase text-white/80 tracking-wider">
                {program?.type || 'Program'}
              </span>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                {program?.title || 'Professional Development Program'}
              </h1>

              {/* Subtitle */}
              <p className="mb-8 text-xl leading-relaxed text-white/90 lg:text-2xl">
                {program?.subtitle || 'Advance your career with industry-leading education'}
              </p>

              {/* Key Details */}
              <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 rounded-lg bg-white/10 backdrop-blur-sm p-3">
                    <svg className="mx-auto h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm text-white/80">Duration</div>
                  <div className="font-semibold text-white">{program?.duration || 'Flexible Duration'}</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 rounded-lg bg-white/10 backdrop-blur-sm p-3">
                    <svg className="mx-auto h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-white/80">Level</div>
                  <div className="font-semibold text-white">{program?.level || 'All Levels'}</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 rounded-lg bg-white/10 backdrop-blur-sm p-3">
                    <svg className="mx-auto h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-white/80">Format</div>
                  <div className="font-semibold text-white">{program?.format || 'Online'}</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 rounded-lg bg-white/10 backdrop-blur-sm p-3">
                    <svg className="mx-auto h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm text-white/80">Next Start</div>
                  <div className="font-semibold text-white">{program?.nextStart || 'Rolling Admissions'}</div>
                </div>
              </div>

              {/* Rating and Students */}
              <div className="mb-8 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/90">{program?.rating || '4.8'} ({program?.students?.toLocaleString() || '1,000+'} students)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.location.href = `/enrollment?program=${program?.id || 'default'}`}
                  className="rounded-full bg-white px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                >
                  Enroll Now - ${program?.price?.toLocaleString() || '2,499'}
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = `/api/download/brochure/${program?.id || 'default'}`;
                    link.download = `${program?.title || 'Program'}-Brochure.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20"
                >
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Info Card */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 30,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
              <h3 className="mb-6 text-xl font-bold text-black">Program Highlights</h3>
              
              {/* Pricing */}
              <div className="mb-6 text-center">
                <div className="text-3xl font-bold text-black">
                  ${program?.price?.toLocaleString() || '2,499'}
                </div>
                <div className="text-sm text-gray-400 line-through">
                  ${program?.originalPrice?.toLocaleString() || '3,499'}
                </div>
                <div className="text-sm font-medium text-green-600">
                  Save ${((program?.originalPrice || 3499) - (program?.price || 2499)).toLocaleString()}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">
                {program?.overview?.highlights?.slice(0, 4).map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-black">{highlight}</span>
                  </div>
                )) || (
                  // Fallback content if highlights are not available
                  [
                    "Comprehensive curriculum designed by industry experts",
                    "Hands-on practical projects and real-world applications",
                    "Flexible learning schedule that fits your lifestyle",
                    "Career support and networking opportunities"
                  ].map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-black">{highlight}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-3">
                <button 
                  onClick={() => window.location.href = `/support/schedule-consultation?program=${program?.id || 'default'}&type=consultation`}
                  className="w-full rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg"
                >
                  Get Free Consultation
                </button>
                <button 
                  onClick={() => window.location.href = `/support/schedule-consultation?program=${program?.id || 'default'}&type=info-session`}
                  className="w-full rounded-full border border-stroke px-6 py-3 font-medium text-black hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  Schedule Info Session
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 border-t border-stroke pt-6 text-center">
                <p className="text-sm text-titlebgdark mb-2">Questions? Speak with an advisor</p>
                <a href="tel:+1-800-GIHCR-EDU" className="text-primary font-semibold">
                  1-800-GIHCR-EDU
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailHero;