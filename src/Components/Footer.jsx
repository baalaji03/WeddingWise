import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import React from 'react';

const FooterCom = () => {
    return (
        <Footer container className='border border-t-8 dark:bg-black bg-orange-200 '>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="#"
                src="https://png.pngtree.com/png-vector/20191108/ourmid/pngtree-diamond-wedding-ring-png-image_1963605.jpg"
                alt="Logo"
                name="WeddingWise"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                  <Footer.Link href="#">React</Footer.Link>
                  <Footer.Link href="#">Redux</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://github.com/baalaji03">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                  <Footer.Link href="#">LinkedIn</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
            <Footer.Copyright href="#" by="RPS BAALAJI™" year={new Date().getFullYear()} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="https://github.com/baalaji03" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
              <Footer.Icon href="#" icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    );
};

export default FooterCom;