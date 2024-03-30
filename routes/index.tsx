import { Layout } from "../components/Layout.tsx";

export function Hero() {
  return (
    <>
      <img src="/images/white-logo-textless.png" alt="Dovetail" height={180} />
      <p>
        <span className="xx-large outline">Dovetail</span>
        <br />
        <span className="x-wide">Covent Garden</span>
      </p>
      <p>
        <span className="xx-large x-wide">INTIMATE | REFINED | ELEVATED</span>
      </p>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Layout>
        <section className="primary">
          <div className="centeredContent">
            <h2>Discover The Dovetail Bar</h2>
            <p>
              Tucked away above the lively Covent Garden Market, right in the
              heart of London's West End, you'll find The Dovetail Bar - a cozy
              secret just waiting to be shared.
            </p>
            <p>
              In partnership with RedFarm, this hidden spot is where creativity
              meets cocktails, offering a unique blend of innovation and charm
              in a welcoming, intimate setting. It's your escape from the city's
              frenzy, a place where everyone is invited to enjoy the simplicity
              of good company and great drinks.
            </p>
            <p>
              Discover The Dovetail Bar, the West End’s best kept secret.
            </p>
          </div>
        </section>

        <section className="secondary">
          <div className="centeredContent split">
            <div>
              <h2>
                <span>THE PERFECT SPACE FOR YOUR</span>
                <br />PRIVATE HIRE
              </h2>
              <p>
                Whether you're planning an intimate gathering, a celebration to
                remember, or a discreet corporate meeting, our hidden gem offers
                a unique setting that combines the charm of secrecy with the
                warmth of hospitality.
              </p>
              <p>
                In collaboration with RedFarm, The Dovetail Bar is more than
                just a venue; it's an experience waiting to be tailored to your
                every need. Our creative cocktails, served with a flair for the
                unpretentious, promise to enchant your guests, while our refined
                yet cozy environment ensures a memorable occasion for all.
              </p>
              <p className="paddedTop">
                <a href="/private-hire" className="buttonLink">See the space</a>
              </p>
            </div>
            <div>
              <img
                src="/images/Dovetail-X-Ferrand-58-Large.jpg"
                alt="Private Hire"
              />
            </div>
          </div>
        </section>

        <section className="secondary">
          <div className="centeredContent">
            <h2>What's On</h2>

            <div className="whatsOnPanel split">
              <div>
                <h3>Monday Takeovers</h3>
                <span>EVERY MONDAY FROM 5PM</span>
                <p>
                  Join us on Mondays where some of the worlds best brands
                  takeover our bar with speciality cocktails made to impress.
                  From Scotch brands to gin, agave and more, join us to discover
                  new delights in our private bar.
                </p>
                <p className="paddedTop">
                  <a href="/bookings" className="buttonLink">Book Mondays</a>
                </p>
              </div>
              <div>
                <img
                  src="/images/DTB-Initial-Cocktail-Shoot-LR-067.jpg"
                  alt="Private Hire"
                />
              </div>
            </div>

            <div className="whatsOnPanel alternate split">
              <div>
                <img
                  src="/images/Dovetail-X-Ferrand-67-Large.jpg"
                  alt="Private Hire"
                />
              </div>
              <div>
                <h3>Masterclasses</h3>
                <span>FUN INTIMATE CLASSES & ACTIVITIES</span>
                <p>
                  Looking to elevate your cocktail-making prowess?
                </p>
                <p>
                  The Dovetail Bar invites you to immerse yourself in the art
                  and science of mixology with our bespoke cocktail
                  masterclasses. Tailored for enthusiasts of all expertise
                  levels, these sessions offer a hands-on experience where
                  you'll step behind the bar alongside our seasoned mixologists.
                </p>
                <p>
                  Embark on a captivating journey through the intricacies of
                  cocktail creation, from mastering foundational techniques to
                  exploring the rich history and theory that breathe life into
                  your favorite concoctions. Our masterclasses provide the
                  perfect blend of education and entertainment for a memorable
                  date night or an engaging corporate team-building activity.
                </p>
                <p>
                  Join us at The Dovetail Bar, where every sip tells a story,
                  and discover the secrets to crafting the perfect drink.
                </p>
                <p className="paddedTop">
                  <a href="/bookings" className="buttonLink">Book Now</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <iframe
          className="map"
          loading="lazy"
          src="https://maps.google.com/maps?q=Dovetail%20Bar%2C%20covent%20garden&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
          title="Dovetail Bar, covent garden"
          aria-label="Dovetail Bar, covent garden"
        >
        </iframe>

        <section className="primary">
          <div className="centeredContent">
            <h2>@DOVETAILBARS</h2>
            <iframe
              src="https://www.instagram.com/dovetailbars/embed"
              className="instagramFeed"
              title="Instagram Feed"
              aria-label="Instagram Feed"
              frameBorder="0"
              allowTransparency={true}
            >
            </iframe>
          </div>
        </section>
      </Layout>
    </>
  );
}
