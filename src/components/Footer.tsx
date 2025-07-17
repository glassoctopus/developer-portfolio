export default function Footer() {
  const socials = [
    { name: 'LinkedIn', icon: 'linkedin-ico.png' },
    { name: 'GitHub', icon: 'github-ico.png' },
    { name: 'Twitter', icon: 'twitter-ico.png' },
    { name: 'YouTube', icon: 'yt-ico.png' },
    { name: 'Instagram', icon: 'insta-ico.png' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Thomas McMahon</h4>
            <p className="text-gray-400">Fullstack Developer</p>
          </div>

          <div className="flex space-x-6">
            {socials.map((social) => (
              <a 
                key={social.name}
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label={social.name}
              >
                <img 
                  src={`/assets/png/${social.icon}`} 
                  alt={social.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thomas McMahon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}