function Footer() {
  return (
    <div className="bg-neutral-950/80">
      <button className="flex w-full h-10 bg-neutral-800/60 cursor-pointer justify-center items-center gap-3 hover:text-neutral-400">
        <span className="cursor-pointer material-symbols-rounded">
          keyboard_arrow_up
        </span>
        VOLVER AL INICIO
        <span className="cursor-pointer material-symbols-rounded">
          keyboard_arrow_up
        </span>
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 mb-4 md:mb-6 mt-5 h-fit w-full justify-items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold">Sobre nosotros</h2>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Equipo
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Inversores
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Trabaja con nosotros
          </a>
          <div className="flex gap-3 mt-5 justify-around">
            <a
              href="#"
              className="hover:text-neutral-400 hover:scale-110 cursor-pointer"
            >
              <svg
                aria-label="Instagram"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-neutral-400 hover:scale-110 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                width="26"
                aria-hidden="true"
                fill="currentColor"
                role="img"
              >
                <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-neutral-400 hover:scale-110 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 14222 14222"
                fill="currentColor"
                aria-hidden="true"
                role="img"
              >
                <path d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111Zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28Zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137Zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold">Soporte</h2>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Preguntas frecuentes
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Contacto
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Envíos y entregas
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Política de devolución
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Política de privacidad
          </a>
          <a
            href="#"
            className="text-sm relative text-neutral-300/85 cursor-pointer w-fit hover:text-white after:w-0 hover:after:w-1/1 after:absolute after:-bottom-[2px] after:left-0 after:bg-white after:h-[1px] hover:after:transition-[width] after:ease-in-out after:duration-300  after:content-[' ']"
          >
            Términos y condiciones
          </a>
        </div>
        <div className="hidden md:flex md:flex-col">
          <h2 className="text-base font-semibold">Newsletter</h2>
          <p className="text-sm text-neutral-300/85 mt-2">
            Inscríbase para ofertas exclusivas, eventos y más.
          </p>
          <input
            className="mt-7 bg-neutral-900 p-3 rounded-lg focus:outline-none hover:bg-neutral-800 focus:bg-neutral-800"
            placeholder="E-mail"
          ></input>
          <div className="hidden md:flex gap-4 mt-16 justify-end">
            <img src="./mc_symbol.svg" />
            <img src="./AXP_BlueBoxLogo_Alternate_SMALLscale_RGB_DIGITAL_80x80.svg" />
            <img src="./Visa_Brandmark_Blue_RGB_2021.svg" />
            <img src="./paypal_symbol.svg" />
          </div>
        </div>
      </div>
      <img
        className="flex w-20 justify-self-center"
        src="./public/notChatGPT Image Sep 21, 2025, 10_54_29 PM.png"
      ></img>
      <p className="flex justify-center p-3 text-xs pb-8">
        © 2025 eBazon. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
