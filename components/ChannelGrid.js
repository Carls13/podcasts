import { Link } from '../routes'
import slug from '../helpers/slug'
import './channel-grid.styles.css'

export default class ChannelGrid extends React.Component{

	render(){

		const { channels } = this.props

		return <div className="channels">
				{ channels.map((channel) =>(
					<Link route="channel" params={{
						slug: slug(channel.title),
						id: channel.id
					}} prefetch>
						<a className="channel">
							<img src={ channel.urls.logo_image.original} alt={channel.title}/>
							<h2>{ channel.title }</h2>
						</a>
					</Link>
				))}
			</div>

	}
}