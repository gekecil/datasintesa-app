import '../styles/app.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function app({ Component, pageProps }: AppProps) {
    let pageTitle = process.env.NEXT_PUBLIC_APP_TITLE

    if (pageProps.title) pageTitle = (pageProps.title).concat(' - ').concat(pageTitle)

    return (
        <>
            <Head children={<title>{pageTitle}</title>} />
            <div className='container max-w-screen-md mx-auto'>
                <Header appTitle={process.env.NEXT_PUBLIC_APP_TITLE} />
                <Component {...pageProps} />
                <Footer companyName={process.env.NEXT_PUBLIC_COMPANY_NAME} />
            </div>
        </>
    )
}
