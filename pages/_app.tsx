import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

// @ts-ignore
import { MDXProvider } from '@mdx-js/react';

import { AppProps } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '@/lib/theme';

import '../styles/globals.css';
import '../styles/loaders.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <MDXProvider>
            <Layout>
                <Head>
                    <title>Banque Populaire - Vos projets</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="robots" content="noindex" />
                    <link href={`/favicon.ico`} rel="icon" />
                    <link
                        rel="preload"
                        href={`/fonts/ubuntu-v15-latin-300.woff2`}
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />
                    <link
                        rel="preload"
                        href={`/fonts/ubuntu-v15-latin-regular.woff2`}
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />
                    <link
                        rel="preload"
                        href={`/fonts/ubuntu-v15-latin-500.woff2`}
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />
                    <link
                        rel="preload"
                        href={`/fonts/ubuntu-v15-latin-700.woff2`}
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />
                    <link href={`/fonts/webfonts.css`} rel="stylesheet" />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Layout>
        </MDXProvider>
    );
};

export default MyApp;
