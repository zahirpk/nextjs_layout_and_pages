

import Navbar from '@/component/dashboard_navbar/Navbar'
export default function RootLayout({ children }) {
    return (
        <section>
            <Navbar/>
            {children}
        </section>
    )
  }