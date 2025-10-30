export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">1513 at Stone Creek</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your Story Begins at 1513 at Stone Creek
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="\venue" className="hover:text-primary-foreground transition-colors">
                  The Venue
                </a>
              </li>
              <li>
                <a href="\about" className="hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="\gallery" className="hover:text-primary-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="\contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/stonecreekvenue/?hl=en" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/stonecreekinnvenue" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} 1513 at Stone Creek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
