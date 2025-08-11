const DownloadBtnP = ({ label, iconURL, href, newTab = false }) => {
  const baseStyles = "flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-primary rounded-full border-primary text-white mt-5 transform transition-transform duration-300 hover:scale-105";

  if (href) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        className={baseStyles}
      >
        <img
            src={iconURL}
            alt="download-btn"
            className=" w-5 h-6"
        />
        {label}
      </a>
    );
  }

  return (
    <button className={baseStyles}>
      {label}
    </button>
  );
};

export default DownloadBtnP;
