import React from "react";

const Contact = () => {
  return (
    <div className="border-t border-t-gray-600 mt-10" id="contact">
      <div className="p-8 mt-5">
        <div className="flex flex-col justify-center items-center">
          <div className="border border-gray-500 rounded-lg py-8 px-30 text-center">
            <h2 className="text-xl font-bold text-gray-200">
              Let's work together
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              I am open to GIS developer roles, freelance map projects <br />{" "}
              and collaborations. Feel free to reach out!
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <a
                href="http://mail.google.com/mail/u/0/"
                className="bg-blue-800 py-1.5 px-4 rounded-lg text-sm font-bold"
                target="_blank"
              >
                Send an Email
              </a>
              <a
                href="https://github.com/dayus16"
                className="border border-gray-500 py-1.5 px-4 rounded-lg text-sm"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dayo-odoje/"
                className="border border-gray-500 py-1.5 px-4 rounded-lg text-sm"
                target="_blank"
              >
                Linkedln
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
