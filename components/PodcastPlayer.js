import Link from 'next/link'

export default class PodcastPlayer extends React.Component {
	render(){

		const { clip, onClose } = this.props

		return <div className='clip'>
          <nav>
          {
          	onClose ? <a onClick={onClose}>&lt; Volver</a>
          	:
            <Link href={`/channel?id=${clip.channel.id}`}>
              <a className='close'>&lt; Volver</a>
            </Link>
          }
          </nav>

          <picture>
            <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
          </picture>

          <div className='player'>
            <h3>{ clip.title }</h3>
            <h6>{ clip.channel.title }</h6>
            <audio controls autoPlay={true}>
              <source src={clip.urls.high_mp3} type='audio/mpeg' />
            </audio>
          </div>

          <style jsx>{`
        nav {
          background: none;
        }
        nav a {
          display: inline-block;
          padding: 15px;
          color: white;
          cursor: pointer;
          text-decoration: none;
        }
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(4,2,59,1) 100%);
          color: white;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .player {
          padding: 30px;
          background: rgba(0,0,0,0.3);
          text-align: center;
        }
        .player h3 {
          margin: 0;
        }
        .player h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>
        </div>

	}

}