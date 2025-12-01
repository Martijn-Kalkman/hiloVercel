export default function Footer() {
  return (
    <footer id="contact" className="relative text-white">
      <div className="lg:flex lg:flex-row w-11/12 mx-auto">
        <div className=""></div>
        <div className="lg:text-lg mb-6 text-xl grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul>
              <li className="text-center">
                <p>MANAGEMENT</p>
                <p>Milk & Honey</p>
                <a href="mailto:dave@milkhoneyla.com" className="underline">
                  dave@milkhoneyla.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <div className="text-center">
                <p>BOOKING ROW</p>
                <p>WASSERMAN</p>
                <a
                  href="mailto:dave.blackgrove@teamwass.com"
                  className="underline"
                >
                  dave.blackgrove@teamwass.com
                </a>
                <br />
                <a
                  href="mailto:ollie.seaman@teamwass.com"
                  className="underline"
                >
                  ollie.seaman@teamwass.com
                </a>
              </div>
            </ul>
          </div>

          <div>
            <ul>
              <div className="text-center">
                <p>BOOKINGS N/S AMERICA</p>
                <p>UTA</p>
                <a
                  href="mailto:kevin.gimble@unitedtalent.com"
                  className="underline"
                >
                  kevin.gimble@unitedtalent.com
                </a>
                <br />
                <a
                  href="mailto:matt.meyer@unitedtalent.com"
                  className="underline"
                >
                  matt.meyer@unitedtalent.com
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-11/12 mx-auto"></div>
      </div>

      <div className="mx-auto text-center mb-4">
        <a
          target="_blank"
          href="/legal/Privacy_statement_OH_Feb_2025.pdf"
          rel="noopener noreferrer"
        >
          Privacy policy {" | "}
        </a>
        <a
          target="_blank"
          href="/legal/Cookie_statement_Website_OH_feb_2025.pdf"
          rel="noopener noreferrer"
        >
          Cookie policy {" | "}
        </a>
        <a
          target="_blank"
          href="/legal/Terms_and_Conditions_OH_2025.pdf"
          rel="noopener noreferrer"
        >
          Terms & conditions
        </a>
      </div>
    </footer>
  );
}
