const Footer = () => {
  return (
    <footer className="bg-red-600 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <span className="text-3xl text-white font-bold tracking-tight mb-4 md:mb-0">
          RuhaEats
        </span>
        <div className="flex flex-col md:flex-row gap-4 text-white text-center md:text-left">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-white px-4">
        <p>&copy; {new Date().getFullYear()} RuhaEats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
