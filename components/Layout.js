import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


export default class Layout extends React.Component{
	render(){

		const { children, title }= this.props

		return <div>
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:description" content="Aplicación para escuchar podcasts desarrollada por Carlos Hernández" />
        <link rel="manifest" href="./../static/manifest.json" />
        <meta name="theme-color" content="#061280"/>
        <link rel="shortcut icon" href="./../static/logo.png" />
        <link href="https://fonts.googleapis.com/css?family=Blinker&display=swap" rel="stylesheet"/>
				<title>{title}</title>
			</Head>
			<header>
				<Link href="/">
          <div className="home-link">
            <a>Podcasts</a>
          </div>
        </Link>
        <Link href="/about">
          <div className="about-link">
            <a>About</a>
          </div>
        </Link>
			</header>
			{ children }
			<style jsx>{`
				header {
		          color: #fff;
		          background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(4,2,59,1) 100%);
		          padding: 15px;
              display: flex;
		        }

            .home-link a, .about-link a{
              cursor: pointer;
            }

            .home-link{
              width: 80%;
            }

            .about-link{
              width: 20%;
              text-align: right;
            }

		        header a{
		        	color: #fff;
		        	text-decoration: none;
		        }

	        	`}
			</style>
			<style jsx global>{`
        body {
          margin: 0;
          font-family: 'Blinker';
          background: white;
        }

        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #29d;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #29d, 0 0 5px #29d;
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #29d;
          border-left-color: #29d;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	}
}