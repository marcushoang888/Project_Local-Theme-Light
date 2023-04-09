export default function NavBar() {
  return (
    <nav>
      {/* Container */}
      <div>
        {/* Navbar container */}
        <div className="sm:px-[15px] sm:py-[7.5px] sm:flex sm:justify-between items-center">
          <a
            href=""
            className="block first-letter:sm:m-[6px] sm:flex sm:justify-between items-center"
          >
            <div className="sm:mr-[10px]">
              <svg
                height={64}
                viewBox="0 0 64 64"
                width={64}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  style={{
                    fill: "none",
                    stroke: "#1d1d1d",
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                  }}
                >
                  <path d="m36 36h12v22h-12z" />
                  <path d="m56 30v28h-48v-28" />
                  <path d="m16 36h14v12h-14z" />
                  <path d="m52.6 6h-41.2l-9.4 16.5a7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0zm-50.6 16h60m-30-16v16.5m-15 0 5-16.5m25 16.5-5-16.5" />
                </g>
              </svg>
            </div>
            <div>
              <p className="sm:text-xs">Picking up?</p>
              <p className="sm:text-[15px]">
                Select store
                <span className="inline-block">
                  <svg
                    width={13}
                    height={8}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
                      fill="#000"
                    />
                    <path
                      d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
                      fill="#000"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>

          <a
            href=""
            className="block first-letter:sm:m-[6px] sm:flex sm:justify-between items-center"
          >
            <div className="sm:mr-[10px]">
              <svg
                height={64}
                viewBox="0 0 64 64"
                width={64}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  style={{
                    fill: "none",
                    stroke: "#1d1d1d",
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                  }}
                >
                  <path d="m36 36h12v22h-12z" />
                  <path d="m56 30v28h-48v-28" />
                  <path d="m16 36h14v12h-14z" />
                  <path d="m52.6 6h-41.2l-9.4 16.5a7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0 15 0zm-50.6 16h60m-30-16v16.5m-15 0 5-16.5m25 16.5-5-16.5" />
                </g>
              </svg>
            </div>
            <div>
              <p className="sm:text-xs">Picking up?</p>
              <p className="sm:text-[15px]">
                Select store
                <span className="inline-block">
                  <svg
                    width={13}
                    height={8}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414.086 7.9 6.57 6.485 7.985 0 1.5 1.414.086Z"
                      fill="#000"
                    />
                    <path
                      d="M12.985 1.515 6.5 8 5.085 6.586 11.571.101l1.414 1.414Z"
                      fill="#000"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
