const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5491161361269?text=Hola%20Patricia%2C%20le%C3%AD%20sobre%20el%20Programa%20C%C3%B3digo%20Neutr%C3%B3n%20y%20quiero%20evaluar%20mi%20situaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current"
      >
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.265-.464-2.406-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.202.049-.382-.029-.533-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.246-.705.246-1.296.173-1.426-.071-.13-.272-.21-.571-.36zM12.014 20.021h-.006c-1.57 0-3.104-.42-4.453-1.215l-.32-.195-3.31.865.882-3.215-.215-.345A7.95 7.95 0 014.064 12c0-4.415 3.595-8 8.016-8s8.016 3.585 8.016 8-3.595 8-8.082 8.021z" />
        <path d="M12.014 2C6.486 2 2 6.486 2 12c0 1.846.496 3.584 1.385 5.073L2 22l5.093-1.33A9.957 9.957 0 0012.014 22c5.523 0 10.014-4.486 10.014-10.014S17.537 2 12.014 2z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
