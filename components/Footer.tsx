import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 md:py-12">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="mb-6">
          <a href="#" className="mx-3 hover:text-indigo-400 transition duration-300">Privacy Policy</a>
          <span className="text-gray-600 mx-2">|</span>
          <a href="#" className="mx-3 hover:text-indigo-400 transition duration-300">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Placeholder for social media icons */}
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.447 10.702L18.75 3h-1.72L11.535 9.198 7.646 3H2.82l6.822 10.04L2.895 21H4.67L9.98 14.897l4.35 6.103h4.82zM6.16 4.318L3.25 21H.92l3.433-16.746h-1.12zm11.685 15.682l-3.25-15.682h2.385l3.25 15.682h-2.385z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.027 2.384 7.502 5.82 9.167-.184-.117-.358-.278-.519-.467-.659-.756-1.025-1.748-1.025-2.73 0-.67.042-1.32.124-1.95a5.572 5.572 0 01-1.353-3.664c0-2.433 1.713-4.437 4.02-4.437 1.13 0 2.1.488 2.652 1.277.108.15.176.326.208.514.072.4-.047.8-.184 1.168-.135.35-.327.674-.572.96-.245.286-.54.55-.884.78.093.02.188.03.284.03.585 0 1.059-.283 1.34-1.076.102-.27.164-.56.182-.85.064-.316.03-.642-.09-1.006-.062-.187-.133-.376-.226-.566-.35-.724-.95-1.114-1.847-1.114-1.558 0-2.82 1.262-2.82 2.82 0 1.258.55 2.376 1.416 2.97.108.077.22.146.335.21.266.15.54.277.82.38.318.125.64.215.967.27.327.055.65.082.977.082 1.393 0 2.522-1.13 2.522-2.522 0-1.44-.946-2.616-2.228-2.616-1.282 0-2.31 1.024-2.31 2.31 0 .285.056.558.163.81.042.1.09.19.14.276.184.34.42.66.708.95.288.29.6.544.928.76.328.216.67.397 1.022.54.352.14.71.25 1.07.32.36.07.72.108 1.08.108 1.558 0 2.82-1.262 2.82-2.82s-1.262-2.82-2.82-2.82z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} EliteSite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
