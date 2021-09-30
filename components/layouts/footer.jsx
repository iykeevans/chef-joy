import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Logo from "./logo";
import Twitter from "../svg/twitter";
import Facebook from "../svg/facebook";
import Instagram from "../svg/instagram";
import { fetchCities } from "../../services/chef-api";

function Footer() {
  const coordinates = useSelector((state) => state.geoLocation);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (coordinates && Object.keys(coordinates).length) {
      fetchCities({ ...coordinates, limit: 5 })
        .then((res) => {
          if (Array.isArray(res)) return;

          setCities(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [coordinates]);

  return (
    <footer className="w-11/12 mx-auto pb-5 pt-44">
      <section className="grid md:grid-cols-6 grid-cols-2 gap-y-8 pb-12">
        <div className="col-span-2">
          <div className="mb-3" style={{ width: 150 }}>
            <Logo />
          </div>

          <div className="mb-4">Your personal chef to cook anything.</div>

          <div className="flex">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>

        <div className="col-span-1">
          <h5 className="font-semibold mb-4">Company</h5>
          <div className="text-gray-500 mb-2">Who We Are</div>
          <div className="text-gray-500 mb-2">Blog</div>
          <div className="text-gray-500 mb-2">Careers</div>
          <div className="text-gray-500 mb-2">Report Fraud</div>
          <div className="text-gray-500">Contact</div>
        </div>

        <div className="col-span-1">
          <h5 className="font-semibold mb-4">Nearby</h5>
          {cities.length ? (
            <>
              {cities.map((city) => (
                <div className="text-gray-500 mb-2">
                  {city.name} <span>{city.state_code}</span>
                </div>
              ))}
            </>
          ) : (
            <div className="text-gray-500 mb-2">No Nearby Cities</div>
          )}
        </div>

        <div className="col-span-1">
          <h5 className="font-semibold mb-4">For Chefs</h5>
          <div className="text-gray-500 mb-2">Register</div>
          <div className="text-gray-500 mb-2">Login</div>
          <div className="text-gray-500 mb-2">Faqs</div>
          <div className="text-gray-500">Support</div>
        </div>

        <div className="col-span-1">
          <h5 className="font-semibold mb-4">For You</h5>
          <div className="text-gray-500 mb-2">Privacy</div>
          <div className="text-gray-500 mb-2">Terms</div>
          <div className="text-gray-500 mb-2">Security</div>
          <div className="text-gray-500">Sitemap</div>
        </div>
      </section>

      <section className="border-t flex justify-center pt-5 text-gray-500">
        <small className="text-center" style={{ fontSize: 10 }}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2021 &copy; ChefJoy Pvt Ltd All
          rights reserved.
        </small>
      </section>
    </footer>
  );
}

export default Footer;
