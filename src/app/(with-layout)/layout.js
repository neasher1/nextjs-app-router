import Navbar from '@/components/shared/Navbar'
import { Inter } from 'next/font/google'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer /></>
    )
}
