"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Minimalist headphones on a pink and mint background, artistic and modern."},
  {"id":"product-image-1","url":"https://images.pexels.com/photos/34337538/pexels-photo-34337538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"product display - Photo by Felix Young"},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman enjoying remote work at a café, using a laptop and smartphone."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/5710222/pexels-photo-5710222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Happy ethnic female friends with shopping bags smiling while demonstrating goods to each other"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Three individuals collaborating on financial documents during a business meeting."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/8363771/pexels-photo-8363771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A teacher and students enjoying a high five during a classroom learning activity."},
  {"id":"partner-logo-1","url":"https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design."},
  {"id":"partner-logo-2","url":"https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing."},
  {"id":"partner-logo-3","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarLayoutFloatingOverlay 
            navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Contact", id: "contact" }]} 
            brandName="Webild" 
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard 
            title="Welcome to Our Platform" 
            description="Create beautiful, responsive web experiences" 
            imageSrc="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout 
            title="We create exceptional digital experiences"
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay updated with our latest news"
            description="Subscribe to our newsletter for weekly updates and exclusive content."
            imageSrc="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }] },
              { items: [{ label: "About", href: "about" }] }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
