export default function Footer() {
    return (
        <footer className="w-full py-12 px-6 bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-brand-dark dark:text-white">Hasindu Nagolla</span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    © {new Date().getFullYear()} Hasindu Nagolla. All rights reserved.
                </p>

                <ul className="flex items-center gap-8">
                    <li>
                        <a href="https://github.com/hasindu-nagolla" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-500 hover:text-brand-primary uppercase tracking-widest transition-colors">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/hasindu-nagolla/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-500 hover:text-brand-primary uppercase tracking-widest transition-colors">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}